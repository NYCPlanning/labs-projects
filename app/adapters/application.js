import DS from 'ember-data';
import config from '../config/environment';

const { host } = config;

export default DS.JSONAPIAdapter.extend({
  host,
  namespace: 'dashboard',
});
