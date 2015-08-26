import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    actions: {
        editNote() {
            this.set('editMode', true)
        }
    }
})
