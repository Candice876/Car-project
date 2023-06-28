<script setup lang="ts">
import navbar from "../components/navbar.vue";
import { ref, computed } from "vue";
import { TodoStore } from "../store/store";

const todo_store = TodoStore();

let todoItem = ref<string>("");

let check = computed(() => {
  if (todoItem.value === "") {
    return true;
  } else {
    return false;
  }
});

function AddTodo() {
  if (check.value === true) {
    alert("Error....");
  } else {
    todo_store.AddTodo(todoItem.value);
  }
}
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col items-center space-y-16 bg-emerald-400"
  >
    <navbar />
    <div class="flex font-mono text-3xl">Add New Task</div>

    <div
      class="rounded-md flex flex-col p-4 py-24 space-y-6 items-center bg-indigo-300 shadow-2xl ring-4 ring-emerald-400 w-[38rem] h-[18rem]"
    >
      <input
        v-model="todoItem"
        class="bg-indigo-100 px-4 py-1 rounded-md outline-none border-1 border-gray-400 w-[30rem] focus:ring focus:ring-indigo-500"
        type="text"
      />

      <button
        class="px-8 py-1 rounded-md bg-indigo-500 text-white font-mono font-semibold hover:scale-110 ease-in duration-300"
        @click="AddTodo()"
      >
        Add
      </button>
    </div>
  </section>
</template>
