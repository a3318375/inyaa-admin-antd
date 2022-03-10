/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { save3 } from '@/services/ant-design-pro/role';
import { findTreeList } from '@/services/ant-design-pro/permission';
import 'md-editor-rt/lib/style.css';
import AuthButton from '@/components/AuthButton';

export type ButtonProps = {
  id?: any;
  type: number;
  authCode?: string;
};

export default (props: ButtonProps) => {
  const [modalVisit, setModalVisit] = useState(false);
  const { id, type, authCode } = props;
  return (
    <>
      <AuthButton authCode={authCode} type={type} onClick={() => setModalVisit(true)} />
      <ModalForm<API.InyaaSysRole>
        title={id ? '编辑角色' : '新建角色'}
        visible={modalVisit}
        autoFocusFirstInput
        modalProps={{
          onCancel: () => {
            console.log('run');
          },
        }}
        request={async () => {
          if (id) {
            return id ? id : {};
          } else {
            return {};
          }
        }}
        onFinish={async (values) => {
          values.id = id;
          await save3(values);
          message.success('提交成功');
          return true;
        }}
        onVisibleChange={setModalVisit}
      >
        <ProForm.Group>
          <ProFormText width="xl" name="roleName" label="标题" placeholder="请输入标题" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            width="xl"
            name="description"
            label="摘要"
            placeholder="请输入文章摘要"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTreeSelect
            name="menuList"
            placeholder="Please select"
            allowClear
            width={330}
            secondary
            request={async () => {
              const menuResp = await findTreeList();
              return menuResp.data ? menuResp.data : [];
            }}
            // tree-select args
            fieldProps={{
              showArrow: false,
              filterTreeNode: true,
              showSearch: true,
              dropdownMatchSelectWidth: false,
              labelInValue: true,
              autoClearSearchValue: true,
              multiple: true,
              treeNodeFilterProp: 'title',
              fieldNames: {
                label: 'title',
              },
            }}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};
