/**
 * {{title}} 页面
 * {{pageName}}
 * {{date}}
 */

import React from 'react';
import { connect } from 'react-redux';
import PageContainer from '{{pathLayers}}common/components/PageContainer';
import fetch from '{{pathLayers}}common/utils/fetch';
import { setData } from './actions';
import '{{pathLayers}}common/styles/common.less';
import './style.less';

@connect(
  state => ({
    data: state.data
  }),
  { setData }
)
export default class Page extends React.Component {
  state = {
    // loadStatus: 0,
    time: ''
  };

  componentDidMount() {
    fetch({
      url: '/api/now'
    }).then((res) => {
      this.setState({
        // loadStatus: 1,
        time: JSON.parse(res).now
      });
    });
    this.props.setData('Hello, world!');
  }

  render() {
    console.log(this.props.data);
    return (
      <PageContainer className="content-container" /* loadStatus={this.state.loadStatus} */ >
        <h2>示例页面</h2>
        <p>{ this.props.data.title }</p>
        <p className="time">{ new Date(this.state.time).toLocaleString() }</p>
      </PageContainer>
    );
  }
}
