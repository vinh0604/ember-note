import _ from 'npm:lodash'
import Fuse from 'npm:fuse.js'

var filter = function () {
    let results = _.filter(this.notes, (note) => {
        return !note.archived
    })

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
    tags: [],
    editMode: false,
    actions: {
        search(keyword) {
            let notes = filter(this.notes, keyword)
            this.set('filteredNotes', filter.call(this))
        },
        filterTags(tags) {

        },
        addNote() {
            let note = {
                id: (_.max(this.notes, 'id').id || 0) + 1
            }
            this.notes.unshiftObject(note)
            this.set('filteredNotes', filter.call(this))
        },
        saveNote(note) {

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

        },
        updateEditMode(editMode) {
            this.set('editMode', editMode)
        }
    }
})
