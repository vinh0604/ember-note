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
        onSearch(keyword) {
            this.sendAction('onSearch', keyword)
        },
        onAdd() {
            this.sendAction('onAdd')
        },
        onFilterTags() {
            this.sendAction('onFilterTags', tags)
        },
        onUpdateTags() {
            this.sendAction('onUpdateTags', note, tags)
        }
    }
})
