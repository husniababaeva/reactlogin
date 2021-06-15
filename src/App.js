import React from "react"
import './App.css'
import Navigation from "./components/Navigation"
import HomePage from "./pages/home.page"
import AboutPage from "./pages/about.page"
import AuthPage from "./pages/auth.page"

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>

        <Navigation />
     

        <Switch>

           <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}







export default App

// qaralama---------------

// function App() {
//   return (
//     <div className = "App">
//       <h1>Hello World</h1>
//       <p>I am Husnia</p>


//       <myCompanent/>
//       <myCompanent/>
//       <myCompanent/>
//       <second/>


//     </div>
//   )
// }



// const AppWithProps=()=>{
//   return (
//   <div>
//     <h2>probs with</h2>
//   </div>)
// }

// class AppClass extends Component {
//   render() {
//     return(
//       <div className ="App">
//         <h1>Hello World!</h1>
//         <AppWithProps name = {"Husniyye"} myAge/>

//       </div>
//     );
//   }

// }

// const App = () => {
//   return <AppClass/>
// }

