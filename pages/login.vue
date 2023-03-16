<template>
    <v-container>
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="form.email" label="Email"></v-text-field>
            <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', { data: this.form })
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  