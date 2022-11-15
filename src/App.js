import Router from './router/index'
import {Provider} from 'react-redux'
import { store,persistor } from './redux/store';


import {PersistGate} from 'redux-persist/integration/react'
function App() {
  return (
    <div>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Router/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
