<script setup>
const supabase = useSupabaseClient()
const response = await supabase.from('products').select()
const products = response.data
</script>

<template>
    <v-container>
        <div class="catalog">
            <h1>Каталог</h1>
            <br>
            <div class="product-list">
                <article class="product-card" v-for="product in products" :key="product.id" @click="navigateTo(`/product-${product.id}`)">
                    <NuxtImg class="card-img" :src="product.image" :alt="product.title"/>
                    <div class="card-text">
                        <div class="card-title">{{ product.title }}</div>
                        <div class="card-price">{{ product.price }} руб</div>
                    </div>
                </article>
            </div>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.product-list {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .product-card {
        overflow: hidden;
        background: rgb(251, 229, 214);
        border: 2px solid #000;
        border-radius: 5px;
        cursor: pointer;

        .card-img {
            border-bottom: 2px solid #000;
            width: 100%;
            display: block;
        }

        .card-text {
            gap: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            text-align: center;

            .card-title {
                font-size: 1.1em;
                font-weight: 600;
            }
        }
    }
}
</style>