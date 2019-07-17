<template>
    <div id="About">
        
         <div >
      <router-link to="/">Home</router-link>
          </div>
    <h3>About Page</h3>
    </div>
</template>

<script>
export default {
    name:"About"
}
</script>

<style scoped>
    h3 {
  background-color: lightgreen;
  margin-left: 30%;
  width: 40%;
}

@media only screen and (max-width: 600px) {
  h3 {
    background-color: lightblue;
    margin-left: 0;
    width: 100%;
  }
}
</style>
