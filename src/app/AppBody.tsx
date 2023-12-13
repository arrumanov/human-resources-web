
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import {ResourcePage} from '../modules/resources'
import '../styles/App.less'
import { Menu } from './Menu';
import { useState } from 'react';

function AppBody() {
  const [marginLeft, setMarginLeft] = useState(200);

  const handleCollapse = (value: boolean) => {
    value ? setMarginLeft(80) : setMarginLeft(200);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Menu onCollapse={handleCollapse} />
        <Layout style={{ marginLeft: marginLeft, minHeight: '100vh' }}>
          <Routes>
            <Route path="*" element={<ResourcePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Layout>
  )
}

export default AppBody
