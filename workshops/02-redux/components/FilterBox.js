export default ({filterData}) => {
  return (
    <div>
      <button onClick={()=> {
        filterData('all')
      }}>All
      </button>
      <button onClick={()=> {
        filterData('active')
      }}>Active
      </button>
      <button onClick={()=> {
        filterData('complete')
      }}>Complete
      </button>
    </div>
  )
}
