import { Provider } from 'react-redux';
import './App.css';
import { Task } from './Task';
import store from './store';
function App() {
  return (
    <>
    <Provider store={store}>
    <Task/>
    </Provider>
    </>

  );
}

export default App;
