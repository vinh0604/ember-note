import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    actions: {
        onSelect(note) {
            this.sendAction('onSelect', note)
        },
        onArchive(note) {
            this.sendAction('onArchive', note)
        },
        onDelete(note) {
            this.sendAction('onDelete', note)
        },
        onToggleTagView(note) {
            console.log('hello')
        },
        updateTags(tags) {
            this.sendAction('onUpdateTags', this.get('selectedNote'), tags)
        }
    }
})
