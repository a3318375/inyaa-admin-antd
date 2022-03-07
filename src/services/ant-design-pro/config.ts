// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /config/save */
export async function save7(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/config/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /config/findAll */
export async function getConfig(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConfigParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultMapStringObject>('/config/findAll', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
