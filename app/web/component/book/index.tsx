import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import s from './index.scss'

interface IAppProps {
  list: {
    id: number,
    title: string,
    summary: string,
    hits: number,
    url: string,
  }[],
  url: string,
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    url: state.url,
  }
}

@connect(mapStateToProps)
export default class App extends PureComponent<IAppProps> {
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

  render() {
    const { url, list } = this.props
    return (
      <div>
        <span>url: {url}</span>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }

  renderList = (): JSX.Element[] => {
    const { list } = this.props
    return list.map(({ id, title, summary, hits, url }) => (
      <li key={id} className={s.item}>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>summary: {summary}</p>
        <p>hits: {hits}</p>
        <p>url: {url}</p>
      </li>
    ))
  }
}
