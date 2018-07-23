
import { SET_CURRENT_USER, TOGGLE_CURSOR } from './../actions/types';
import { isEmpty } from 'lodash/isEmpty';


const initialState = {     
    cursor: false 
};

export default (state = initialState, action={})=>{
    switch(action.type){
        case TOGGLE_CURSOR:
        console.log("toggle clicked")
            return {cusor: action.cursor}

        default: return state;
    }        
       
   
    } 

   