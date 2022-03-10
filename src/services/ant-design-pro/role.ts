// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增角色 POST /role/save */
export async function save3(body: API.InyaaSysRoleVo, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/role/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除角色 POST /role/delete */
export async function delete3(body: API.InyaaSysRole, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色列表 GET /role/list */
export async function list3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params?: API.list3Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysRoleVo>('/role/list', {
    method: 'GET',
    params: {
      ...params,
      role: undefined,
    },
    ...(options || {}),
  });
}
