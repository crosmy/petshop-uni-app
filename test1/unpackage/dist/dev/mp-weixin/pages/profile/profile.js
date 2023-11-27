"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      nickname: ""
    };
  },
  mounted() {
    this.fetchNickname();
  },
  methods: {
    fetchNickname() {
      common_vendor.index.request({
        url: "你的后端接口地址",
        success: (res) => {
          this.nickname = res.data.nickname;
        },
        fail: (err) => {
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.nickname)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/test1/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
