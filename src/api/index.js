// const BASE_PATH = '/'
const BASE_PATH = 'http://192.168.0.104:8080/ssm2/'
const API = {
  LOGIN (context, user) {
    return context.$http.post(BASE_PATH + 'byName.do', user)
  }
}
export default API
