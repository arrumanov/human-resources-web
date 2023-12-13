import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { List, Typography, notification, Spin } from 'antd';
import { GetResourcesQuery, GetResourcesQueryVariables, TabType, ObjectType, FilterEnumType} from '../__generated__/graphql'
import {GET_RESOURCES} from '../operations/queries/getResources'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.less'

function AppBody() {
  const [api, contextHolder] = notification.useNotification();
  const [count, setCount] = useState(0)

  const { data, loading, error } =
    useQuery<GetResourcesQuery, GetResourcesQueryVariables>(GET_RESOURCES, { variables: { input: {page: 2, pageSize: 25, filters: [{key: ObjectType.Resource, value: [{customFieldId: "CFIsActive", filterType: FilterEnumType.In, tabType: TabType.Basic, filterValue: {stringValue: ["true"], tagWithLevels: [], isForeachDay: false}}]}], mainSort: null} } });
  
  if (error) {
    api.error({
      message: 'Notification Title',
      description: error.message,
    });
  }

  return (
    <>
      {contextHolder}
      <Spin spinning={loading} size="large" className="spinner" style={{ margin: 'auto' }} >
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data?.resources.list}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
            </List.Item>
          )}
        />
      </Spin>
    </>
  )
}

export default AppBody
