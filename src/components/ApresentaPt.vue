<template>
<div>
    <br>
    <p>Olá, me chamo Marlon e possuo o interesse de atuar como desenvolvedor de software. Além do que já conheço, tenho noção que há muito a que se aprender e estou disposto a este crescimento.</p>
    <p> Além disso, sei que o objetivo de toda a empresa é o sucesso e estou disposto a lutar para atingir os resultados esperados. </p>
    <p>Possuo espírito de equipe, resiliência, facilidade de aprendizado e compromisso com os desafios apresentados. Caso se interesse em saber mais sobre mim, acompanhe os meus projetos caseiros via GitHub. Desde já agradeço a oportunidade! </p>
    <div class="content">
                <h3>Apresentação em vídeo:</h3>
                <div class="videoFrame">
                    <iframe  class="videoItem" src="https://www.youtube.com/embed/Pt3iuEHc-tI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ApresentaPt"
}
</script>

<style scoped>
    p {
        padding: 0 3%;
        text-align: left;
    }
    .videoFrame{
    position: relative;
    overflow: hidden;
    padding-top: 81%;
}
.videoItem{
position: absolute;
top: 0;
left: 0;
width: 80%;
height: 60%;
border: 0;
margin-left: 10%;
margin-top: 5%;
}
</style>
