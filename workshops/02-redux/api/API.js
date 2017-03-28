const API = {
  read: ()=> {
    return JSON.parse(localStorage.getItem('state'));
  },
  write:()=>{
    localStorage.setItem('state', JSON.stringify(getState()));
  }
}

export default API;
