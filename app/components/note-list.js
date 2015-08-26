import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    actions: {
        selectNote(note) {
            this.set('selectedNote', note)
            this.set('editMode', false)
        },
        archiveNote(note) {
            let notes = this.get('notes')
            notes.removeObject(note)
            this.set('selectedNote', notes[0] || { content: '' })
        },
        deleteNote(note) {
            let notes = this.get('notes')
            notes.removeObject(note)
            this.set('selectedNote', notes[0] || { content: '' })
        }
    }
})
