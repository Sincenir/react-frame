import React, { useState } from 'react'
import { Button } from 'antd'

interface PaperData {
  id: number;
  name: string;
}

const PaperDetail: React.FC = () => {
  const initData = () => {
    const tmp: Array<PaperData> = []
    for (let i = 0; i < 10000; i++) {
      tmp.push({
        id: i,
        name: `第${i}条`
      })
    }
    return tmp
  }
  const [data, setData] = useState(initData)

  const handleChangeData = () => {
    const tmp = [...data]
    tmp[0].name = '改变啦'
    setData(tmp)
  }

  return (
    <div>
      <span>paperDetail</span>
      <Button onClick={() => {handleChangeData()}}>更新数据？</Button>
      {
        data.map(v => {
          return (
            <div key={v.id}>
              {v.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default PaperDetail