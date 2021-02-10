import React from 'react';
import {observable, action} from 'mobx';


export const CounterStore = observable({
  count: 0,
  Increment: action(() => {
    CounterStore.count += 1;
  }),
  Decrement: action(() => {
    CounterStore.count -= 1;
  }),
});

