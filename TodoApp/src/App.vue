<script setup lang="ts">
</script>

<template>
    <router-view v-slot="{Component}">
        <component
         v-motion-fade
         class="transition-all ease-in-out duration-700"
         :is="Component"
        />
    </router-view>
</template>


