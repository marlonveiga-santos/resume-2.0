<template>    
     <div id="page">
         <Header />
     <br>
      <router-link to="/" tag="button">Inicio</router-link>
      <router-link to="/home-en" tag="button" id="bt3">English Version</router-link>
      <router-link to="/home-en" tag="button" onclick="window.open('https://marlonveiga-santos.github.io/myResumee/pages/Curriculo%202019%20-%20English.pdf')" id="bt4"> Résumé - PDF</router-link>
      <br><br>
      <ul class="menu-sanfona">
    <li tabindex="0"><input type="checkbox" id="opt1"/> <label for="opt1"> <h3>Schoolarship:</h3></label>
        <ul>
            <FormationEn />
        </ul>
    </li>
    <li tabindex="1"><input type="checkbox" id="opt2"/> <label for="opt2"> <h3>Work Experiences:</h3></label>
        <ul>    
            <TrampoEn />         
        </ul>
    </li>
</ul>
<FooterEn />
    <br><br>
    </div>
    
</template>

<script>
import Header from '../components/Header'
import FormationEn from '../components/FormationEn'
import TrampoEn from '../components/TrampoEn'
import FooterEn from '../components/FooterEn'


export default {
    name: 'Home',
    components: {
    Header,
    FormationEn,
    TrampoEn,
    FooterEn
  }
}
</script>

<style scoped>
#page {
    width: 60%;
    margin-left:15%;
}
li {
    transition-duration: 1s;
}
*:focus {
    outline:none;
}
ul {
    list-style:none;
    padding:0;
    margin:0;
}
.menu-sanfona {
    border:1px solid #ccc;
    border-bottom:none;
    background:#eee;
}
.menu-sanfona span {
    padding:10px;
    display:block;
}
.menu-sanfona > li {
    border-bottom:1px solid #ccc;
}
.menu-sanfona li ul {
    background:#fff;
    border-top:1px solid #ccc;
    display:none;
    transition-duration: 1s;
}
#page input {
	display: none;
}

li:hover {
    background: silver;
}
#page input ~ ul {
    transition-duration: 1s;
}
#page input:checked ~ ul {
	display:block;
    transition-duration: 1s;
}
h3 {
    padding:1%;
    margin:0;
}
@media only screen and (max-width: 680px) {
  #page {
      width: 100%;
      margin:0;
  }
}

button{
    margin-right:1.5%;
    margin-top:1.5%;
    padding:.5%;
    color: #3b5998;
    border: 1px solid #3b5998;
    transition-duration: 1s;
}
button:hover {
    background: #3b5998;
    color:White;
    
}
#bt2{
    color: #ff8e2e;
    border: 1px solid #ff8e2e;
}
#bt2:hover {
    background: #ff8e2e;
    color:White;
}
#bt3{
    color: #26bc39;
    border: 1px solid #26bc39;
}
#bt3:hover {
    background: #26bc39;
    color:White;
}
#bt4{
    color: #ee2625;
    border: 1px solid #ee2625;
}
#bt4:hover {
    background: #ee2625;
    color:White;
    
}

</style>
