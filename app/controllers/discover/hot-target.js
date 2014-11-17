import Ember from 'ember';
import NavigationMixin from 'powergre/mixins/navigation';


export default Ember.ArrayController.extend(NavigationMixin,{
    increament : 20,
    hotWord : null,
    itemController:'discover/word',
    shuffle:function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },    
    hotWords : function() {
        var index = this.get('index'),
            increament = this.get('increament');

        return this.shuffle(this.get('model').slice(index,index+increament));
    }.property('index')

});
