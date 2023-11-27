"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "",
      content: "",
      file: null
    };
  },
  methods: {
    handleFileUpload(e) {
      this.file = e.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("imageFile", this.file);
      common_vendor.index.request({
        url: "你的后端接口地址",
        method: "POST",
        data: formData,
        success: (res) => {
        },
        fail: (err) => {
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.title,
    b: common_vendor.o(($event) => $data.title = $event.detail.value),
    c: $data.content,
    d: common_vendor.o(($event) => $data.content = $event.detail.value),
    e: common_vendor.o((...args) => $options.handleFileUpload && $options.handleFileUpload(...args)),
    f: common_vendor.o((...args) => $options.submitForm && $options.submitForm(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/test1/pages/newPost/newPost.vue"]]);
wx.createPage(MiniProgramPage);
