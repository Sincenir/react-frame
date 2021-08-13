import { get, post, del, put } from '../server'
import { TestItem } from '../../models/test'
import { ApiResponse } from '../../types/server'

export function getTest<T=TestItem>(): ApiResponse<T> {
  return get<T>('/get')
}

export function postTest<T=TestItem>(): ApiResponse<T> {
  return post<T>('/test/testpost?dev_user=www', {params: '请求参数 post'})
}

export function putTest<T=TestItem>(): ApiResponse<T> {
  return put<T>('/test/testput?dev_user=www', {params: '请求参数 put'})
}

export function delTest<T=TestItem>(): ApiResponse<T> {
  return del<T>('/test/testdelete?dev_user=www&id=1999')
}

export const testApi = {
  getTest,
  postTest,
  putTest,
  delTest
}

