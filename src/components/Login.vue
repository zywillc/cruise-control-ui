<template>
  <div class="message-wrapper" @click.self="$close()">
    <form class="message-content login confirm" @submit.prevent="submit">
      <div class="message-title">Login</div>
      <div class="message-text">
        <input class="md-textfield" type="text" placeholder="Username" v-model="username">
        <input class="md-textfield" :type="inputType" placeholder="Password" v-model="password">
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="show_pass" @click="togglePassword">
        <label class="custom-control-label" for="show_pass">show password</label>
      </div>
      <div class="buttons">
        <button class="md-button flat" type="button" @click="$close()">Cancel</button>
        <button class="md-button flat" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { messageBox } from '@/dialog'
  export default {
    data: () => ({
      username: '',
      password: '',
      inputType: 'password'
    }),
    methods: {
      submit () {
        const pw = process.env.CREDENTIALS_KCC_ADMIN_PW
        if (this.username.trim() === 'admin' && this.password.trim() === pw) {
          const messageBoxPromise = messageBox('😏 Welcome, ' + this.username)
          this.$close(messageBoxPromise.then(() => ({
            loggedIn: true
          })))
        } else {
          messageBox('❌ Please enter valid username and password')
        }
      },
      togglePassword () {
        this.inputType = this.inputType === 'password' ? 'text' : 'password'
      }
    }
  }
</script>

<style lang="less" scoped>
  .login .message-text {
      display: flex;
      flex-direction: column;
      input {
        width: auto;
        &:first-child {
          margin-bottom: 16px;
        }
      }
    }
  .confirm {
    padding-bottom: 16px;
  }
</style>
