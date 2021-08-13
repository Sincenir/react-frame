import axios from 'axios'
import { message } from 'antd'
import { FcResponse } from '../types/server'

axios.defaults.timeout = 50000
axios.defaults.baseURL = ''

axios.interceptors.request.use((config) => config)
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.errno !== '0') {
        message.error(response.data.errmsg)
      }

      if (response.data.errno === '1001' || response.data.errno === '1002') {
        // 跳转至授权
      }

      if (response.data.errno === '1004') {
        console.log('未找到平台用户，是否自己设置了token？', response)
      }
    }
    return response.data
  },
  (err) => {
    let errMessage = '未知错误'
    if (err && err.response) {
      switch (err.response.status) {
      case 400:
        errMessage = '错误的请求'
        break
      case 401:
        errMessage = '未授权，请重新登录'
        break
      case 403:
        errMessage = '拒绝访问'
        break
      case 404:
        errMessage = '请求错误,未找到该资源'
        break
      case 405:
        errMessage = '请求方法未允许'
        break
      case 408:
        errMessage = '请求超时'
        break
      case 500:
        errMessage = '服务器端出错'
        break
      case 501:
        errMessage = '网络未实现'
        break
      case 502:
        errMessage = '网络错误'
        break
      case 503:
        errMessage = '服务不可用'
        break
      case 504:
        errMessage = '网络超时'
        break
      case 505:
        errMessage = 'http版本不支持该请求'
        break
      default:
        errMessage = `other连接错误${err.response.status}`
      }
    }
    else {
      errMessage = '无法连接到服务器！'
    }
    message.error(errMessage)
    Promise.reject(err.response)
  },
)

export const get = <T>(url: string): Promise<[unknown, FcResponse<T> | undefined]> => new Promise((resolve) => {
  axios
    .get(url)
    .then((result) => {
      resolve([null, result.data as FcResponse<T>])
    })
    .catch((err) => {
      resolve([err, undefined])
    })
})

export const post = <T>(
  url: string,
  params: unknown
): Promise<[unknown, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios.post(url, params)
      .then((result) => {
        resolve([null, result.data as FcResponse<T>])
      }).catch((err) => {
        resolve([err, undefined])
      })
  })
}

export const put = <T>(
  url: string,
  params: unknown
): Promise<[unknown, FcResponse<T> | undefined]> => new Promise((resolve) => {
    axios.put(url, params)
      .then((result) => {
        resolve([null, result.data as FcResponse<T>])
      }).catch((err) => {
        resolve([err, undefined])
      })
  })

export const del = <T>(url: string): Promise<[unknown, FcResponse<T> | undefined]> => new Promise((resolve) => {
  axios.delete(url)
    .then((result) => {
      resolve([null, result.data as FcResponse<T>])
    }).catch((err) => {
      resolve([err, undefined])
    })
})
