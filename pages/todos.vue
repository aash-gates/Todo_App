<template>
    <v-container>
      <v-card>
        <v-card-title>Todos</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="todo in todos" :key="todo.id">
              <v-list-item-content>{{ todo.title }}</v-list-item-content>
              <v-list-item-action>
                <v-icon @click="deleteTodo(todo.id)">mdi-delete</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-form @submit.prevent="addTodo">
            <v-text-field v-model="newTodo" label="New Todo"></v-text-field>
            <v-btn type="submit" color="primary">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  <script>
  export default {
    data() {
      return {
        todos: [],
        newTodo: ''
      }
    },
    async asyncData({ $axios }) {
      const response = await $axios.$get('/api/todos')
      return {
        todos: response.data
      }
    },
    methods: {
      async addTodo() {
        try {
          await this.$axios.$post('/api/todos', { title: this.newTodo })
          this.todos.push({ title: this.newTodo })
          this.newTodo = ''
        } catch (error) {
          console.error(error)
        }
      },
      async deleteTodo(id) {
        try {
          await this.$axios.$delete(`/api/todos/${id}`)
          this.todos = this.todos.filter(todo => todo.id !== id)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  