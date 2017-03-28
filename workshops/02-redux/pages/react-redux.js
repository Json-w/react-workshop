import { createStore, applyMiddleware } from 'redux'
import { Component } from 'react'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import TodoMvc  from '../components/TodoMvc'
import todoActions from '../Actions/TodoActions'
import createSagaMiddleware from 'redux-saga'
import root from '../sagas'

const todoReducer = (state, action)=> {
  switch (action.type) {
    case 'INCREMENT':
      return {items: [...state.items, action.payload]};
      break;
    case 'DELETE':
      return {items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]}
      break;
    case 'UPDATE':
      console.log('executing reducer');
      return {
        items: state.items.map((item, index)=> {
          if (index === action.payload) {
            item.status = !item.status;
          }
          return item;
        })
      };
      break;
    case 'FILTERDATA':
      return {
        items: state.items.map((item)=> {
          item.show = false;
          switch (action.payload) {
            case 'complete':
              item.show = item.status;
              break;
            case 'active':
              item.show = !item.status;
              break;
            default:
              item.show = true;
          }
          return item;
        })
      };
      break;
    case 'INITIAL':
      return action.payload;
      break;
    default:
      return state;
  }
}

const initialState = {
  items: [
  ],
}
const sagaMiddleware = createSagaMiddleware()
let middleware = [thunk,sagaMiddleware];
const store = createStore(todoReducer, initialState, applyMiddleware(...middleware));

const mapStateToProps = (state)=> {
  console.log(`state:${state}`);
  return {
    items: state.items,
  }
}

sagaMiddleware.run(root);

const mapDispatchToProps = (dispatch)=> {
  return {
    addItem: item=> {
      dispatch(todoActions.addItem(item));
      // dispatch(todoActions.storeItems());
    },
    deleteItem: index=> {
      dispatch(todoActions.deleteItem(index));
      // dispatch(todoActions.storeItems());
    },
    updateItem: index=> {
      dispatch(todoActions.updateItem(index));
      // dispatch(todoActions.storeItems());
    },
    filterItem: status=> {
      dispatch(todoActions.filterItem(status));
      // dispatch(todoActions.storeItems());
    },
    initialItems: ()=> {
      dispatch(todoActions.initialItems());
    }
  }
}


const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoMvc)

export default props => (
  <Provider store={store}>
    <App />
  </Provider>
)


