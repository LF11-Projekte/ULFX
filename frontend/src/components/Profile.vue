<script setup>
</script>

<template>
    <div style="display: flex; flex-direction: row;">
        <div style="margin: auto"/>
        <div style="display: flex; flex-direction: column; justify-content: center; margin-top: 20px; align-items: center;">
            <div>    
                <img src="../assets/change.png" style="border-radius:50%; border: 2px solid black; height: 120px; width: 120px; align-items: center; ">
            </div>
            <div style="font-size: large; margin: 25px;">
                Name: <br>
                Klasse: <br>
                Benutzername: <br>
                <E-Mail>Emailadresse: beispiel@schule.de</E-Mail><br>
                Passwort: <!-- nur als Punkte-->
            </div> 
            <div style="display:flex; flex-direction: row; margin: 0; font-size: large; width: 100%">
                <button type="button" style="height: 1cm; margin-right: auto"> Bearbeiten </button>
                <button type="button" style="height: 1cm; margin-left: auto"> Abmelden </button> <!--Link zur Anmeldeseite-->
            </div>  
        </div>
        <div style="margin: auto"/>
    </div>
</template>
    
<style scoped>

</style>