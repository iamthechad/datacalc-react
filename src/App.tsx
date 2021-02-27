import React from 'react';
import './App.css';

import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import {Header} from "./features/header/Header";
import {BrowserRouter} from "react-router-dom";
import Catalog from "./features/catalog/Catalog";

const app = firebase.initializeApp({
  apiKey: "AIzaSyACjFU8ux-Df1De0gAgBeIDxXMEvafAiQc",
  authDomain: "glaring-torch-2436.firebaseapp.com",
  databaseURL: "https://glaring-torch-2436.firebaseio.com",
  storageBucket: "glaring-torch-2436.appspot.com",
  messagingSenderId: "844761162138"
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

class App extends React.Component {

  componentDidMount() {
    base.fetch('catalog', {
      context: this,
      then(data){
        /*this.props.loadCatalog(data);

        const localStorageRef = localStorage.getItem('order');

        if (localStorageRef) {
          this.props.loadOrder(JSON.parse(localStorageRef));
        }

        this.props.catalogLoaded(true);
        this.props.selectCategory(Object.keys(data.categories)[0]);*/
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div className="content">
        <BrowserRouter>
        <Header />
        <div className="data-calc">
          <Catalog {...this.props}/>
          <div>Hello middle</div>
          <div>Hello right</div>
          {/*<Catalog {...this.props} />
          <Items {...this.props} />
          <Order {...this.props} />*/}
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
