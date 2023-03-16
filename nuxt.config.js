export default {
  // ...
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  router: {
    middleware: ['auth']
  }
}
