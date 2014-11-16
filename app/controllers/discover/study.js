import Ember from 'ember';

export default Ember.Controller.extend({

    index : 0,

    range : function (){
        var start=0, 
        end=0,
        model=this.get('model');
        if(model) {
            end = model.length-1;
        }
        return {
            start : start,
            end : end
        };
    }.property('model'),

    word  : function() {
        var model = this.get('model'),
            index = this.get('index');
        return model[index];
    }.property('index','model'),

    _isValidRange : function(newIndex){
        var range = this.get('range');
        return (newIndex >= range.start) && (newIndex <= range.end);
    },

    _updateIndex : function (newIndex) {
        if(this._isValidRange(newIndex)){
            this.set('index',newIndex);
        }
    },

    actions: {
        next : function(){
            var newIndex = this.get('index') + 1;
            this._updateIndex(newIndex);
        },
        previous: function(){
            var newIndex = this.get('index') - 1;
            this._updateIndex(newIndex);
        }
    }  

});
