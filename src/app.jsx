var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://glaring-torch-2436.firebaseio.com/';

var App = React.createClass({
    mixins: [ ReactFire ],
    getInitialState: function() {
        return {
            items: {},
            loaded: false
        }
    },
    componentWillMount: function() {
        this.fb = new Firebase(rootUrl + 'categories/');
        //this.bindAsArray(this.fb, 'categories');
        this.fb.on('value', this.handleDataLoaded);
    },
    render: function() {
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    Categories
                </h2>
            </div>
        </div>
    },
    handleDataLoaded: function(snapshot){
        console.log(snapshot.val());
        //console.log(this.firebaseRefs.categories);
        this.setState({loaded: true});
    }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));