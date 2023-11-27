"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        return;
      }
      const userInfo = {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      };
      common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: "localhost:8080/user/register",
        method: "POST",
        data: userInfo,
        //header = token ? { 'Authorization': token } : {};
        success: (res) => {
          if (res.data.success) {
            common_vendor.index.setStorageSync("token", res.data.token);
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
    a: $data.nickname,
    b: common_vendor.o(($event) => $data.nickname = $event.detail.value),
    c: $data.email,
    d: common_vendor.o(($event) => $data.email = $event.detail.value),
    e: $data.password,
    f: common_vendor.o(($event) => $data.password = $event.detail.value),
    g: $data.confirmPassword,
    h: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    i: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/test1/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
