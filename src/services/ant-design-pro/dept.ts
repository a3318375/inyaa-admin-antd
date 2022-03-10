// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /dept/save */
export async function save6(body: API.InyaaSysDept, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/dept/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /dept/delete */
export async function delete7(body: API.InyaaSysDept, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/dept/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /dept/list */
export async function list7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params?: API.list7Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysDeptDto>('/dept/list', {
    method: 'GET',
    params: {
      ...params,
      dept: undefined,
      ...params['dept'],
    },
    ...(options || {}),
  });
}
