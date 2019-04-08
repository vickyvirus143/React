import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import Greetings from './components/Greetings';
import Greetingclasscomponent from './components/Greetingclasscomponent';
import Fuctionalcomponentdemo from './components/Fuctionalcomponentdemo';
import NumlistclassComponent from './components/NumlistclassComponent';
import ListDemo from './components/ListDemo';
import EventDemo1 from './components/event-demo';
import Propsdemo from './components/Propsdemo';
import Eventpros from './components/event-propschange';
import StateDemo1 from './components/statedemo';
import Counter from './components/button';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import FormDemo from './components/FormDemo';
import FormDemo1 from './components/FormDemo1';
import RefDemo from './components/RefDemo';
import CustomerInfo from './components/Customer-info';
import LifeCycleB from './components/LifeCycleB';
import LifeCycleA from './components/LifeCycleA';

class App extends Component {
  render() {
    // let numbers = [11, 22, 33, 44];
    // let
    //   user = {

    //     name:
    //       "Vikash Kumar",

    //     hobbies: ["Sports",
    //       "Swimming",

    //       "Music",
    //       "Watching movies", "Shopping"],

    //   };
    return (
      // <div>
      // <h1>Welcome Homie</h1>
      // <div className="container">
      //   <div className="row">
      //     <div className="col">
      //       <BrowserRouter>
      //         <div>
      //           <ul>
      //             <li>
      //               <Link to="/">Home</Link>
      //             </li>
      //             <li>
      //               <Link to="/">About</Link>
      //             </li>
      //           </ul>
                
      //           <div>
      //             <switch>
      //               <Route exact path="/" Component="Home"/>
      //               <Route exact path="/" Component="About"/>
      //             </switch>
      //           </div>
      //         </div>
      //         </BrowserRouter>
      //         </div>
      //     </div>
      //   </div>
       
      // </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>


      // {/* <h1>Hello Welcome To My Page</h1>
      // <h2>This Is Another Page</h2> */}
      //{/* <Welcome/> */}
      // <div className="container">
      //   <div className="row">
      //     <div className="col-xs-12">
            //{/* <Greetings name="vikash" />+
            // <Greetings name="vicky" />
            // <Greetings name="virus" />
            // <hr />
            // <Greetingclasscomponent name="From Class Component" />
            // <NumlistclassComponent numbers={numbers} />
            // <ListDemo name ={user.name} age={30} user={user}></ListDemo>
            // <h2>This Is Childern Text</h2>
            // <EventDemo1/>
            // <Propsdemo name ="Propsdemo"/> */}
            // //{/* <Eventpros age={23}/>
      //       <StateDemo1 message="Welcome Home Fella"/>
      //       <Counter/>
      //     </div>
      //   </div>
      // </div> */}

      // {/* // <Fuctionalcomponentdemo/>

      // React.createElement('h1',null,'Hello World') */}

    //)
<Router>

<div>

<Header/>

<div className="container">

<Switch>

<Route exact path="/" component={Home}/>

<Route exact path="/about" component={About}/>

<Route exact path="/form" component={Form}/>

<Route exact path="/formdemo" component={FormDemo}/>

<Route exact path="/formdemo1" component={FormDemo1}/>

<Route exact path="/refdemo" component={RefDemo}/>

<Route exact path="/adddelete" component={CustomerInfo}/>

<Route exact path="/lifeCycleB" component={LifeCycleB}/>

<Route exact path="/lifeCycleA" component={LifeCycleA}/>

</Switch>

</div>

</div>

</Router>

    );
  }
}

export default App;


