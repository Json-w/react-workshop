const UserApi = {
  createUser: (user)=> {
    return fetch('/user', {
      method: 'POST', data: JSON.stringify(user)
    }).then(response => {
      if (response.status >= 400) {
        throw response
      }
      return response
    })
  }
}

export default UserApi;