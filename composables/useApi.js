import { $fetch } from 'ofetch'
import { $info } from '@/info'

export function useApi(url, contentType,isAcceptJSON = true) {
  const head = {
    'Content-Type': contentType ?? 'application/json',
  }
  if(isAcceptJSON){
    head['Accept'] = 'application/json'
  }
  console.log('🚀 | useApi | head:', head)
  const api = $fetch.create({
    baseURL: url ?? $info.baseApiUrl,
    // baseURL: 'http://localhost:8000',
    // headers: head,
    onResponseError({ request, options, response }) {
      console.log('🚀 | onResponseError | request:', request)
      console.log('🚀 | onResponseError | options:', options)
      console.log('🚀 | onResponseError | response:', response)

      return Promise.reject(response)
    },
  })

  const request = (method, url, options) => {
    return api(url, {
      method,
      ...options,
    })
  }

  return {
    get(url, params, options) {
      return request('get', url, {
        params,
        ...options,
      })
    },
    post(url, body, options) {
      return request('post', url ?? "", {
        body,
        ...options,
      })
    },
  }
}
