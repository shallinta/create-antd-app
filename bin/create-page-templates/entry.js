/**
 * {{title}} 页面入口
 * {{pageName}}
 * {{date}}
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import reducer from './reducer';
// import saga from './saga';

import Page from '.';

moment.locale('zh-cn');

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const store = createStore(reducer);
// sagaMiddleware.run(saga);

const render = (Entry) => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <Entry />
        </LocaleProvider>
      </Provider>
    ),
    document.querySelector('#app')
  );
};

render(Page);

if (module.hot) {
  // module.hot.accept();
  module.hot.accept(['.'], () => {
    // eslint-disable-next-line
    render(require('.'));
  });
}
