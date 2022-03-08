import { useState } from 'react';
import { message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProFormSwitch,
  ProFormSelect,
} from '@ant-design/pro-form';
import { save8, info1 } from '@/services/ant-design-pro/blog';
import { list1 } from '@/services/ant-design-pro/blogType';
import { list2 } from '@/services/ant-design-pro/blogTag';
import type { RequestOptionsType } from '@ant-design/pro-utils';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import AuthButton from '@/components/AuthButton';

export type ButtonProps = {
  id?: any;
  type: number;
  authCode?: string;
};

export default (props: ButtonProps) => {
  const [text, setText] = useState('');
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
            if (blogIn.data?.context) {
              setText(blogIn.data?.context);
            }
            return blogIn.data ? blogIn.data : {};
          } else {
            return {};
          }
        }}
        onFinish={async (values) => {
          values.context = text;
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
        <ProForm.Group>
          <ProFormSelect
            name="typeId"
            label="分类"
            placeholder="请选择分类"
            request={async () => {
              const typeResp = await list1();
              const typeList:
                | RequestOptionsType[]
                | PromiseLike<RequestOptionsType[]>
                | { label: any; value: any }[] = [];
              typeResp.data?.forEach((e: API.InyaaType) => {
                const typeObj = { label: e.name, value: e.id };
                typeList.push(typeObj);
              });
              return typeList;
            }}
          />
          <ProFormSelect
            name="tagList"
            label="标签"
            mode="multiple"
            placeholder="请选择标签"
            request={async () => {
              const tagResp = await list2();
              const typeList:
                | RequestOptionsType[]
                | PromiseLike<RequestOptionsType[]>
                | { label: any; value: any }[] = [];
              tagResp.data?.forEach((e: API.InyaaTag) => {
                const typeObj = { label: e.name, value: e.id };
                typeList.push(typeObj);
              });
              return typeList;
            }}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSwitch name="status" label="是否发布" />
          <ProFormSwitch name="isComment" label="是否开启评论" />
          <ProFormSwitch name="isHot" label="是否设置热门" />
        </ProForm.Group>
        <Editor
          modelValue={text}
          onChange={(modelValue) => {
            setText(modelValue);
          }}
        />
      </ModalForm>
    </>
  );
};
