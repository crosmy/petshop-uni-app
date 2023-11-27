<template>
  <view class="image-list">
    <uni-list>
      <uni-list-item v-for="(item, index) in imageList" :key="index">
        <image :src="item.imageUrl" mode="aspectFill"></image>
        <text>{{ item.title }}</text>
        <text>{{ item.description }}</text>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageList: []
    };
  },
  mounted() {
    // 在页面加载时获取图片和信息数据
    this.fetchImageList();
  },
  methods: {
    fetchImageList() {
      // 发起网络请求获取图片和信息数据
      // 例如使用uni.request方法
      uni.request({
        url: '你的后端接口地址',
        success: (res) => {
          // 请求成功，将数据保存到imageList中
          this.imageList = res.data;
        },
        fail: (err) => {
          // 请求失败的处理逻辑
        }
      });
    }
  }
};
</script>

<style>
.image-list {
  padding: 10px;
}

uni-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

text {
  flex: 1;
  line-height: 1.5;
}
</style>
