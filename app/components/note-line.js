import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    note: null,
    selectedNote: null,
    isSelected: function() {
        return this.get('note').id === this.get('selectedNote').id
    }.property('note', 'selectedNote'),
    actions: {
        selectNote() {
            this.sendAction('action', this.get('note'))
        }
    }
})
