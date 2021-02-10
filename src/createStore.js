import React from 'react';
import {CounterStore} from './store';


export const todoContext = React.createContext(CounterStore);


export const useStore = () => React.useContext(todoContext);

