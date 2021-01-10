import React from "react";
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Projects from './Projects';
import ProjectView from './ProjectView';
import About from './About';
import Contact from './Contact';



const Routes = () => {
  return (
    <BrowserRouter>
            
      <Switch>
        <Route exact path="/" >
        <Home />
        </Route>

        <Route exact path="/About" >
        <About />
        </Route>

        <Route exact path="/Projects" >
        <Projects />
        </Route>

        <Route exact path="/ProjectView" >
        <ProjectView />
        </Route>


        <Route exact path="/Contact" >
        <Contact />
        </Route>

        <Route exact path="/LogIn" >
        <Login />
        </Route>

        

       
        <Route exact path="*" >
        <div>No match</div>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};



export default Routes;
