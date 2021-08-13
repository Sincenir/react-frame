export interface IQuestionSheet {
  id?: ''
  title: string
  img_url: string
  desc: string  
}

export interface IQuestionSheetCreate {
  title: string
  img_url: string
  desc: string
}

export interface IQuestionSheetModify extends IQuestionSheetCreate {
  questionsheetid: string
}


export interface ISectionQuestion {
  title: string
  tip: string
}

export interface IRadioQuestion {
  code: string
  title: string
  tip: string 
}


export interface IquestionSheetDetail {
  id: string
  title: string
  questions: Array<ISectionQuestion | IRadioQuestion>
}