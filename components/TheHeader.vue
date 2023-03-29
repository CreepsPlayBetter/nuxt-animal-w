<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
console.log('TheHeaderUser:', user.value)
</script>

<template>
    <header class="the-header">
        <v-container>
            <div class="flex-container">
                <div class="auth-buttons">
                    <template v-if="!user">
                        <NuxtLink to="/signin">Вход</NuxtLink>
                        <NuxtLink to="/signup">Регистрация</NuxtLink>
                    </template>
                    <NuxtLink v-else @click="supabase.auth.signOut()" class="signout-button">Выход</NuxtLink>
                </div>
                <NuxtLink to="/" class="logo">Animal W</NuxtLink>
                <div class="buttons">
                    <!-- <v-button v-if="user" @click="navigateTo('/cart')">
                        Профиль
                    </v-button> -->
                    <v-button @click="navigateTo('/cart')">
                        Корзина
                    </v-button>
                </div>
            </div>
        </v-container>
    </header>
</template>

<style scoped lang="scss">
.the-header {
    background: rgb(251, 229, 214);
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
}

.buttons {
    gap: 10px;
    display: flex;
}

.flex-container {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
}

.auth-buttons {
    gap: 8px;
    display: flex;
    flex-direction: column;

    .signout-button {
        cursor: pointer;
    }
}
</style>