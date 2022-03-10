// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增用户 POST /user/save */
export async function save(body: API.InyaaSysUser, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/user/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 POST /user/delete */
export async function deleteUsingPOST(body: API.InyaaSysUser, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户列表 返回所有用户数据 GET /user/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params?: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaSysUserVo>('/user/list', {
    method: 'GET',
    params: {
      ...params,
      user: undefined,
    },
    ...(options || {}),
  });
}

/** 查询用户详情 获取用户详情 GET /user/info */
export async function info(options?: { [key: string]: any }) {
  return request<API.BaseResultInyaaSysUser>('/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}
