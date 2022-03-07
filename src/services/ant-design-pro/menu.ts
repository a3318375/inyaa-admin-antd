// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /menu/save */
export async function save5(body: API.InyaaSysMenu, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/menu/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /menu/delete */
export async function delete5(body: API.InyaaSysMenu, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/menu/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /menu/list */
export async function list5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list5Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysMenu>('/menu/list', {
    method: 'GET',
    params: {
      ...params,
      permission: undefined,
      ...params['permission'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /menu/findMenuList */
export async function findMenuList1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findMenuList1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysMenuVo>('/menu/findMenuList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
