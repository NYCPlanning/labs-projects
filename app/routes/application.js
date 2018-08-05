import Route from '@ember/routing/route';
import fetch from 'fetch';

const HOST = 'https://api.github.com/search/repositories';
const GITHUB_USER = 'nycplanning';

export default Route.extend({
  model() {
    return fetch(`${HOST}?q=org:${GITHUB_USER}%20topic:labs&per_page=100`)
      .then(blob => blob.json())
      .then(({ items }) => items.sortBy('pushed_at').reverse());
  }
});
