import  {combineReducers} from 'redux';
import authReducer from './authReducer' 
import formReducer from './formReducer' 

const reducers= combineReducers({
    auth:authReducer,
    form:formReducer
} 
) 
    
export default reducers