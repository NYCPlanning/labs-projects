import Route from '@ember/routing/route';
import fetch from 'fetch';

const HOST = 'https://api.github.com/search';
const GITHUB_USER = 'nycplanning';

export default Route.extend({
  async model() {
    const { items: repositories } = await fetch(`${HOST}/repositories?q=org:${GITHUB_USER}%20topic:labs&per_page=100`)
      .then(blob => blob.json());

    for (const dependency of ['ember-source', 'express', 'gatsby', 'react-dom']) {
      const { items } = await fetch(`${HOST}/code?q=${dependency}+in%3Afile+filename%3Apackage.json%20org:nycplanning`)
        .then(blob => blob.json());
      const repository_ids = items.map(({ repository: { id } }) => id);

      for (const id of repository_ids) {
        const foundRepo = repositories.find(repo => repo.id === id) || {};
        
        foundRepo.dependencies = {};
        foundRepo.dependencies[dependency] = true;
      }
    }

    return repositories.sortBy('pushed_at').reverse();
  }
});
