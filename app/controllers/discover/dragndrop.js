import Ember from 'ember';
import NavigationMixin from 'powergre/mixins/navigation';


export default Ember.ArrayController.extend(NavigationMixin,{
    increament : 12,
    hotWord : null,
    itemController:'discover/word',
    shuffle:function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },    
    hotWords : function() {
        var index = this.get('index'),
            increament = this.get('increament'),
            hotWords = this.get('model').slice(index,index+increament),
            source, target;

        source = hotWords.filter(function(item){
            return item.flip;
        });


        target = hotWords.filter(function(item){
            return !item.flip;
        });


        source = this.shuffle(source);
        target = this.shuffle(target);

        hotWords = Ember.A([]);

        for(var i=0;i<source.length;i++){
            hotWords.push(source[i]);
            hotWords.push(target[i]);            
        }

        return hotWords;
    }.property('index')

});
