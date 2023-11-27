<template>
  <view class="post-creation">
    <form @submit="submitForm">
      <input v-model="title" type="text" placeholder="标题" />
      <textarea v-model="content" placeholder="正文"></textarea>
      <input type="file" @change="handleFileUpload" accept="image/*" />
      <button type="submit">发布</button>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      file: null
    };
  },
  methods: {
    handleFileUpload(e) {
      // 获取用户上传的图片文件
      this.file = e.target.files[0];
    },
    submitForm() {
      // 创建FormData对象，用于上传文件和数据
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('imageFile', this.file);

      // 发起网络请求将数据传输到后端保存
      uni.request({
        url: '你的后端接口地址',
        method: 'POST',
        data: formData,
        success: (res) => {
          // 请求成功的处理逻辑
          // 例如显示发布成功提示，跳转到帖子详情页等
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
.post-creation {
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 10px;
}

input[type="file"] {
  margin-bottom: 10px;
}

button {
  background-color: #007AFF;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>