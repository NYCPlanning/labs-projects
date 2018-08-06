import Route from '@ember/routing/route';
import object from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import fetch from 'fetch';

const HOST = 'https://api.github.com';
const GITHUB_USER = 'nycplanning';

// can't be more than 10
const TOTAL_SEARCHES = 5;

export default Route.extend({
  async model() {
    const { resources: { search: { remaining, reset } } } = await fetch(`${HOST}/rate_limit`).then(blob => blob.json());

    if (remaining < TOTAL_SEARCHES) {
      await timeout((reset * 1000) - Date.now());
    }

    const { items: repositories } = await fetch(`${HOST}/search/repositories?q=org:${GITHUB_USER}%20topic:labs&per_page=100`)
      .then(blob => blob.json());

    return repositories
      .map(repo => {
        return object.create(repo);
      })
      .sortBy('pushed_at').reverse();
  },

  setupController(controller, model) {
    controller.set('enrichmentState', this.get('enrichDataTask'));
    for (const dependency of ['ember-source', 'express', 'gatsby', 'react-dom']) {
      this.get('enrichDataTask').perform(model, dependency);
    }

    this._super(controller, model);
  },

  enrichDataTask: task(function * (model, dependency) {
    const { items } = yield fetch(`${HOST}/search/code?q=${dependency}+in%3Afile+filename%3Apackage.json%20org:nycplanning`)
      .then(blob => blob.json());
    const repository_ids = items.map(({ repository: { id } }) => id);

    for (const id of repository_ids) {
      const foundRepo = model.findBy('id', id);

      if (foundRepo) {
        foundRepo.set('dependencies', {});
        foundRepo.set(`dependencies.${dependency}`, true);
      }
    }
  }).enqueue(),

  actions: {
    error() {
      // this does not work yet - the model hook needs to 
      // use a try except block to handle the async await
      this.transitionTo('error');
    }
  }
});
