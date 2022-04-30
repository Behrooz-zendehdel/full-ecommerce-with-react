import http from "./httpService";

 const loginUser =(data)=>{
return http.post('/user/register',data)
}
export default loginUser