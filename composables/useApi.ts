import { $fetch } from 'ofetch'
import { $info } from '@/info'

export function useApi() {
  const api = $fetch.create({
    baseURL: $info.baseApiUrl,
    // baseURL: 'http://localhost:8000',
    headers: {
      Accept: 'application/json',
    },
    onResponseError({ request, options, response }) {
      // console.log('🚀 | onResponseError | request:', request)
      // console.log('🚀 | onResponseError | options:', options)
      // console.log('🚀 | onResponseError | response:', response)

      return Promise.reject(response)
    },
  })

  const request = (method: string, url: string, options?: object) => {
    return api(url, {
      method,
      ...options,
    })
  }

  return {
    get(url: string, params: object, options?: object) {
      return request('get', url, {
        params,
        ...options,
      })
    },
    post(url: string, body: object = {}, options?: object) {
      return request('post', url, {
        body,
        ...options,
      })
    },
  }
}
