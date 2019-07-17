<template>
<div>
    <p>Hello, my name is Marlon and I have grat interest to work like software developer.</p>
    <p> I have many knowledge in softwares and tools, but, despite this, I have notion that I have too much to learn and I'm willing to grow doing it!</p>
    <p>Obviously I know that the goal of the whole company is success and I am willing to strive to achieve the expected results.</p>
    <p>I have team spirit, resilience, fast learning curve and compromise to solve the showing challenges. In case of know more about me, follow my personal projects on GitHub or my social networks.</p>
    <p>From now thank you! </p>
    <div class="content">
                <h3>Video Presentation:</h3>
                <div class="videoFrame">
                    <iframe  class="videoItem" src="https://www.youtube.com/embed/f-MNDDw0lKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ApresentaEn"
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
