export default ({items, deleteItem, updateItemStatus})=> {
  console.log(items)
  const getLeftItems = ()=> {
    let count = 0;
    items.map((item)=> {
      if (!item.status) {
        count++;
      }
    });
    return count;
  };

  return (
    <div>
      <ul>
        {items.map((item, index)=>(
          <div key={index} style={item.show ? {display: "block"} : {display: "none"}}>
            <input name={index} type="radio" checked={item.status} onChange={()=> {
              updateItemStatus(index)
            }}/>
            <li style={item.status ? {textDecoration: "line-through"} : {}}>{item.content}</li>
            <button onClick={()=> {
              deleteItem(index)
            }}>
              x
            </button>
          </div>
        ))}
      </ul>
      <div>{getLeftItems()} items left.</div>
    </div>
  )
}
