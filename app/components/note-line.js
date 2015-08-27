import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    note: null,
    selectedNote: null,
    isSelected: function() {
        return this.get('note').id === this.get('selectedNote').id
    }.property('note', 'selectedNote'),
    title: function () {
        return this.get('note').title || 'New Note'
    }.property('note'),
    actions: {
        select() {
            this.sendAction('onSelect', this.get('note'))
        },
        archive() {
            this.sendAction('onArchive', this.get('note'))
        },
        delete() {
            this.sendAction('onDelete', this.get('note'))
        },
        toggleTagView() {
            this.sendAction('onDelete', this.get('onToggleTagView'))
        }
    }
})
