import axios from 'axios';
import { ApiConsts } from '../constants/index';
import Interceptor from './Interceptor'

class httpHelper {
    constructor() {
    }
    config = ApiConsts;
    async get(url, data = {}, headers= {}) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.get(url, { data: data,...headers } )
    }
    async put(url, data) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.put(url, data, this.config)
    }
    async  post(url, data) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.post(url, data, this.config)
    }
    async  excelpost(url, data) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.post(url, data, {responseType: 'blob'})
    }
    async  delete(url) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.delete(url, this.config)
    }
    async  patch(url, data) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.patch(url, data, this.config)
    }
    async  head(url, data) {
        let _instance = (new Interceptor()).getInstanse();
        return _instance.head(url, data, this.config)
    }
}
export default httpHelper;