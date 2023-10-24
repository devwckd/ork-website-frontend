<script setup lang="ts">

defineProps<{
  label?: string
}>()

defineEmits<{
  (event: 'continue'): void
}>()



</script>

<template>
  <input type="submit" class="confirm" :value="label ?? 'Continue'" @click.prevent="$emit('continue')">
</template>

<style scoped lang="scss">
.confirm {
  border: none;
  width: 100%;
  text-align: center;
  padding: 16px 0;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 12px;
  cursor: pointer;
  margin: 32px 0 8px;
  font-weight: 600;
  //color: #1f2128;
  color: #FFFFFF;
  background: #4d69fa;
  transition: .125s ease-in-out;
}

.confirm:hover {
  background: #6880FB;
}
</style>