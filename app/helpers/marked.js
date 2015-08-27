import marked from 'npm:marked'
import Ember from 'ember'

export default Ember.Helper.helper(function ([value, options]) {
    return value ? marked(value) : ''
})
