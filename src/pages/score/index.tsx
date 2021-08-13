import React, { useState } from 'react'
import { Button } from 'antd'

interface PaperData {
  id: number;
  name: string;
}

const Score: React.FC = () => {
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
  const [data] = useState(initData)

  return (
    <div>
      <span>paperDetail</span>
      {
        data.map(v => {
          return (
            <Item key={v.id} data={v}></Item>
          )
        })
      }
    </div>
  )
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const [state, setstate] = useState({ ...props.data })

  const handleChangeData = () => {
    setstate({ ...state, name: '我改变了' })
  }
  return (
    <div>
      <Button onClick={() => { handleChangeData() }}>更新数据？</Button>
      {state.name}
    </div>
  )
}

interface ItemProps {
  data: PaperData
}

export default Score