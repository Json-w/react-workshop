import { Component } from 'react'
import TodoList from '../components/TodoList'
import InputText from '../components/InputText'
import FilterBox from '../components/FilterBox'

export default class TodoMvc extends Component {

  componentDidMount() {
    const {initialItems} = this.props;
    initialItems();
  }

  render() {
    const {items, addItem, deleteItem, updateItem, filterItem} = this.props;
    return (
      <div>
        <h1>Todo MVC</h1>
        <InputText addItem={addItem}/>
        <TodoList items={items}
                  deleteItem={deleteItem}
                  updateItemStatus={updateItem}
        >
        </TodoList>
        <FilterBox filterData={filterItem}/>
      </div>
    )
  }
}
