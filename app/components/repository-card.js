import Component from '@ember/component';

export default Component.extend({
  expanded: false,
  click() {
    this.toggleProperty('expanded');
  },
});
