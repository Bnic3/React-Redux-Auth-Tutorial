import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/Header"
import Login  from "./components/Login";


const AppRouter  = () => {
    return (
        <div>
        <Header/>
        <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path = "/about" component={About} />        
            <Route path = "/login" component={Login} />        
                    
        </Switch>   
        </Router>
        </div>  
    ) 
}

const Home = () =>(
    <div>
    <h2>Home</h2>
    <div className="alert alert-primary" role="alert">
         A simple primary alert—check it out!
</div>
    </div>
)

const About = () =>(
    <div>
    <h2>About</h2>
    </div>
)

//<Route path = "/login" component={Login} />
 
export default AppRouter ;