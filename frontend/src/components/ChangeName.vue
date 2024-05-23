<script>
</script>

<template>
    <div style="display: flex; flex-direction: column; font-size: large; padding: 10px; border-radius: 8px; position: fixed; top: 50%; left:50%; transform: translate(-50%, -50%); background-color: white; border: 1px solid rgb(100,100,100);">
        
            <div style="margin: 10px;">
                Willst Du Deinen Benutzernamen anpassen?
            </div>
            <div>
                <input type="text" style="margin: 10px auto; display: flex; align-items: center; justify-content: center; width: 300px; line-height: 20px;" placeholder="Benutzername...">
                <!-- bei Vergrößerung verschwindet der obere Rand des Input Feldes-->
                <div style="display:flex; flex- direction: row; margin: 0; font-size: large; width: 100%;">
                    <button type="button" style="height: 35px; margin-right: auto; margin-left: 59px;"> Bearbeiten </button>
                    <RouterLink to="/" tag="li"><button type="button" style="height: 35px; margin-left: auto; margin-right: 59px;"> Abbrechen </button></RouterLink>
                     <!--Link zur Anmeldeseite-->
                </div>  
            </div>
    </div>

</template>

<style scoped>
</style>