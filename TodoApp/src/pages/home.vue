<script setup lang="ts">
import navbar from "../components/navbar.vue";
import { computed, onMounted } from "vue";
import { TodoStore } from "../store/store";

const todo_store = TodoStore();

onMounted(() => {
  todo_store.fetch_todos();
});

let Todo = computed(() => {
  return todo_store.getTodos;
});

function toEditPage(ID: string) {
  todo_store.GetTodoByID(ID);
}
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col items-center space-y-4 bg-emerald-400 "
  >
    <navbar />
    <div class="flex justify-center items-center py-6 font-mono text-3xl">
      <h2>ToDo List</h2>
    </div>
    <div class="w-full px-16 grid grid-cols-2 gap-6">
      <div
        v-for="item in Todo"
        :key="item.id"
        class="rounded-md transition-all  ease-linear flex flex-col p-4 items-center bg-indigo-300 shadow-2xl ring-4 ring-emerald-400 hover:scale-110 duration-500"
      >
        <h1>
          {{ item.id }}
        </h1>

        <h2>
          {{ item.todoItem }}
        </h2>

        <button
          class="px-8 py-1 rounded-md bg-indigo-500 text-white font-mono font-semibold "
          @click="toEditPage(item.id)"
        >
          Edit
        </button>
      </div>
    </div>
  </section>
</template>
