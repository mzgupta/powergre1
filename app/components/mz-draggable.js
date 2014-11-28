import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['draggable'],
    attributeBindings:['isDraggable:draggable'],
    isDraggable:'true',
    word:null,

    didStartDragging: function(e){
        this.sendAction('startDragAction');
    }.on('dragStart'),

    didDragOver: function(e){
        e.preventDefault();                                 
    }.on('dragOver'),

    didDrop: function (e) {
        e.preventDefault();
        this.sendAction('dropAction');        
    }.on('drop'),

    didDragEnd: function (e) {
        e.preventDefault();
        this.sendAction('dragEndAction');        
    }.on('dragEnd')


});
