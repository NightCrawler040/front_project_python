<script setup>
import axios from 'axios'
import { ref } from 'vue'
const user = ref({
  email: '',
  password: ''
})

const loging = async () => {
  const response = await axios.post('http://localhost:8000/api/login/', {
    email: user.value.email,
    password: user.value.password
  })
  localStorage.setItem('access_token', response.data.access)
  localStorage.setItem('refresh_token', response.data.refresh)
  // this.$router.push('/')
}
</script>

<template>
<!--  <div>-->
<!--    <input type="email" v-model="user.email" placeholder="email"/>-->
<!--    <input type="password" v-model="user.password" placeholder="password"/>-->
<!--    <button @click="loging">Login</button>-->
<!--  </div>-->

  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start" v-if="axios.get(user.name)">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Добро пожаловать на страницу входа!</h1>
        <p class="col-lg-10 fs-4">Для доступа к нашей платформе введите свой логин и пароль ниже.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" @click="loging">Sign up</button>
          <hr class="my-4">
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </div>
      </div>
    </div>
  </div>

</template>
