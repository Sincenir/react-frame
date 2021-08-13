import Mock from 'mockjs'
import { FcResponse } from '../types/server'

const getDataContainer = <T>(data: T): FcResponse<T> => {
  return { errno: '0', errmsg: '', data: data }
}

const baseMock = (url: string, method: string, data: unknown) => {
  Mock.mock(url, method, () => {
    return getDataContainer(Mock.mock(data))
  })
}

const get = (url: string, data: unknown): void => { baseMock(url, 'get', data) }

const post = (url: string, data: unknown): void => { baseMock(url, 'post', data) }

const questionSheet = {
  id: '1',
  title: 'string',
  img_url: '@image(\'200x100\', \'#4A7BF7\', \'Hello\')',
  desc: 'string'
}

export const mockGetQuestionSheet = get('/api/questionsheet/one?id=1&', questionSheet)

const questionSheets = {
  'list|1-10': [{
    'id|+1': 1,
    title: 'string',
    img_url: '@image(\'200x100\', \'#4A7BF7\', \'Hello\')',
    desc: 'string'
  }]
}
export const mockGetQuestionSheets = get('/api/questionsheet/list?size=20&number=&1', questionSheets)

export default {
  get,
  post
}