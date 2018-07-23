import axios from 'axios';
import { TOGGLE_CURSOR } from './types';

import jwtDecode from 'jwt-decode';
import SetAuthToken from '../utils/setAuthToken';

export function login(userData){
    console.log("i am in login action")
    return dispatch => axios.post('http://localhost:3010/login', userData).then(
        (response)=>{
            console.log("i am in login promise")
            const {token, success,message} = response.data
          if (success){
            let token = response.data.token
          } 
          
        //   localStorage.setItem("authtoken",token );
        //   SetAuthToken(token);
        //   const decoded = jwtDecode(token);
        //   console.log(`${decoded.id}`)
    
          return {message}
                 
      },
        (failure)=>{ console.log("501 intrenal error" );}
        )
        .catch(e=>{console.log(e)});   
}


export function toggleState(cursor=false){
    console.log("i am in toggle acction")
    return {
        type: TOGGLE_CURSOR,
        cursor
    }
        
  }; //end toggle