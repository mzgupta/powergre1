import Ember from 'ember';
import SetService  from '../services/set';


export default Ember.Route.extend({
    model:function (params) {
        return SetService.getById(params.id);
    }
});
