const fetchMock = require('fetch-mock')

fetchMock
  .post(
    (url, opts) => (
      url === '/login' &&
      opts.data === JSON.stringify({
        username: 'admin', password: 'admin'
      })
    ),
    200
  )
  .post('/login', 401)
  .post(
    (url, opts) => (url === '/user' && opts.data === JSON.stringify({
      username: 'admin', password: '123'
    }))
    , 409
  ).post(
  (url, opts) => (url === '/user' && opts.data === JSON.stringify({
    username: 'admin', password: 'admin'
  }))
  , 200
);
