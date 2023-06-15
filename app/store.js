const reduxToolkit = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const configureStore = reduxToolkit.configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
