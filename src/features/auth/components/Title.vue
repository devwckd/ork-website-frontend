<script setup lang="ts">
const { titleText, subTitleText } = defineProps<{
  titleText: String,
  subTitleText: String
}>()
</script>

<template>
  <div class="title">
    <div class="big">{{ titleText }}</div>
    <div class="small">{{ subTitleText }}</div>
  </div>
</template>

<style scoped lang="scss">
.title {
  margin: 32px 0;
  text-align: center;
}

.title .big {
  font-weight: 700!important;
  font-size: 2.5rem;
  color: #323232;
  margin-bottom: 8px;
}

.title .small {
  font-weight: 500;
  color: rgba(50,50,50,.75);
  font-size: 1.5rem;
}
</style>