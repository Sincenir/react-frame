import { get, post } from '../server'
import { IQuestionSheetCreate } from '../../models/questionSheet'
import { ApiResponse } from '../../types/server'

export function postQuestionSheet<T={id: string}>(params: IQuestionSheetCreate): ApiResponse<T> {
  return post<T>('/questionsheet/add', params)
}

export function getQuestionSheets<T>(size: string, number: string): ApiResponse<T> {
  return get<T>(`/questionsheet/list?size=${size}&number=${number}`)
}

export function getQuestionSheet<T>(id: string | number): ApiResponse<T> {
  return get<T>(`/questionsheet/one?id=${id}`)
}

// export function getQuestionSheet() {}

export const questionSheetApi = {
  postQuestionSheet,
  getQuestionSheets,
  getQuestionSheet
}