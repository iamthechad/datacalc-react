import React from "react";
import './App.css';

import {Header} from "./features/header/Header";
import {BrowserRouter} from "react-router-dom";
import Catalog from "./features/catalog/Catalog";

export function App() {
  return (
      <div className="content">
        <BrowserRouter>
          <Header />
          <div className="data-calc">
            <Catalog/>
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

export default App;
/*
class App extends React.Component {

  componentDidMount() {
    const dispatch = useDispatch();
    base.fetch('catalog', {
      context: this,
      then(data){
        loadCatalog(data);
        /!*this.props.loadCatalog(data);

        const localStorageRef = localStorage.getItem('order');

        if (localStorageRef) {
          this.props.loadOrder(JSON.parse(localStorageRef));
        }

        this.props.catalogLoaded(true);
        this.props.selectCategory(Object.keys(data.categories)[0]);*!/
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
          <Catalog/>
          <div>Hello middle</div>
          <div>Hello right</div>
          {/!*<Catalog {...this.props} />
          <Items {...this.props} />
          <Order {...this.props} />*!/}
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
*/
