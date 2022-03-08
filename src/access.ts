/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { keyList?: string[] } | undefined) {
  const { keyList = [] } = initialState ?? {};
  return {
    normalRouteFilter: (route: { name: string }) => keyList.includes(route.name), // initialState 中包含了的路由才有权限访问
    canReadFoo: (data: string) => keyList.includes(data),
  };
}
