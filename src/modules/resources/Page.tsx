import { Layout, Select, theme  } from 'antd';
import { List } from './components/List';
import { BizObjectSort } from '../../__generated__/graphql';
import { useState } from 'react';

const { Header } = Layout;

export const Page = () => {
  const [sort, setSort] = useState(BizObjectSort.Asc);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const handleChange = (value: BizObjectSort) => {
    setSort(value);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: colorBgContainer,
          height: 48,
        }}
      >
        <Select
          defaultValue={sort}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: BizObjectSort.Asc, label: 'Asc' },
            { value: BizObjectSort.Desc, label: 'Desc' },
          ]}
        />         
      </Header>
      <List sort={sort} />
    </Layout>
  );
}