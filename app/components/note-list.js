import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    actions: {
        selectNote(note) {
            this.set('selectedNote', note)
            this.set('editMode', false)
        }
    }
})
