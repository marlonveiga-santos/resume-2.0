<template>
    <section class="PersonalData">
                <div class="pessoais">
               
                    <p>&#9993;  Endereço: <a href="https://www.google.com.br/maps/place/R.+Pedro+Fernandes+Arag%C3%A3o,+299,+S%C3%A3o+Paulo+-+SP/@-23.6875817,-46.6591496,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce454231aeba61:0xf0afc0677de7d875!8m2!3d-23.689681!4d-46.65854">Rua Pedro Fernandes Aragão, 299 Jd. Selma - São Paulo</a></p>
                    <p>&nbsp;CEP: 04431-160</p>
                    <p>&#128141; Solteiro</p>
                    <p>&nbsp;Nascido em: 28/04/1988</p>
                </div>
                <div class="contatos">
                <h3>Contatos:</h3>
                    <p> &#9742; Tel. Residencial: <a href="+51156110023">(11)5611-0023</a></p> 
                    <p> &#128241; Tel. Celular: <a href="tel:+5511964441033">(11)96444-1033</a></p>
                    <p> &#128231; Email: <a href="mailto:marlon_veiga@hotmail.com?Subject=Oportunidade%20de%20emprego" target="_top">marlon_veiga@hotmail.com</a></p>
                    <p> <a class="fab fa-facebook-f"></a> Facebook: <a href="https://www.facebook.com/marlonve">https://www.facebook.com/marlonve</a></p>
                    <p><a class="fab fa-linkedin-in"></a> Linkedin: <a href="https://www.linkedin.com/in/marlon-veiga-santos/">https://www.linkedin.com/in/marlon-veiga-santos/</a></p>
                    <p><a class="fab fa-github icon"></a> GitHub: <a href="https://github.com/marlonveiga-santos">https://github.com/marlonveiga-santos</a></p>
                    <p><a class="fab fa-wordpress-simple icon"></a>  Blog: <a href="https://bemcodar.wordpress.com">bemcodar.wordpress.com</a></p>
                </div>
            </section>
</template>

<script>
export default {
    name: "DataPt"
}
</script>

<style scoped>
.PersonalData {
    text-align: left;
    padding: 3%;
}
.fa-facebook-f {
    color: white;
    background-color: #3B5998; 
    padding: .5%;   
    text-decoration: none;
    border-radius: 25%;
    
  }
  .fa-linkedin-in {
    background: #007bb5;
    color: white;
    padding: .5%;
    text-decoration: none;
    border-radius: 25%;
  }
  .fa-github {    
    text-decoration: none;
  }
  .fa-wordpress-simple {    
    text-decoration: none;
    color: #3b5998;
  }

@media only screen and (max-width: 600px) {
  .fa-facebook-f {     
    padding: 1%;
  }
  .fa-linkedin-in {
      padding: 1%;
  }
}

</style>
