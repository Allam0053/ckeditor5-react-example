ckeditor, redux app

- fetch [https://fakestoreapi.com/](https://fakestoreapi.com/) a product
- product object {id ….}
- nyimpen productObject → redux
- keranjang nampilin redux (productObject)

Flow

- fetch faker
- klik barang
  - simpen ke redux keranjang
- barang masuk keranjang
- buka keranjang
  - nampilin dari redux

# install

1. npm install @reduxjs/toolkit react-redux
2. bikin folder
   1. reducers/store.js
   2. reducers/counterSlice.js
   3. contoh pemakaian components/Counter.js
3. daftarin provider di index.js

   ```
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import './index.css'
    import App from './App'
    import store from './app/store'
    import { Provider } from 'react-redux'

    // As of React 18
    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    )

   ```

4. buat slice reducers/counterSlice.js

```
  import { createSlice } from "@reduxjs/toolkit";

  export const counterSlice = createSlice({
    name: "counter",
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        let oldVal = Number(state.value);
        let newVal = Number(action.payload);
        state.value = oldVal + newVal;
      },
      newFunction: (state, action) => {

      }
    },
  });

  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions;

  export default counterSlice.reducer;

```

1. register slice ke store

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

```

1. bikin component

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

```
