<template>
  <view class="register">
    <input v-model="nickname" type="text" placeholder="昵称" />
    <input v-model="email" type="email" placeholder="邮箱地址" />
    <input v-model="password" type="password" placeholder="密码" />
    <input v-model="confirmPassword" type="password" placeholder="重复密码" />
    <button @click="register">注册</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      // 检查密码和重复密码是否一致
      if (this.password !== this.confirmPassword) {
        // 密码不一致，可以显示错误提示或进行其他处理
        return;
      }

      // 创建用户信息对象
      const userInfo = {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      };

	const token = uni.getStorageSync('token');
      // 发起网络请求将用户信息传输到后端进行注册
      uni.request({
        url: 'localhost:8080/user/register',
        method: 'POST',
        data: userInfo,
		//header = token ? { 'Authorization': token } : {};
        success: (res) => {
          if (res.data.success) {
            // 注册成功的处理逻辑
            // 例如显示注册成功提示，跳转到登录页面等
			
			// 保存token到本地存储
			uni.setStorageSync('token', res.data.token);
			
          } else {
            // 注册失败的处理逻辑
            // 例如显示注册失败提示，处理重复昵称或邮箱地址的情况
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
.register {
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