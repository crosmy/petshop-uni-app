<template>
  <view class="login">
    <input v-model="email" type="email" placeholder="邮箱地址" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="login">登录</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 创建用户信息对象
      const userInfo = {
        email: this.email,
        password: this.password
      };

      // 发起网络请求将用户信息传输到后端进行验证
      uni.request({
        url: '你的后端登录接口地址',
        method: 'POST',
        data: userInfo,
        success: (res) => {
          if (res.data.success) {
            // 登录成功的处理逻辑
            // 保存token到本地存储
            uni.setStorageSync('token', res.data.token);

            // 跳转到初始页面
            uni.reLaunch({
              url: '/pages/Home' // 替换为实际的初始页面路径
            });
          } else {
            // 登录失败的处理逻辑
            // 例如显示登录失败提示，处理无对应用户或密码错误的情况
          }
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
.login {
  padding: 10px;
}

input {
  margin-bottom: 10px;
  padding: 10px;
}

button {
  background-color: #007AFF;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>