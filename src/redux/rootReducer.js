//aqui vai ser armazenado os outros reducers da aplicacao
import { combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";


const rootReducer = combineReducers({dataReducer});

export default rootReducer;