import Ember from 'ember';

export default Ember.Controller.extend({

    highlight : false,

    hide : false,

    namex : function(){
        return this.get('name');
    }.property('name'),

    actions : {
        hotSelect : function() {
            var parentController = this.parentController,
                hotWord = parentController.get('hotWord');
            if(this.get('highlight')) {
                parentController.set('hotWord',null);
                this.set('highlight',false);
                return;
            }
            if(hotWord){
                if(hotWord.get('model.word.id') === this.get('model.word.id')){
                    this.set('hide',true);
                    hotWord.set('hide',true);
                    parentController.set('hotWord',null);
                }
            }
            else{
                parentController.set('hotWord',this);
                this.set('highlight',true);
            }

        }
    }
});
