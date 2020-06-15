let menus = [
  {
    text: "服务管理", // 父菜单名字
    icon: "el-icon-setting", // 父菜单图标
    // routerName: "serve",
    subMenus: [
      { text: "服务信息", routerName: "ServeList", path: "home/serve/serveList" },
      // { text: "服务信息", routerName: "Serve" },
      // { text: "新增", routerName: "Serve" },
    ], // 子菜单列表
  },
  {
    text: "产品管理",
    icon: "el-icon-menu",
    // routerName: "product",
    subMenus: [
      {
        text: "产品信息",
        routerName: "ProductList",
        path: "home/product/productList",
      },
      { text: "新增", routerName: "ProductAdd", path: "home/product/productAdd" },
    ],
  },
  {
    text: "日志信息",
    icon: "el-icon-message",
    routerName: "Dialog",
  },
];

menus = menus.map((x, i) => {
  return {
    ...x,
    // 子菜单就拼接${父菜单index}-${子菜单index}
    subMenus: (x.subMenus || []).map((y, j) => {
      return { ...y, index: `${i}-${j}` };
    }),
    // 父菜单就把 index 加上好了
    index: `${i}`,
  };
});

let tableItem = {
  date: "2020-06-15", // 日期
  name: "耶利米", // 姓名
  phone: "13888888888", // 电话
  address: "深圳市南山区滨海大道 888 号", // 地址
};
// 此处先以 tableItem 为数据源，拷贝生成 20 个数据，然后再根据索引 index 添加上 id

const tableData = Array(20)
  .fill(tableItem)
  .map((x, i) => {
    return { id: i + 1, ...x };
  });

export { menus, tableData };
