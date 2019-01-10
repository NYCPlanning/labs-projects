import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['hovered'],
  hovered: true,

  expanded: false,
  click() {
    this.toggleProperty('expanded');
  },

  actions: {
    imageError({ target }) {
      target.src = '/svgs/circleci-unknown.svg';
    },
  },
});
