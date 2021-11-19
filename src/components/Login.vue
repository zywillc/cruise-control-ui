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

form {
    padding: 0 32px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
}

.message-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(12, 12, 12, 0.33);
}

.message-text {
    margin: 16px 0;
    font-size: 14px;
    text-align: left;
}

.md-textfield {
    height: 36px;
    padding: 16px 0 8px 0;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
    color: #1b1a1a;
    width: 350px;

    &:focus {
      padding-bottom: 20px;
      border-bottom: 2px solid #2196F3;
    }
}

.buttons {
    display: flex;
    justify-content: flex-end;
}

button, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    outline: 0;
    font-size: 14px;
    font-family: inherit;
}

.md-button {
    height: 36px;
    padding: 0 16px;
    border: 0;
    border-radius: 2px;
    flex-shrink: 0;
    text-transform: uppercase;
    color: white;
    background-color: #2196F3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.33);
    transition: 0.33s ease;

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.33);
    }

    &:active {
      background-color: #1976D2;
    }

    &.flat {
      color: #2196F3;
      background-color: transparent;
      box-shadow: none;

      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
}

.message-title {
  font-size: 16px;
  font-weight: bold;
}
.message-content {
  padding: 32px;
  border-radius: 2px;
  margin: 0 16px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.33);
  display: block;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.33s;
  }

.fade-enter, .fade-leave-active {
    opacity: 1;
}
</style>
