import Ember from 'ember';

export function dictionaryLink(input) {
  var link = 'http://dictionary.reference.com/browse/'+input;
  return new Ember.Handlebars.SafeString('<a href="'+link+'" target="_blank">'+input+'</a>');
};

export default Ember.Handlebars.makeBoundHelper(dictionaryLink);
