import axios, { AxiosInstance } from 'axios';
import {cookiesConsts, ApiConsts } from '../constants/index';
import Cookies from 'universal-cookie';

class Interceptor{

    constructor(){
    }

    getInstanse=(withoutInterceptor=false)=>{
        let instanse=axios.create();
        if(withoutInterceptor){
            return instanse;
        }

        instanse.interceptors.request.use(function (_request) {
            let cookie = new Cookies();
            Object.keys(cookiesConsts).map(key=>{
                if(key===cookiesConsts.access_token){
                    var param = cookie.get(cookiesConsts[key]);
                    if (param != null) {
                        _request.headers.common[cookiesConsts.authorization] = `Bearer ${param}`;
                    }
                }
                else{
                var param = cookie.get(cookiesConsts[key]);
                if (param != null) {
                    _request.headers.common[cookiesConsts[key]] = param;
                }
                _request.headers.common['Cache-Control']='No-Store';
            }
            })
            return _request;
        }, function (error) {
            return Promise.reject(error);
        });
        
        instanse.interceptors.response.use((response) => {
            return response;
        }, error => {
            return error.response;
        });
        return instanse;
    }
}

export default Interceptor


