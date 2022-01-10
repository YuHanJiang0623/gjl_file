import request from "./request";
 const apiUrl = 'http://localhost:9527'
// const webUrl = '域名'
// const baseUrl = apiUrl + '?act='
export function getList(session,language){
      let data = {
          session,
          language
      }
      return request.postRequest(apiUrl + 'a', data);
  }

