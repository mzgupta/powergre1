import Ember from 'ember';
import SetService  from '../services/set';

export default Ember.Route.extend({
    model : function(){
        return SetService.getSets();
    },
    actions: {
        explore : function(set){
            this.get('controller').transitionToRoute('discover',set.id);
        }
    }
});
