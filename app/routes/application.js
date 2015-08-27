import Ember from 'ember'

var notes = [
    {
        id: 1,
        title: 'Note 1',
        content: '**Lorem ipsum dolor** sit amet, consectetur adipisicing elit. Qui aut maxime, illum ipsum quo, voluptatem quod dolorem, facere incidunt nam ducimus velit sunt est magnam minus! Illo itaque dignissimos iure.',
        tags: []
    },
    {
        id: 2,
        title: 'Note 2',
        content: '*Lorem ipsum dolor* sit amet, consectetur adipisicing elit. Qui aut maxime, illum ipsum quo, voluptatem quod dolorem, facere incidunt nam ducimus velit sunt est magnam minus! Illo itaque dignissimos iure.',
        tags: []
    }

]

export default Ember.Route.extend({
    setupController(controller) {
        controller.set('selectedNote', notes[0])
        controller.set('filteredNotes', notes)
        controller.set('notes', notes)
    }
})
