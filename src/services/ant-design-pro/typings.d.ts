declare namespace API {
  type InyaaSysUser = {
    id?: number;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    loginDate?: string;
    loginIp?: string;
    avatar?: string;
    roleId?: number;
    deptId?: number;
    createTime?: string;
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
  };

  type BaseResultString = {
    code?: number;
    message?: string;
    data?: string;
  };

  type InyaaType = {
    id?: number;
    name?: string;
    createTime?: string;
    remark?: string;
  };

  type InyaaTag = {
    id?: number;
    name?: string;
    createTime?: string;
    remark?: string;
  };

  type InyaaSysRoleVo = {
    id?: number;
    roleName?: string;
    roleKey?: string;
    description?: string;
    menuList?: number[];
  };

  type InyaaSysRole = {
    id?: number;
    roleName?: string;
    roleKey?: string;
    description?: string;
  };

  type InyaaSysPermission = {
    id?: number;
    title?: string;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    type?: number;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysMenu = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysDept = {
    id?: number;
    name?: string;
    parentId?: number;
    status?: boolean;
    createTime?: string;
    remark?: string;
    sort?: number;
  };

  type InyaaBlog = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    typeId?: number;
    isHot?: boolean;
  };

  type InyaaBlogDto = {
    page?: number;
    size?: number;
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    context?: string;
    isHot?: boolean;
    tagList?: number[];
    typeId?: number;
    typeName?: string;
    previousBlog?: InyaaBlog;
    nextBlog?: InyaaBlog;
  };

  type BaseResultListInyaaSysUserVo = {
    code?: number;
    message?: string;
    data?: InyaaSysUserVo[];
  };

  type InyaaSysUserVo = {
    id?: number;
    roleName?: string;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    loginDate?: string;
    loginIp?: string;
    avatar?: string;
    roleId?: number;
    createTime?: string;
    enabled?: boolean;
  };

  type BaseResultInyaaSysUser = {
    code?: number;
    message?: string;
    data?: InyaaSysUser;
  };

  type BaseResultListInyaaType = {
    code?: number;
    message?: string;
    data?: InyaaType[];
  };

  type BaseResultListInyaaTag = {
    code?: number;
    message?: string;
    data?: InyaaTag[];
  };

  type BaseResultListInyaaSysRoleVo = {
    code?: number;
    message?: string;
    data?: InyaaSysRoleVo[];
  };

  type BaseResultListInyaaSysPermission = {
    code?: number;
    message?: string;
    data?: InyaaSysPermission[];
  };

  type BaseResultListInyaaSysPermissionVo = {
    code?: number;
    message?: string;
    data?: InyaaSysPermissionVo[];
  };

  type InyaaSysPermissionVo = {
    id?: number;
    title?: string;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    type?: number;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type BaseResultListMapStringObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>[];
  };

  type BaseResultListString = {
    code?: number;
    message?: string;
    data?: string[];
  };

  type BaseResultListInyaaSysMenu = {
    code?: number;
    message?: string;
    data?: InyaaSysMenu[];
  };

  type BaseResultListInyaaSysMenuVo = {
    code?: number;
    message?: string;
    data?: InyaaSysMenuVo[];
  };

  type InyaaSysMenuVo = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type BaseResultListObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>[];
  };

  type BaseResultListInyaaSysDeptDto = {
    code?: number;
    message?: string;
    data?: InyaaSysDeptDto[];
  };

  type InyaaSysDeptDto = {
    id?: number;
    name?: string;
    parentId?: number;
    status?: boolean;
    createTime?: string;
    remark?: string;
    sort?: number;
  };

  type BaseResultMapStringObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type BaseResultPageInyaaBlogVo = {
    code?: number;
    message?: string;
    data?: PageInyaaBlogVo;
  };

  type InyaaBlogVo = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    isComment?: boolean;
    context?: string;
    isHot?: boolean;
    tagList?: InyaaTag[];
    typeId?: number;
    typeName?: string;
    author?: string;
  };

  type PageInyaaBlogVo = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogVo[];
    number?: number;
    sort?: Sort;
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type PageableObject = {
    offset?: number;
    sort?: Sort;
    paged?: boolean;
    unpaged?: boolean;
    pageNumber?: number;
    pageSize?: number;
  };

  type Sort = {
    empty?: boolean;
    unsorted?: boolean;
    sorted?: boolean;
  };

  type BaseResultInyaaBlogDto = {
    code?: number;
    message?: string;
    data?: InyaaBlogDto;
  };

  type BaseResultListInyaaBlog = {
    code?: number;
    message?: string;
    data?: InyaaBlog[];
  };

  type BaseResultPageInyaaBlog = {
    code?: number;
    message?: string;
    data?: PageInyaaBlog;
  };

  type PageInyaaBlog = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlog[];
    number?: number;
    sort?: Sort;
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type uploadParams = {
    type: number;
  };

  type delete6Params = {
    id: number;
  };

  type listParams = {
    user: InyaaSysUser;
  };

  type list3Params = {
    role: InyaaSysRole;
  };

  type list4Params = {
    permission: InyaaSysPermission;
  };

  type findPermissionListParams = {
    enable: boolean;
  };

  type list5Params = {
    permission: InyaaSysMenu;
  };

  type findMenuList1Params = {
    enable: boolean;
  };

  type list7Params = {
    dept: InyaaSysDept;
  };

  type getConfigParams = {
    type: number;
  };

  type findBlogListParams = {
    req: InyaaBlogDto;
  };

  type webInfoParams = {
    blog: InyaaBlog;
  };

  type list8Params = {
    req: InyaaBlog;
  };

  type list9Params = {
    req: InyaaBlogDto;
  };

  type info1Params = {
    blog: InyaaBlog;
  };
}
