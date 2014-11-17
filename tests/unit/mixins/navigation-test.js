import Ember from 'ember';
import NavigationMixin from 'powergre/mixins/navigation';

module('NavigationMixin');

// Replace this with your real tests.
test('it works', function() {
  var NavigationObject = Ember.Object.extend(NavigationMixin);
  var subject = NavigationObject.create();
  ok(subject);
});
