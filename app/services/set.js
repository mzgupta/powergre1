import Ember from 'ember';
import Dictionary from './dictionary';
var SetService = Ember.Object.extend({
  size : 30,

  counts : function() {
    return (Dictionary.length / this.get('size'));
  }.property('size'),

  getSets: function() {
    var size,sets,counts,id;
    sets=Ember.A([]);

    size = this.get('size');
    counts = this.get('counts');


    for(var i=0;i<counts;i++){
      id=i+1;
      sets.push({
        id: id,
        words:this._getWord(i,id)
      });
    }
    return sets;
  },

  getById: function (id) {
    return this._getWord(id-1,id);
  },

  _getWord : function(start,end) {
    start = start * this.get('size');
    end   = end   * this.get('size');
    return Dictionary.slice(start,end);
  }

});

export default SetService.create();