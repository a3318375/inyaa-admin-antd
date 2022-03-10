import { useState } from 'react';
import { message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { save8, info1 } from '@/services/ant-design-pro/blog';
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
      <ModalForm<API.InyaaBlogDto>
        title={id ? '编辑文章' : '新建文章'}
        visible={modalVisit}
        autoFocusFirstInput
        modalProps={{
          onCancel: () => {
            console.log('run');
          },
        }}
        request={async () => {
          if (id) {
            const blogIn = await info1({ blog: { id: id } });
            return blogIn.data ? blogIn.data : {};
          } else {
            return {};
          }
        }}
        onFinish={async (values) => {
          values.id = id;
          await save8(values);
          message.success('提交成功');
          return true;
        }}
        onVisibleChange={setModalVisit}
      >
        <ProForm.Group>
          <ProFormText width="xl" name="title" label="标题" placeholder="请输入标题" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea width="xl" name="summary" label="摘要" placeholder="请输入文章摘要" />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};
