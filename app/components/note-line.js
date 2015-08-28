import Ember from 'ember'

export default Ember.Component.extend({
    tagName: 'li',
    classNames: ['sidebar__item'],
    classNameBindings: ['isSelected:sidebar__item--selected'],
    attributeBindings: ['index:tabindex'],
    note: null,
    selectedNote: null,
    isSelected: function() {
        return this.get('note').id === this.get('selectedNote').id
    }.property('note', 'selectedNote'),
    title: function () {
        return this.get('note').title || 'New Note'
    }.property('note.title'),
    actions: {
        archive() {
            this.sendAction('onArchive', this.get('note'))
        },
        delete() {
            this.sendAction('onDelete', this.get('note'))
        },
        toggleTagView() {
            this.sendAction('onToggleTagView', this.get('note'), this.$().position())
        }
    },
    click() {
        this.sendAction('onSelect', this.get('note'))
    },
    keyUp(event) {
        switch(event.keyCode) {
            case 38:
                this.$().prev().click().focus()
                break
            case 40:
                this.$().next().click().focus()
                break
            case 13:
                this.$().click()
                break
        }
    }
})
