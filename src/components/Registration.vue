<template>
  <div class="container row">
    <div class="col-md-6 col-sm-6 col-xs-12">
      <h2 class="ui-title-3">Join us</h2>
      <button class="button button--round button-primary" type="submit">Sign up with Google</button>
      <span class="divider">Or</span>
      <form @submit.prevent="submit">
        <div class="form-group" :class="{ 'errorInput': $v.email.$error }">
          <label for="emailField">Email</label>
          <input 
            id="emailField"
            type="email"
            placeholder="Email"
            v-model="email"
            :class="{ 'error': $v.email.$error }"
            @change="$v.email.$touch()">
          <div class="error" v-if="!$v.email.required">Field is required</div>
          <div class="error" v-if="!$v.email.email">Email is not correct</div>
        </div>
        <div class="form-group" :class="{ 'errorInput': $v.password.$error }">
          <label for="passwordField">Password</label>
          <input 
            id="passwordField"
            type="password"
            placeholder="6+ characters"
            v-model="password"
            :class="{ 'error': $v.password.$error }"
            @change="$v.password.$touch()">
          <div class="error" v-if="!$v.password.required">Password is required.</div>
          <div class="error" v-if="!$v.password.minLength">Password must have at least 6 letters.</div>
        </div>
        <div class="form-group" :class="{ 'errorInput': $v.repeatPassword.$error }">
          <input 
            type="password" 
            placeholder="Repeat your Password" 
            v-model="repeatPassword"
            :class="{ 'error': $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()">
          <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
        </div>
        <button class="button button--round button-danger" 
          type="submit" 
          :disabled="submitStatus === 'PENDING'">Create Account
        </button>
        <div class="ui-block-info">
          <p class="ui-info ui-info--success" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
          <p class="ui-info ui-info--danger" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
          <p class="ui-info ui-info--primary" v-if="submitStatus === 'PENDING'">Sending...</p>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  .error {
    display: none;
    margin-bottom: 8px;
    font-size: 12px;
    color: #fc5c65;
  }
  &.errorInput {
    .error {
      display: block;
    }
  }
}
input {
  &.error {
    border-color: #fc5c65;
    animation: shake 1s;
  }
}
</style>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/dist/validators.min.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
        // this.submitStatus = 'PENDING'
        // setTimeout(() => {
        //   this.submitStatus = 'OK'
        // }, 500)
      }
    }
  }
}
</script>