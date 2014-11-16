import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wordlist');
  this.route('discover');
  this.resource('discover', { path: '/wordlist/:id' }, function () {
      this.route('study', { path: '' });
      this.route('multiplechoice', { path: '/multiplechoice'});
  });
});

export default Router;