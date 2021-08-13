import { testApi } from './path/test'
import { questionSheetApi } from './path/questionSheet'

export const api = {
  ...testApi,
  ...questionSheetApi
}
