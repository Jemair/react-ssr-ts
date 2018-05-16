import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
const NotFound = () => {
  const render = ({ staticContext }) => {
    if (staticContext) {
      staticContext.status = 404
    }
    return (
      <div>
        <h1>404 : Not Found</h1>
      </div>
    )
  }
  return (
    <Route render={render} />
  )
}
const routes = [
  {
    path: '/spa/ssr',
    component: Home,
  },
  {
    path: '/spa/ssr/about',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
