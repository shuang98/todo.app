import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import * as serviceWorker from './serviceWorker';
import TodoApp from './components/TodoApp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolderPlus, faTrash, faPen, faPlusCircle, faAdjust } from '@fortawesome/free-solid-svg-icons'
import store from "./store";
import { Provider } from "react-redux";
library.add(faFolderPlus, faTrash, faPen, faPlusCircle, faAdjust);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  //  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
