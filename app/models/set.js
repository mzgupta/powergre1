import Ember from 'ember';

/**
 * @namespace models
 * @class Set
 * @extends Ember.Object
 * @module Models
 */
export default Ember.Object.extend({
  /**
   * Id of the project.
   * @property id
   * @type Number
   */
  id: null,

  /**
   * An array of models.Word instances.
   * @property words
   * @type Array
  */
   words:null

});