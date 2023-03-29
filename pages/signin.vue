<script setup>
const supabase = useSupabaseClient()

const user = reactive({
    email: '',
    password: ''
})

async function submit() {
    const { error, data } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
    })

    if (!error) {
        console.log(data)
        navigateTo('/')
    } else {
        console.log(error)
    }
}
</script>

<template>
    <v-container>
        <div class="flex-container">
            <form class="auth-form" @submit.prevent="submit()">
                <div class="form-title">Вход</div>
                <input v-model="user.email" type="email" placeholder="Почта">
                <input v-model="user.password" type="password" placeholder="Пароль">
                <v-button type="submit">Войти</v-button>                
            </form>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.flex-container {
    display: flex;
    justify-content: center;
}

.auth-form {
    width: 300px;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    .form-title {
        text-align: center;
        font-weight: 600;
        font-size: 1.2em;
    }

    input {
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        font-size: inherit;
        padding: 0.4em;
        border: 2px solid #000;
        border-radius: 5px;
        background: #fff;
    }
}
</style>