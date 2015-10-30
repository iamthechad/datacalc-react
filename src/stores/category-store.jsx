var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getCategories: function() {
        this.categories = Api.get('categories/');
        this.triggerChange();
    },
    triggerChange: function() {
        this.trigger('change', this.categories);
    }
});