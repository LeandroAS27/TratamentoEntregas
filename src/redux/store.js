import Pedidos from '../data/Pedidos.json'

import rootReducer from './rootReducer';
import {createStore} from 'redux';
// import { orderReducer } from './reducers/orderReducer';

const store = createStore(rootReducer);

export default store;