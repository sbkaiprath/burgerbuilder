import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilder-2f99e.firebaseio.com/'
})
export default instance;