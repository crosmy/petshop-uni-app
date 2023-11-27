"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const userInfo = {
        email: this.email,
        password: this.password
      };
      common_vendor.index.request({
        url: "你的后端登录接口地址",
        method: "POST",
        data: userInfo,
        success: (res) => {
          if (res.data.success) {
            common_vendor.index.setStorageSync("token", res.data.token);
            common_vendor.index.reLaunch({
              url: "/pages/Home"
              // 替换为实际的初始页面路径
            });
          }
        },
        fail: (err) => {
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.email,
    b: common_vendor.o(($event) => $data.email = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/test1/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
