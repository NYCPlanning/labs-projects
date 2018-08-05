import Route from '@ember/routing/route';
import object from '@ember/object';
import { task } from 'ember-concurrency';
import fetch from 'fetch';

export const HOST = 'https://api.github.com/search';
export const GITHUB_USER = 'nycplanning';

export default Route.extend({
  async model() {
    const { items: repositories } = await fetch(`${HOST}/repositories?q=org:${GITHUB_USER}%20topic:labs&per_page=100`)
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
    const { items } = yield fetch(`${HOST}/code?q=${dependency}+in%3Afile+filename%3Apackage.json%20org:nycplanning`)
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
      this.transitionTo('error');
    }
  }
});
