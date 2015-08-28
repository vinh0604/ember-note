import _ from 'npm:lodash'
import Fuse from 'npm:fuse.js'

var filter = function () {
    let results = _.filter(this.notes, (note) => {
        return !note.archived
    })

    if (this.filteredTags.length) {
        results = _.filter(results, (note) => {
            return _.intersection(this.filteredTags, note.tags).length > 0
        })
    }

    if (this.keyword) {
        let fuse = new Fuse(results, { keys: ['title', 'content'] })
        results = fuse.search(this.keyword)
    }

    return results
}

var selectNote = function (note) {
    this.set('selectedNote', note)
    this.set('editMode', false)
}

export default Ember.Controller.extend({
    keyword: '',
    editMode: false,
    tags: ['hello', 'world'],
    filteredTags: [],
    actions: {
        search(keyword) {
            this.set('keyword', keyword)
            this.set('filteredNotes', filter.call(this))
        },
        filterTags(tags) {
            this.set('filteredTags', tags)
            this.set('filteredNotes', filter.call(this))
        },
        addNote() {
            let note = {
                id: (_.max(this.notes, 'id').id || 0) + 1
            }
            this.notes.unshiftObject(note)
            this.set('filteredNotes', filter.call(this))
            this.set('selectedNote', note)
            this.set('editMode', true)
        },
        selectNote(note) {
            selectNote.call(this, note)
        },
        deleteNote(note) {
            this.notes.removeObject(note)
            this.set('filteredNotes', filter.call(this))
            selectNote.call(this, this.filteredNotes[0])
        },
        archiveNote(note) {
            note.archived = true
            this.notes.replace(this.notes.indexOf(note), 1, note)
            this.set('filteredNotes', filter.call(this))
            selectNote.call(this, this.filteredNotes[0])
        },
        updateNoteTags(note, tags) {
            note.tags = tags
            this.notes.replace(this.notes.indexOf(note), 1, note)
            this.set('filteredNotes', filter.call(this))
        },
        updateEditMode(editMode) {
            this.set('editMode', editMode)
        },
        addTag(tag) {
            if (this.tags.indexOf(tag) < 0) {
                this.tags.pushObject(tag)
            }
        }
    }
})
