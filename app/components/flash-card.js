import Ember from 'ember';

export default Ember.Component.extend({
    classNames:["flash-card"],
    isFlipped : false,
    word : null,
    actions : {
        flip : function () {
            this.set('isFlipped',!this.get('isFlipped'));
        }
    }
});
