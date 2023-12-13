import { useQuery } from '@apollo/client'
import { useState } from 'react';
import { List as AntdList, Typography, notification, Spin } from 'antd';
import { GetResourcesQuery, GetResourcesQueryVariables, TabType, ObjectType, FilterEnumType, BizObjectSort} from '../../../__generated__/graphql'
import {GET_RESOURCES} from '../../../operations/queries/getResources';
import '../../../styles/common/ObjectPage.less';

type Props = {
  sort: BizObjectSort,
};

export const List = ({sort}: Props) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [api, contextHolder] = notification.useNotification();


  const { data, loading, error } =
    useQuery<GetResourcesQuery, GetResourcesQueryVariables>(GET_RESOURCES, { variables: { input: {page: page, pageSize: pageSize, filters: [{key: ObjectType.Resource, value: [{customFieldId: "CFIsActive", filterType: FilterEnumType.In, tabType: TabType.Basic, filterValue: {stringValue: ["true"], tagWithLevels: [], isForeachDay: false}}]}], mainSort: sort} } });
  
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
        <AntdList
          className="object-list"
          pagination={{
            onChange: (page) => {
              console.log(page);
              setPage(page);
            },
            onShowSizeChange: (current, size) => {
              console.log(size);
              setPageSize(size);
            },
            position: 'top',
            total: data?.resources.count,
            pageSizeOptions: [5, 10, 25],
            defaultPageSize: 5,
          }}
          bordered
          dataSource={data?.resources.list}
          renderItem={(item) => (
            <AntdList.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
            </AntdList.Item>
          )}
        />
      </Spin>
    </>
  );
}