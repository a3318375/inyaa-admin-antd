// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /permission/save */
export async function save4(body: API.InyaaSysPermission, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/permission/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /permission/delete */
export async function delete4(body: API.InyaaSysPermission, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/permission/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/list */
export async function list4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list4Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysPermission>('/permission/list', {
    method: 'GET',
    params: {
      ...params,
      permission: undefined,
      ...params['permission'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/findPermissionList */
export async function findPermissionList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPermissionListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysPermissionVo>('/permission/findPermissionList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/findMenuList */
export async function findMenuList(options?: { [key: string]: any }) {
  return request<API.BaseResultListMapStringObject>('/permission/findMenuList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/findButtonList */
export async function findButtonList(options?: { [key: string]: any }) {
  return request<API.BaseResultListString>('/permission/findButtonList', {
    method: 'GET',
    ...(options || {}),
  });
}
