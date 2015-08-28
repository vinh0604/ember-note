import Ember from 'ember'

export default Ember.Component.extend({
    keyword: '',
    actions: {
        add() {
            this.sendAction('onAdd')
        },
        search() {
            this.sendAction('onSearch', this.get('keyword'))
        },
        toggleTagsView() {
            this.$('.sidebar__topbar__tags').toggle()
        }
    },
    didInsertElement() {
        let self = this
        this.$('#tags').selectivity()
        this.$('#tags').on('change', function (event) {
            self.sendAction('onFilterTags', $(this).selectivity('value'))
        })
    }
})
