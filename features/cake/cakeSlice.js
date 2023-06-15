const reduxToolkit = require("@reduxjs/toolkit");
const createSlice = reduxToolkit.createSlice;

const initialState = 10;

const cakeSlice = createSlice({
  // This name is used to create action type as cake/ordered, cake/restocked
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state > 0) {
        // Here you are able to directly change state. State behaving as if it is mutable.
        // But underneath it is equivalent of using normal reducer with immer library
        state--;
        return state;
      }
    },
    restocked: (state, action) => {
      state += action.payload;
      return state;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
