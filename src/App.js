import "./App.css";
import Body from "./components/Body";
import {Provider} from 'react-redux'
import Store from './utils/Store'

function App() {
  return (
   <Provider store= {Store}>
      <Body />
    </Provider>
  );
}

export default App;
