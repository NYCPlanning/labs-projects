import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  typeOfProject: DS.attr(),
  labsAssessment: DS.attr(),
  lastEngagement: DS.attr('string'),
  stagingUrl: DS.attr('string'),
  productionUrl: DS.attr('string'),
  repos: DS.hasMany('repo')
});
