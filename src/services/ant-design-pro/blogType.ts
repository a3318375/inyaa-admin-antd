// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /type/save */
export async function save1(body: API.InyaaType, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/type/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /type/delete */
export async function delete1(body: API.InyaaType, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/type/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /type/list */
export async function list1(options?: { [key: string]: any }) {
  return request<API.BaseResultListInyaaType>('/type/list', {
    method: 'GET',
    ...(options || {}),
  });
}
