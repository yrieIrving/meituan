import http from './http';

export const getUserInfo = async (name ) =>{
    // const data = await encryptAllRsa(JSON.stringify({name}));
    return http.post('/login',{data})
}
export const userDao = () => http.get(
      `/userfince`
) 