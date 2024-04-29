<script setup>
</script>

<template>
    <div class="box">
        <div class="fixed">
            <a href="../views/EditPost.vue"><img src="../assets/change.png" style="height: 0.7cm;"></a>
            <p> Erstellungsdatum/Hochgeladen am DD.MM.YYYY</p>
        </div>
        <div style="display: flex; flex-direction: column; margin: 10px; font-size: 10px;">
            <p style="margin-bottom: 10px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nihil aperiam a blanditiis nulla exercitationem veritatis nobis debitis molestias accusantium? Consectetur saepe ratione, corrupti sit provident asperiores consequuntur expedita tenetur esse? Numquam explicabo incidunt dolorem reiciendis magnam illum ipsa, temporibus dolor deserunt quibusdam fugiat eos expedita atque aperiam cupiditate autem vel modi nam consequatur labore non accusantium facilis aliquid dolore? Nobis iure dignissimos, reiciendis consequatur explicabo fugiat, quisquam molestias aspernatur esse ducimus, magni repellat necessitatibus error. Quidem accusamus dolore vel, necessitatibus sequi, minima amet quam distinctio deleniti est quae, facilis laudantium non corrupti? Nulla, cumque? Sint labore consequatur nostrum magnam.cumque et cum laudantium eos facilis suscipit error? ipsum dolor sit, amet consectetur adipisicing elit. Aperiam vitae quia fugit error odit aliquid magnam officia dolorem a ut eligendi quidem reprehenderit praesentium, pariatur voluptates nemo veritatis! Neque, deserunt! <br>Hier könnte ihr kreativer Beitragstext stehen oder ein weiterführender Link <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est quae fugiat distinctio sed iste eaque moll quae fugiat distinctio sed iste eaque moll quae fugiat distinctio sed </p>
            <!-- Zeichen begrenzen oder Höhe des Beitrags jedes mal berechnen lass -->
            <img src="../assets/example.jpg" style="display: block; width: fit-content; margin: 0 auto;">
        </div>
        <div class="fixed">
            <p style="width: 30%;"> Benutzername des Verfassers</p>
            <div style="justify-content: center; width: 30%;">
            <a href="../App.vue/"><img src="../assets/comment.png" style="height: 1cm; "></a>
            </div>
            <img src="../assets/saved.png" style="height: 0.6cm;">
        </div>   
    </div>
</template>

<style scoped>
.fixed{
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.box {
    display: flex;
    flex-direction: column;
    font-family: Verdana;
    font-size: 10px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 15px;
    width: auto;
}
</style>