const reduxToolkit = require("@reduxjs/toolkit");
const cakeActions = require("../cake/cakeSlice").cakeActions;
const createSlice = reduxToolkit.createSlice;

const initialState = 20;

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state -= 1;
      return state;
    },
    restocked: (state, action) => {
      state += action.payload;
      return state;
    },
  },
  // syntax 1 of extraReducers
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       // for free icecream with cake
  //       state -= 1;
  //       return state;
  //     },
  //   },
  // syntax 2
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state -= 1;
      return state;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
