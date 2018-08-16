import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import Header from './Header';
// import Nav from './Nav';
import './style.less';

export default class PageContainer extends React.PureComponent {
  static defaultProps = {
    // loadStatus: 0,
    className: ''
  };

  static propTypes = {
    // loadStatus: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    return (
      <div className="page-container" >
        {/* 页面loading组件 <Loading status={this.props.loadStatus} /> */}
        {/* 页面顶栏 <Header /> */}
        {/* 页面左（右）导航菜单 <Nav /> */}
        <div className={cn('page-content-container', this.props.className)} >
          { this.props.children }
        </div>
      </div>
    );
  }
}
