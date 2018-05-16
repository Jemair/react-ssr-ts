import React, { PureComponent, ReactElement } from 'react'
import { connect } from 'react-redux'
import { add, del } from '../actions'
import s from './home.scss'

export interface IHomeProps {
  add: (item: object) => void
  del: (id: number) => void
  list: Array<{
    id: number
    hits: number,
    url: string
    title: string
    moduleName: string,
    summary: number,
  }>
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

@connect(mapStateToProps, { add, del })
export default class Home extends PureComponent<IHomeProps> {
  public static fetch() {
    return Promise.resolve({
      list: [{
        id: 0,
        title: 'Egg+ 渲染骨架',
        summary: '基于Egg + React +ddd Webpack3/Webpack2 服务端渲染同构工程骨架项目',
        hits: 550,
        url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate',
      }, {
        id: 1,
        title: 'easywebpack',
        summary: 'programming instead of configuration, webpack is so easy',
        hits: 550,
        url: 'https://github.com/hubcarl/easywebpack',
      }, {
        id: 2,
        title: '前端工程化解决方案脚手架easywebpack-cli',
        summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
        hits: 278,
        url: 'https://github.com/hubcarl/easywebpack-cli',
      }],
    }).then((data) => {
      return data
    })
  }

  public render() {
    const { add, list } = this.props
    const id = list.length + 1
    const item = {
      id,
      title: `Egg+Redddact 服务端渲染骨架-${id}`,
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate',
    }
    return (
      <div className="redux-nav-item">
        <h3>SPA Server Side</h3>
        <div className="container">
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-xs-12 col-sm-9">
              <ul className="smart-artiles" id="articleList">
                {this.renderList()}
              </ul>
            </div>
          </div>
        </div>
        <div className={`redux-btn-add ${s.add}`} onClick={() => add(item)}>Add</div>
      </div>
    )
  }

  public renderList = (): JSX.Element[] => {
    const { list, del } = this.props
    return list.map(function (item) {
      return (
        <li key={item.id}>
          <div className="point">+{item.hits}</div>
          <div className="card">
            <h2><a href={item.url} target="_blank">{item.title}</a></h2>
            <div>
              <ul className="actions">
                <li>
                  <time className="timeago">{item.moduleName}</time>
                </li>
                <li className="tauthor">
                  <a href="#" target="_blank" className="get">wangky</a>
                </li>
                <li><a>+收藏abd</a></li>
                <li>
                  <span className="timeago">{item.summary}</span>
                </li>
                <li>
                  <span className="redux-btn-del" onClick={() => del(item.id)}>Delete</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      )
    })
  }
}
