<script setup>
const route = useRoute()
const supabase = useSupabaseClient()

const id = route.params.id
const response = await supabase.from('products').select().eq('id', id)
const product = response.data[0]

function addToCard(id) {
    const cart = localStorage.getItem('cart')
    if (cart) {
        const arr = JSON.parse(cart)
        arr.push(id)
        localStorage.setItem('cart', JSON.stringify(arr))
    } else {
        localStorage.setItem('cart', JSON.stringify([id]))
    }
}
</script>

<template>
    <v-container>
        <div class="flex-container">
            <NuxtImg class="img" :src="product.image"/>
            <div class="text-container">
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <p>{{ product.price }} руб</p>
                <v-button @click="addToCard(product.id)">В Корзину</v-button>
            </div>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.flex-container {
    gap: 40px;
    display: flex;

    img {
        width: 40%;
        height: 100%;
        border: 2px solid #000;
        border-radius: 5px;
    }

    .text-container {
        gap: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>