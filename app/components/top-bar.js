import Ember from 'ember'

export default Ember.Component.extend({
    keyword: '',
    tagName: '',
    actions: {
        add() {
            this.sendAction('onAdd')
        },
        search() {
            this.sendAction('onSearch', this.get('keyword'))
        },
        filterTags() {
            this.sendAction('onFilterTags', [])
        },
        toggleTagsView() {
            console.log('hello')
        }
    }
})
