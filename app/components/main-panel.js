import Ember from 'ember'

export default Ember.Component.extend({
    tagName: '',
    actions: {
        enterEdit() {
            this.sendAction('onUpdateEditMode', true)
        }
    }
})
