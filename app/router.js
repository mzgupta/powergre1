import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wordlist');
  this.route('discover');
  this.resource('discover', { path: '/wordlist/:id' }, function () {
      this.route('study', { path: '/study' });
      this.route('multiplechoice', { path: '/multiplechoice'});
      this.route('reversechoice', { path: '/reversechoice'});
      this.route('hot-target', { path: '/hottarget'});
      this.route('dragndrop', { path: '/dragndrop'});
  });
});

export default Router;