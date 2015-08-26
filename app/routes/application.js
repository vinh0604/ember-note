import Ember from 'ember'

var notes = [{
                id: 1,
                title: 'Note 1',
                summary: 'Lorem ipsum dolor sit amet',
                content: '**Lorem ipsum dolor** sit amet, consectetur adipisicing elit. Qui aut maxime, illum ipsum quo, voluptatem quod dolorem, facere incidunt nam ducimus velit sunt est magnam minus! Illo itaque dignissimos iure.',
                tags: []
            },
            {
                id: 2,
                title: 'Note 2',
                summary: 'Lorem ipsum dolor sit amet',
                content: '*Lorem ipsum dolor* sit amet, consectetur adipisicing elit. Qui aut maxime, illum ipsum quo, voluptatem quod dolorem, facere incidunt nam ducimus velit sunt est magnam minus! Illo itaque dignissimos iure.',
                tags: []
            }]
var archiveNotes = []

export default Ember.Route.extend({
    model() {
        return {
            notes: notes,
            selectedNote: notes[0],
            editMode: false
        }
    }
})
