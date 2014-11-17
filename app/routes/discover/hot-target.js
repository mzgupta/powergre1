import Ember from 'ember';
import Word from 'powergre/models/word';

export default Ember.Route.extend({


    setupController : function (controller,model) {
        controller.set('model',this.prepareHotWords(model));
    },
    prepareHotWords : function (model){
        var hotWords = Ember.A([]);

        for(var i=0; i<model.length;i++) {
            hotWords.push({
                flip : true,
                word : Word.create(model[i])
            });
            hotWords.push({
                flip : false,
                word : Word.create(model[i])
            });
        }
        return hotWords;
    }

});
