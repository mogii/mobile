import { AsyncStorage } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, autoRehydrate, persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';

import { reducer as dataReducer } from './data/reducer';
import { reducer as servicesReducer } from './services/reducer';
import * as persistActionCreators from './services/persist/actions';

const appReducer = combineReducers({
  services: persistReducer({
    key: 'services',
    storage: AsyncStorage,
    blacklist: ['routeHistory'],
  }, servicesReducer),
  data: persistReducer({
    key: 'data',
    storage: AsyncStorage,
    blacklist: ['addPartner'],
  }, dataReducer),
});

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
  )
);
export const store = createStore(
  appReducer,
  {},
  enhancer,
  // autoRehydrate(),
);
export const persistor = persistStore(store);
// const saveAndLoadSessionFilter = createFilter(
//   'services',
//   ['session'],
//   ['session']
// );
// const persist = persistStore(store, {
//   storage: AsyncStorage,
//   blacklist: ['data'],
//   transforms: [saveAndLoadSessionFilter],
// }, () => store.dispatch(persistActionCreators.update({ isHydrated: true })));


