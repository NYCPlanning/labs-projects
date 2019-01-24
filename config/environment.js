'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'labs-project-dashboard',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    emberNotifier: {
      duration: 60000,
    },

    fontawesome: {
      icons: {
        'free-solid-svg-icons': [
          'ban',
          'bug',
          'check',
          'code-branch',
          'equals',
          'greater-than',
          'less-than',
          'plus',
          'question',
          'star',
          'sync',
          'tag',
          'times',
          'thumbs-up',
          'thumbs-down',
        ],
        'free-brands-svg-icons': [
          'ember',
          'github',
        ]
      },
      host: 'http://localhost:3000'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.host = 'https://home-api.planninglabs.nyc';
  }

  if (environment === 'staging') {
    ENV.host = 'https://home-api-staging.planninglabs.nyc';
  }

  return ENV;
};
