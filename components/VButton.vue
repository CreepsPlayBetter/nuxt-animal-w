<template>
    <button class="v-button">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.v-button {
    display: flex;
    cursor: pointer;
    color: #000;
    font-size: inherit;
    background: #fff;
    align-items: center;
    justify-content: center;
    padding: .6em 1.2em;
    box-sizing: border-box;
    border: 2px solid #000;
    text-decoration: none;
    border-radius: 5px;
}
</style>