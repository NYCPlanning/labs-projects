import Route from '@ember/routing/route';
import fetch from 'fetch';

const HOST = 'https://api.github.com/search/repositories';
const GITHUB_USER = 'nycplanning';

export default Route.extend({
  model() {
    return fetch(`${HOST}?q=user:${GITHUB_USER}%20topic:labs`);
  }
});
