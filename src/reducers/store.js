// 1
// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {},
// });

// 2
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
