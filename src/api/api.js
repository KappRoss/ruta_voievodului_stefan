import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://rutaapi.kurama.xyz/api/v1/',
    withCredentials: true,
    headers: {
        "API-KEY": ""
    },
})


export const authAPI = {
  
    login(firstName, lastName, email, message){
        return instance.post(`sendContactForm`, {firstName, lastName, email, message})
    }
}



