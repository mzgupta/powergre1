import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import timesHelper from './helpers/times';


Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

 
Ember.Handlebars.registerHelper('times', timesHelper);
loadInitializers(App, config.modulePrefix);

export default App;
