import React from "react";
import { Route, Switch, useLocation,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import View1 from './ProjectsDetails/View1';
import View2 from './ProjectsDetails/View2';
import View3 from './ProjectsDetails/View3';
import View4 from './ProjectsDetails/View4';

const Routes = () => {
  return (
    <BrowserRouter>
      
      <LocationDisplay />
               
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

        <Route exact path="/Contact" >
        <Contact />
        </Route>

        <Route exact path="/LogIn" >
        <Login />
        </Route>

        <Route exact path="/projects_details/view/1" >
        <View1 />
        </Route>

        <Route exact path="/projects_details/view/2" >
       <View2 />
        </Route>

        <Route exact path="/projects_details/view/3" >
        <View3 />
        </Route>
        
        <Route exact path="/projects_details/view/4" >
        <View4 />
        </Route>

       
        <Route exact path="*" >
        <div>No match</div>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};

export function LocationDisplay(){
  const {pathname} = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}


export default Routes;
