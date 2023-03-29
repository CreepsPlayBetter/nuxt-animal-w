<script setup>
const supabase = useSupabaseClient()

const products = ref()
onMounted(async () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const { data } = await supabase
        .from('products')
        .select()
        .in('id', cart)
    products.value = data
})

async function deleteToCard(id) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const index = cart.indexOf(id)
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))

    const { data } = await supabase
        .from('products')
        .select()
        .in('id', cart)
    products.value = data
}
</script>

<template>
    <v-container>
        <template v-if="!products">
            <div class="empty-cart">
                <h1>Ваша корзина пуста</h1>
                <div>
                    <v-button @click="navigateTo('/')">Вперёд за покупками!</v-button>
                </div>
            </div>
        </template>
        <div class="cart-list">
            <article v-for="product in products" class="cart-card">
                <NuxtImg class="img" :src="product.image"/>
                <div class="text-container">
                    <h2>{{ product.title }}</h2>
                    <p>{{ product.price }} руб</p>
                </div>
                <v-button @click="deleteToCard(product.id)">Удалить</v-button>
            </article>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.cart-list {
    gap: 20px;
    display: flex;
    flex-direction: column;

    .cart-card {
        gap: 20px;
        display: flex;
        padding: 10px;
        overflow: hidden;
        border-radius: 5px;
        border: 2px solid #000;
        background: rgb(251, 229, 214);
        align-items: flex-start;

        img {
            height: 160px;
            width: 160px;
            border-radius: 5px;
            border: 2px solid #000;
        }

        .text-container {
            margin-right: auto;
        }
    }
}

.empty-cart {
    gap: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        justify-content: center;
    }
}
</style>