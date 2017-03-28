import { Component } from 'react'
import TodoList from '../components/TodoList'
import InputText from '../components/InputText'
import FilterBox from '../components/FilterBox'

export default class TodoMvc extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          content: 'test1',
          status: false,
          show: true,
        },
        {
          content: 'test2',
          status: false,
          show: true,
        },
        {
          content: 'test3',
          status: false,
          show: true,
        }],
    }
    this._addNewItem = this._addNewItem.bind(this);
    this._handleDeleteItem = this._handleDeleteItem.bind(this);
    this._updateItemStatus = this._updateItemStatus.bind(this);
    this._filterData = this._filterData.bind(this);
  }

  _addNewItem = (item)=> {

    this.setState({
      items: [...this.state.items, item],
    })
  }

  _handleDeleteItem = (index)=> {
    console.log(`index:${index}`)
    this.setState(
      {
        items: [...this.state.items.slice(0, index), ...this.state.items.slice(index + 1)]
      }
    )
  }

  _updateItemStatus = (index)=> {
    let changedItem = this.state.items[index];
    changedItem.status = !changedItem.status;
    this.setState(
      {
        items: [...this.state.items.slice(0, index),
          changedItem,
          ...this.state.items.slice(index + 1)]
      }
    )

    console.log(this.state);
  }

  _filterData = (type)=> {
    let items = this.state.items;
    switch (type) {
      case 'all':
        this.setState({
          items: items.map((ele)=> {
            ele.show = true;
            return ele;
          }),
        });
      break;
      case 'active':
        this.setState({
          items: items.map((ele)=> {
            ele.show = !ele.status;
            return ele;
          }),
        });
      break;
      case 'complete':
        this.setState({
          items: items.map((ele)=> {
            ele.show = ele.status;
            return ele;
          }),
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <h1>Todo MVC</h1>
        <InputText addItem={this._addNewItem}/>
        <TodoList items={this.state.items}
                  deleteItem={this._handleDeleteItem}
                  updateItemStatus={this._updateItemStatus}/>
        <FilterBox filterData={this._filterData}/>
      </div>)
  }


}
