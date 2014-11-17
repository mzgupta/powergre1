import Ember from 'ember';

export default Ember.Component.extend({
    question:null,
    selection:null,
    isCorrect:false,
    showResult:false,

    questionChanged: function(){
        this.set('showResult',false);
        this.set('isCorrect',false);
    }.observes('question'),

    optionChanged:function(value){
        this.set('showResult',true);
        if(this.get('question.id') === value.id){
            this.set('isCorrect',true);
        }
        else {
            this.set('isCorrect',false);            
        }
    }
});
