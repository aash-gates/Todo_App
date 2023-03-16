<template>
    <v-container>
      <v-card>
        <v-card-title>Register</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="register">
            <v-text-field v-model="form.name" label="Name"></v-text-field>
            <v-text-field v-model="form.email" label="Email"></v-text-field>
            <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
            <v-btn type="submit" color="primary">Register</v-btn>
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
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async register() {
        try {
          await this.$axios.$post('/api/register', this.form)
          await this.$auth.loginWith('local', { data: this.form })
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  