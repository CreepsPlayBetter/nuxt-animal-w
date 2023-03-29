<template>
    <footer class="the-footer">
        <v-container>
            <div class="flex-container">
                <NuxtLink to="/" class="logo">Animal W</NuxtLink>
                <div class="contact">
                    <b>Связь с нами:</b>
                    <p>Телефон: +7 (900) 000 00-00</p>
                    <p>Почта: animalw@support.ru</p>
                </div>
            </div>
        </v-container>
    </footer>
</template>

<style scoped lang="scss">
.the-footer {
    bottom: 0;
    width: 100%;
    background: rgb(251, 229, 214);
    transform: translateY(100%);
    position: absolute;
    box-sizing: border-box;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
}

.flex-container {
    display: flex;
    justify-content: space-between;

    .contact {
        text-align: end;
    }
}
</style>