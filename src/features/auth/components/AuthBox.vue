<script lang="ts">

</script>

<template>
  <section>
    <div class="auth-card">
      <slot/>
    </div>
    <div class="deco-1"></div>
    <div class="deco-2"></div>
  </section>
</template>

<style scoped lang="scss">

section {
  position: relative;
}

.auth-card {
  background: #FFFFFF;
  padding: 24px;
  border-radius: 24px;
}

.deco-1 {
  width: 90%;
  height: 16px;
  background: rgba(200, 200, 200, .4);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
}

.deco-2 {
  width: 80%;
  height: 12px;
  background: rgba(200, 200, 200, .2);
  position: absolute;
  left: 0;
  bottom: -28px;
  right: 0;
  margin: 0 auto;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
}
</style>