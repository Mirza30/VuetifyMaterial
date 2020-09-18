<template>
  <div id="app">
    <router-view />
    <!-- <div id="nav">
      <router-link
        v-if="authenticated"
        to="/login"
        replace
        @click.native="logout()"
      >
        Logout
      </router-link>
    </div> -->
    <!-- <router-view @authenticated="setAuthenticated" /> -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        authenticated: false,
        mockAccount: {
          username: '',
          password: '',
        },
      }
    },
    mounted () {
      if (!this.authenticated) {
        this.$router.replace({ name: 'login' })
      }
    },
    methods: {
      setAuthenticated (status) {
        this.authenticated = status
      },
      logout () {
        this.authenticated = false
      },
    },
  }
</script>
