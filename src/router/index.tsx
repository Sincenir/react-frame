import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { IRoute } from '../types/router'
import { Switch } from 'react-router'

const PageList = lazy(() => import('../pages/paperlist'))
const PageDetail = lazy(() => import('../pages/paperdetail'))
const Score = lazy(() => import('../pages/score'))
// import PageList from '../pages/paperlist'
// import PageDetail from '../pages/paperdetail'
// import Score from '../pages/score'

export const routes: Array<IRoute> = [
  {
    title: '问卷列表',
    name: 'paperlist',
    path: '/paper/list',
    component: PageList
  },
  {
    title: '问卷详情',
    name: 'paperdetail',
    path: '/paper/detail',
    component: PageDetail
  },
  {
    title: '设置因子',
    name: 'score',
    path: '/score',
    component: Score
  },
  {
    title: '设置解读',
    name: 'jiedu',
    path: '/jiedu',
    component: PageList
  },
]

// 路由拦截
const beforeEach = (route: IRoute): JSX.Element => {
  return <route.component />
}

// export default 
const RouterView:React.FC = () =>  {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Switch>
        {
          routes.map(v => <Route key={v.name} path={v.path} render={() => beforeEach(v)}></Route>)
        }
      </Switch>
    </Suspense>
  )
}

export default RouterView