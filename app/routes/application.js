import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notifier: service(),

  async model() {
    return this.store.findAll('project')
  },

  setupController(controller, model) {
    this._super(controller, model);
  },
});
