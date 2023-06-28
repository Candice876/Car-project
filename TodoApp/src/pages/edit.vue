<script setup lang="ts">
import navbar from "../components/navbar.vue";
import { TodoStore } from "../store/store";
import { computed, ref } from "vue";

const todo_store = TodoStore();
let todo = computed(() => {
  return todo_store.getTodo;
});

let _todo = ref(todo.value);

let check = computed(() => {
  if (_todo.value.todoItem === "") {
    return true;
  } else {
    return false;
  }
});

function upadate() {
  if (check.value === true) {
    alert("error.......");
  } else {
    todo_store.Edit_Todo(_todo.value);
  }
}
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col items-center bg-emerald-400 space-y-14"
  >
    <navbar />

    <div class="flex font-mono text-3xl">Edit Task</div>
    <div
      class="rounded-md flex flex-col p-4 py-20 space-y-6 items-center bg-indigo-300 shadow-2xl ring-4 ring-emerald-400 w-[38rem] h-[20rem]"
    >
      <h1>
        {{ _todo.id }}
      </h1>

      <input
        class="py-1 rounded-md outline-none px-2 border-1 border-gray-400 w-full bg-gray-200 focus:ring focus:ring-indigo-500"
        v-model="_todo.todoItem"
        type="text"
      />

      <div class="flex justify-between w-[20rem] space-x-2">
        <button
          class="px-8 py-1 rounded-md bg-indigo-500 text-white font-mono font-semibold hover:scale-110 ease-in duration-300"
          @click="upadate()"
        >
          Update
        </button>

        <button
          class="px-8 py-1 rounded-md bg-indigo-500 text-white font-mono font-semibold hover:scale-110 ease-in duration-300"
          @click="todo_store.DeleteTodo(_todo.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </section>
</template>
