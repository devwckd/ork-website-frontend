<script setup lang="ts">
  import type {Ref} from "vue";

  defineProps<{
    name?: string
    placeholder?: string
    type?: string
    modelValue?: string
    error?: string | undefined
  }>()

  defineEmits<{
    (event: 'update:modelValue'): void
  }>()

</script>

<template>
  <div>
    <div class="error-cause" v-if="error">{{ error }}</div>
    <input :name="name" :class="{error: error}" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style scoped lang="scss">
.error-cause {
  color: red;
  padding: 0 4px 4px;
  text-transform: lowercase;
  font-size: 12px;
  font-weight: 600;
  white-space: initial;
  word-wrap: break-word;
}

input {
  display: block;
  width: calc(100% - 24px);
  border: none;
  background: #F8F9FA;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.075);
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: .125s ease-in-out;
}

input.error {
  outline: rgba(250, 77, 103, 0.3) 3px solid !important;
}

input.error:focus {
  outline: rgba(250, 77, 103, 0.6) 3px solid !important;
}

input::placeholder {
  font-weight: 600;
  color: rgba(50, 50, 50, .6);
  font-family: 'Poppins', sans-serif;
}

input:focus {
  border: none;
  outline: rgba(77, 105, 250, 0.3) 3px solid;
}
</style>