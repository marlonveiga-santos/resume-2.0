<template>
  <div id="header">
    
    <img alt="Marlon's Photo" src="../assets/foto.jpg">
    <div id="nome">
      
      <h1>Marlon José da Veiga Santos</h1>
      <h3>Técnico de suporte &amp; desenvolvedor de sistemas</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Header"
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  display: flex;
  margin-left: 15%;
}
#nome {
  margin-left: 5%;
}

img{
     
    border-radius: 30%;
    box-shadow: 4px 4px 2px grey;
    height: auto;
    width: 25%;
}
@media only screen and (max-width: 680px) {
  #header {
  display: block;
  margin-left: 0;
  
}
  h3 {
    background-color: lightblue;
    margin-left: 0;
    width: 100%;
  }
  img{
     
    border-radius: 30%;
    box-shadow: 4px 4px 2px grey;
    height: auto;
    width: 35%;
}
}

</style>
