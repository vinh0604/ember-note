import marked from 'npm:marked'
import Ember from 'ember'

export default Ember.Handlebars.helper('marked', (value, options) => {
    return value ? marked(value) : ''
})
