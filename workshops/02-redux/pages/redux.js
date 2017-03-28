import { createStore } from 'redux'
import { Component } from 'react'
import { Provider as Redux, connect } from 'react-redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
// const store = createStore(counterReducer)

const initialState = {count: 0}

const store = createStore(counterReducer, initialState)
const App = props => <div>Redux Counter: {props.count}</div>
const ConnectedApp = connect(state => state)(App)

export default (props)=> {
  return (
    <div></div>
  );
}

// export default class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//
//   componentDidMount() {
//     store.subscribe(() => {
//       console.log(store.getState())
//       this.setState({count: store.getState()});
//     })
//   }
//
//   render() {
//     return <div onClick={()=> {
//       store.dispatch({type: 'INCREMENT'})
//     }}>
//       <h1>Redux</h1>
//       <span>Count: {this.state.count}</span>
//     </div>
//   }}
