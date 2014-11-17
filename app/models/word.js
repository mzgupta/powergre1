import Ember from 'ember';

/**
 * @namespace models
 * @class Word
 * @extends Ember.Object
 * @module Models
 */
var Word = Ember.Object.extend({
  /**
   * Id of the project.
   * @property id
   * @type Number
   */
  id: null,

  /**
   * @property name
   * @type String
  */
   name:null,

  /**
   * @property meaning
   * @type String
  */
   meaning:null,

  /**
   * @property synonyms
   * @type String
  */
   synonyms:null,

  /**
   * @property description
   * @type String
  */
   description:null

});

export default Word;
