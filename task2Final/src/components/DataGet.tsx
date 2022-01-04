const axios = require('axios').default;

export const DataPost = async (url:string,data:any) : Promise<any> => {
    const config = { headers: {'Content-Type': 'application/json'} }
    return axios.post(url,data,config).then((response: any)=> {return response})
}

export const DataGet = async (url:string) : Promise<any> => {
    return axios.get(url).then((response:any)=> {return response.data})
}