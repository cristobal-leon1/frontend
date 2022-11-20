import { boot } from 'quasar/wrappers'
import axios from 'axios'


//const api = axios.create({ baseURL: 'http://localhost:5000/api/v1', withCredentials: true })
const api = axios.create({ baseURL: 'https://backend-zea2.onrender.com/api/v1', withCredentials: true})


export default boot(({ app }) => {
 

  app.config.globalProperties.$axios = axios


  app.config.globalProperties.$api = api

})

export { api }
