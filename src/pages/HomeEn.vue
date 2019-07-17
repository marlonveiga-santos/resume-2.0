<template>    
     <div id="page">
     <HeaderEn />
     <br>
      <router-link to="/scholarship-experience" tag="button"> Schoolarship &amp; Experiences</router-link>
      <router-link to="/" tag="button" id="bt3">Versão em Português</router-link>
      <router-link to="/home-en" tag="button" onclick="window.open('https://marlonveiga-santos.github.io/myResumee/pages/Curriculo%202019%20-%20English.pdf')" id="bt4"> Resumée- PDF</router-link>
      <br><br>
      <ul class="menu-sanfona">
    <li tabindex="0"><input type="checkbox" id="opt1"/> <label for="opt1"> <h3>Personal Data:</h3></label>
        <ul>
            <DataEn />
        </ul>
    </li>
    <li tabindex="1"><input type="checkbox" id="opt2"/> <label for="opt2"> <h3>Introduction:</h3></label>
        <ul>    
            <ApresentaEn />         
        </ul>
    </li>
    <li tabindex="2"><input type="checkbox" id="opt3"/> <label for="opt3"> <h3>Hobbies</h3></label>
       <ul>
          <HobbiesEn />
       </ul>
    </li>
</ul>
    <FooterEn />
    <br><br>
    </div>
    
</template>

<script>
import HeaderEn from '../components/HeaderEn'
import DataEn from '../components/DataEn'
import ApresentaEn from '../components/ApresentaEn'
import HobbiesEn from '../components/HobbiesEn'
import FooterEn from '../components/FooterEn'


export default {
    name: 'HomeEn',
    components: {
    HeaderEn,
    DataEn,
    ApresentaEn,
    HobbiesEn,
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
