import { Component } from 'react'

export default class InputText extends Component {

  constructor() {
    super();
    this.state = {
      value: "",
    }
  }

  render() {
    const addNewItem = (event)=> {
      if (event.key === 'Enter') {
        console.log(event.target.value)
        this.props.addItem({content: event.target.value, status: false, show: true})
      }
    };

    return (

      <div>
        <input type="text" onKeyDown={(event)=> {
          addNewItem(event)
        }}/>
      </div>
    )
  }
}