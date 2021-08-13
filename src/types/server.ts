export interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

export type ApiResponse<T> = Promise<[unknown, FcResponse<T> | undefined]>
