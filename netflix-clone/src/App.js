import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"   
import LoginScreen from './LoginScreen'
import {auth} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login,logout, selectUser} from "./features/userSlice";
import ProfileSection from './ProfileSection';
function App() {
 
 const user=useSelector(selectUser);
const dispatch=useDispatch();
 
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //loggedin
      console.log(userAuth);
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }))
    }
    else{
      dispatch(logout())
      //loggedout
    }
  })
  return unsubscribe;
},[dispatch])

 
  return (
    <div className="App">
    <Router>
      {!user?(
        <LoginScreen/>
      ) : (

      <Switch>
        <Route path="/profile">
          <ProfileSection />
          </Route>
        <Route exact path="/">
       <HomeScreen/>

        </Route>
      </Switch>
      )
    }


    </Router>
    
    </div> 
  );
}

export default App;
