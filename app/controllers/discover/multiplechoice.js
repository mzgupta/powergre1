import Ember from 'ember';
import NavigationMixin from 'powergre/mixins/navigation';


export default Ember.Controller.extend(NavigationMixin,{

    options : function () {

        var options = this._getNRandomWords(3),randomIndex;
        randomIndex = this.randomValue(0,4);
        options.splice(randomIndex,0,this.get('word'));
        return options;      


    }.property('index','model')

});
