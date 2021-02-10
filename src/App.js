import React from 'react';
import {observer} from 'mobx-react';
import {useStore} from './createStore';



const Counter = () => {
  const store= useStore()
  return <div>
    <button onClick={store.Increment}>Increment</button>
    <h1>{store.count}</h1>
    <button onClick={store.Decrement}>Decrement</button>

    </div>
}

export default observer(Counter);