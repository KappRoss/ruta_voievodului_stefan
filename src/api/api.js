import * as axios from "axios";

const instance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        "API-KEY": ""
    },
})


export const authAPI = {
  
    login(firstName, lastName, email, message){
        return instance.post(``, {firstName, lastName, email, message})
    }
}



