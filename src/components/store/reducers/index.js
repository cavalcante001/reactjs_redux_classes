import { combineReducers } from "redux";    

import carro from './carro';
import estado from './estado';

export default combineReducers({
    carro,
    estado
});