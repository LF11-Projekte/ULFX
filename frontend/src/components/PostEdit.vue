<script setup>
</script>

<template>
    <div class="box">
        <div class="fixed, editBar">
            <!-- Die Bearbeitungs-/textoptionen(Fett,Aufzählungen, Anhang,...)-->
        </div>
        <div class="text">
            <!--<input type="image; text">-->
            <p> Beitragsinhalt</p>
        </div>
        <div class="fixed">
        <RouterLink to="/" tag="li"><button type="button" class="button">SAVE</button></RouterLink>
        <RouterLink to="/" tag="li"><button type="button" class="button">ABBRECHEN</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>

.box{
    display: flex;
    flex-direction: column;
    height: 85%;
    width: 85%;
    border: 2px solid black;
    border-radius: 10px;
    margin: 15px;
    justify-content: center;
}
.text{
    height: 70%;
    margin: 15px;
    border: 2px solid black;
    border-radius: 10px;
}
.button{
    height: 1cm;
    width: 4cm;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #236ea7;
    border: 2px solid #236ea7;
    border-radius: 10px;
}
.fixed{
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}
.editBar{
    height: 10%; 
    border: 2px solid black; 
    margin-right: 15px; 
    margin-left: 15px;
    border-radius: 10px;
    
}
</style>