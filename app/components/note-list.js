import Ember from 'ember'

export default Ember.Component.extend({
    classNames: ['sidebar__list-container'],
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
        onToggleTagView(note, position) {
            let $el = this.$('.sidebar__list__tags')

            if ($el.is(":visible") && note.id === this.get('selectedNote').id) {
                $el.hide()
            } else {
                this.$('#note_tags').selectivity('value', note.tags)
                $el.css({ top: position.top + 35 + 'px' }).show()
            }
        }
    },
    didInsertElement() {
        let self = this
        this.$('#note_tags').selectivity({
            createTokenItem: function (token) {
                self.sendAction('onAddTag', token)
                return { id: token, text: token }
            }
        })
        this.$('#note_tags').on('change', function (event) {
            self.sendAction('updateTags', self.get('selectedNote'), $(this).selectivity('value'))
        })
        this.$('.selectivity-multiple-input').on('blur', function() {
            setTimeout(function() {
                self.$('.sidebar__list__tags').hide()
            }, 200);
        })
    }
})
