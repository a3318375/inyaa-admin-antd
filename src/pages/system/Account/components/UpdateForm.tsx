import { useState } from 'react';
import { message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormSwitch,
  ProFormSelect,
} from '@ant-design/pro-form';
import { save, info } from '@/services/ant-design-pro/user';
import { list3 } from '@/services/ant-design-pro/role';
import type { RequestOptionsType } from '@ant-design/pro-utils';
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
      <ModalForm<API.InyaaSysUser>
        title={id ? '编辑用户' : '新建用户'}
        visible={modalVisit}
        autoFocusFirstInput
        modalProps={{
          onCancel: () => {
            console.log('run');
          },
        }}
        request={async () => {
          if (id) {
            const userInfo = await info({ id: id });
            return userInfo.data ? userInfo.data : {};
          } else {
            return {};
          }
        }}
        onFinish={async (values) => {
          values.id = id;
          await save(values);
          message.success('提交成功');
          return true;
        }}
        onVisibleChange={setModalVisit}
      >
        <ProForm.Group>
          <ProFormText width="xl" name="username1" label="账号" placeholder="请输入账号" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password width="xl" name="password1" label="密码" placeholder="请输入密码" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            name="roleId"
            label="角色"
            placeholder="请选择角色"
            request={async () => {
              const roleResp = await list3();
              const roleList:
                | RequestOptionsType[]
                | PromiseLike<RequestOptionsType[]>
                | { label: any; value: any }[] = [];
              roleResp.data?.forEach((e: API.InyaaSysRole) => {
                const roleObj = { label: e.roleName, value: e.id };
                roleList.push(roleObj);
              });
              return roleList;
            }}
          />
          <ProFormSwitch name="enabled" label="是否启用" />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};
