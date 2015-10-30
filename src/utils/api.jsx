var Firebase = require('firebase');
var rootUrl = 'https://glaring-torch-2436.firebaseio.com/';

module.exports = {
    get: function(path) {
        var fb = new Firebase(rootUrl + path);
        fb.on('value', function(snapshot) {
           return snapshot.val();
        });
    }
};