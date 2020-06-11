import Vue from 'vue'
import Router from 'vue-router'
//import CreateArticle from './views/CreateArticle.vue'
//import ListArticle from "./views/ListArticle.vue"
//import ModifyAriticle from "./views/ModifyAriticle.vue"
Vue.use(Router)

// 配置路由信息
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  // {
  //   path: "/", // 父路由路径
  //   component: App, // 父路由组件，传入 vue component
  //   name: "App", // 路由名称
  //   // 设置子路由
  //   children: [
  //     {
  //       path: "login", // 子路由路径
  //       component: Login, // 子路由组件，会替换父组件中<router-view>中的内容
  //       name: "Login" // 路由名称
  //     },
  //     {
  //       // 应用首页
  //       path: "home",
  //       component: Home,
  //       name: "Home",
  //       children: [
  //         // 服务列表
  //         { path: "service", component: Service, name: "Service" },
  //         // 产品容器
  //         {
  //           path: "product",
  //           component: Product,
  //           name: "Product",
  //           children: [
  //             // 子路由内容
  //             // 产品列表
  //             { path: "list", component: ProductList, name: "ProductList" },
  //             // 产品新增
  //             { path: "add/0", component: ProductEdit, name: "ProductAdd" },
  //             // 产品编辑
  //             // 我们能看到，新增和编辑其实最终使用的是同一个组件，所以后面会有一些需要兼容处理的地方
  //             // :id可匹配任意值，且可在组件中通过this.$route.params.id获取该值
  //             { path: "edit/:id", component: ProductEdit, name: "ProductEdit" }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default new Router({
  routes
})
