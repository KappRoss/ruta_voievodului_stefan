// import * as axios from "axios";

// https://rutaapi.kurama.xyz/api/v1/

// const instance = axios.create({
//     baseURL: 'https://rutaapi.kurama.xyz/api/v1/',
//     withCredentials: true,
//     headers: {
//         "API-KEY": ""
//     },
// })

function queryString(object) {
  const query = Object.keys(object).reduce((acc, key) => {
    const item = object[key];
    if (key === 'filter' && typeof object[key] === 'object' && object[key] !== null) {
      Object.keys(item).forEach((itemKey) => {
        acc.push([`${itemKey}`, item[itemKey]].join('='));
      });
    } else {
      acc.push([key, item].map(encodeURIComponent).join('='));
    }
    return acc;
  }, []);
  return query.length > 0 ? `?${query.join('&')}` : '';
}

const instance = async function({
	data = {},
	url = 'http://rutaapi.kurama.xyz/api/v1/sendContactForm',
	method = 'POST'
}) {
  const headers = new Headers();
  // headers.append('Accept', 'application/json');
  let body = null;

  if ((method.toUpperCase() === 'GET') || (method.toUpperCase() === 'HEAD')) {
    url += queryString(data);
  } else {
    headers.append('Content-Type', 'application/json');
    body = JSON.stringify(data);
  }

  const requestParams = { method, headers };
  if (body) requestParams.body = body;

  try {
    const response = await fetch(url, requestParams);
    if (response.status === 404) {
      return new Error('Page not found');
    }

    if (!response.ok) {
      return new Error(await response.text());
    }
    const responseText = await response.text();

    if (responseText.length > 0) {
      return JSON.parse(responseText);
    }
    return new Error('Page not found');;
  } catch (err) {
    return err;
  }
}



export const authAPI = {
    login(data){
        return instance({ data });
    }
}



