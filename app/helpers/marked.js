import marked from 'bower_components/marked'

export default Ember.Handlebars.helper('marked', (value, options) => {
    let html = marked(value)
    return html
})
