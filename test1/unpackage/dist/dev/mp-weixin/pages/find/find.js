"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imageList: []
    };
  },
  mounted() {
    this.fetchImageList();
  },
  methods: {
    fetchImageList() {
      common_vendor.index.request({
        url: "你的后端接口地址",
        success: (res) => {
          this.imageList = res.data;
        },
        fail: (err) => {
        }
      });
    }
  }
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.imageList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.description),
        d: index,
        e: "4540b9ee-1-" + i0 + ",4540b9ee-0"
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/test1/pages/find/find.vue"]]);
wx.createPage(MiniProgramPage);
