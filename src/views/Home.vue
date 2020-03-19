<template>
  <div class="container">
    Home
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/login'>Login</router-link></li>
      <li><router-link to='/Categories'>Categories</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
