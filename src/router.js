import Vue from "vue";
import Router from "vue-router";

import App from "@/App.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Serve from "@/views/Serve.vue";
import Dialog from "@/views/Dialog.vue";
import AddFormDiv from "@/components/AddFormDiv.vue";
import ServeList from "@/components/ServeList.vue";
import ProductList from "@/components/ProductList.vue";

Vue.use(Router);

//**** */
// const User = {
//   template: `
//   <div class="user">
//     <h2>User {{ $route.params.id }}</h2>
//     <router-view></router-view>
//   </div>
//
// }
// // const router = new Router({
// //   routes: [
// //     { path: '/user/:id', component: User }
// //   ]
// // })
// const router = new Router({
//   routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         {
//           // 当 /user/:id/profile 匹配成功，
//           // UserProfile 会被渲染在 User 的 <router-view> 中
//           path: 'profile',
//           component: UserProfile
//         },
//         {
//           // 当 /user/:id/posts 匹配成功
//           // UserPosts 会被渲染在 User 的 <router-view> 中
//           path: 'posts',
//           component: UserPosts
//         },
//         {
//           // 当匹配不成功，比如说/user/foo的时候，就会进入这里
//           // UserPosts 会被渲染在 User 的 <router-view> 中
//           path: '',
//           component: UserHome
//         }
//       ]
//     }
//   ]
// })
//**** */

// 配置路由信息
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: "/", // 父路由路径
    component: App, // 父路由组件，传入 vue component
    name: "App", // 路由名称
    redirect: "/login", //默认第一次进入登录界面
    ///////////////////
    //path: "/", // 父路由路径
    //component: App, // 父路由组件，传入 vue component
    //name: "App", // 路由名称
    // 设置子路由
    children: [
      {
        path: "login", // 子路由路径
        component: Login, // 子路由组件，会替换父组件中<router-view>中的内容
        name: "Login", // 路由名称
      },
      {
        // 应用首页
        path: "home",
        component: Home,
        name: "Home",
        children: [
          {
            path: "product", // 子路由路径
            component: Product, // 子路由组件，会替换父组件中<router-view>中的内容
            name: "Product", // 路由名称
            children: [
              {
                path: "productAdd", // 子路由路径
                component: AddFormDiv, // 子路由组件，会替换父组件中<router-view>中的内容
                name: "ProductAdd", // 路由名称
              },
              {
                path: "productList", // 子路由路径
                component: ProductList, // 子路由组件，会替换父组件中<router-view>中的内容
                name: "ProductList", // 路由名称
              },
            ],
          },
          {
            path: "serve", // 子路由路径
            component: Serve, // 子路由组件，会替换父组件中<router-view>中的内容
            name: "Serve", // 路由名称
            children: [
              {
                path: "serveList", // 子路由路径
                component: ServeList, // 子路由组件，会替换父组件中<router-view>中的内容
                name: "ServeList", // 路由名称
              },
            ],
          },
          {
            path: "dialog", // 子路由路径
            component: Dialog, // 子路由组件，会替换父组件中<router-view>中的内容
            name: "Dialog", // 路由名称
          },
        ],
      },
    ],
  },

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
  routes,
});
