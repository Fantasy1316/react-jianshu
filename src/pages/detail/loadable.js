import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => {
    return <p style={{padding: "40px", textAlign: "center"}}>加载中...</p>
  },
});

export default () => <LoadableComponent />