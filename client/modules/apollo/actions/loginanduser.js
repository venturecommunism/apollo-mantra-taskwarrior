export default {
  authtokens({context, Accounts}, request, next) {
    const currentUserToken = Accounts._storedLoginToken()
    if (!currentUserToken) {
      next()
      return
    }
    if (!request.options.headers) {
      request.options.headers = new Headers()
    }
    request.options.headers.Authorization = currentUserToken
    next()
  },
}
