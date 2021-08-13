import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react'
import { Button } from 'antd'
import { testStore } from '../../store/index'


const PaperList: React.FC = () => {
  const store = useLocalStore(() => testStore)

  const handleChangeData = () => {
    store.pushData()
  }

  return useObserver(() => (
    <div>
      <span>paperlist</span>
      <Button onClick={() => {handleChangeData()}}>更新数据？</Button>
      {
        store.list.map(v => {
          return (
            <div key={v.id}>
              {v.name}
            </div>
          )
        })
      }
    </div>
  ))
}


export default PaperList