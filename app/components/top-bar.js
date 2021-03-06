import Ember from 'ember'
import _ from 'npm:lodash'

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
            if (this.$('.sidebar__topbar__tags').is(':visible')) {
                this.$('.selectivity-multiple-input').focus()
            }
        }
    },
    didInsertElement() {
        let self = this
        this.$('#tags').selectivity()
        this.$('#tags').on('change', function (event) {
            self.sendAction('onFilterTags', $(this).selectivity('value'))
        })
        this.$('.selectivity-multiple-input').on('blur', function() {
            setTimeout(function() {
                if (!self.$('.selectivity-multiple-input').is(':focus')) {
                    self.$('.sidebar__topbar__tags').hide()
                }
            }, 200);
        })
    },
    didUpdate() {
        let tags = _.clone(this.get('tags'))
        this.$('#tags').selectivity({ items: tags })
    }
})
