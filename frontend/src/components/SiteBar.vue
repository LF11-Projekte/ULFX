<script setup>
</script>

<template>
    <div class="sitebar" style="position: fixed;">
        <div style="margin-top: 50%;">
            <div class="textbar">
                <p> Beitrag <br> erstellen</p>
            </div>
            <div class="textbar">
                <p>Gespeicherte <br> Beiträge</p>
            </div>
            <div class="textbar">
                <p>Meine <br> Beiträge</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sitebar { 
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 100%;
    width: 23%;
    background-color: #e3dbed; 
    border-top-right-radius: 10px;  
}
.textbar {
    border: 2px solid black;
    border-radius: 10px;
    height: 1.5cm;
    font-size: 17px;
    margin: 0.25cm;
    text-align: center;
    padding-top: 5px;
}
</style>