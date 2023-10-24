<script setup lang="ts">
import {ref} from "vue";
import AuthBox from '../components/AuthBox.vue';
import TheSignIn from "../components/TheSignIn.vue";
import TheSignUp from "../components/TheSignUp.vue";
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()
const {t} = useI18n()


const isSignUpFromRoute = (): boolean => {
  if("signUp" in route.query) {
    // router.replace({ query: null })
    return true
  }

  return false
}

const isSignUp = ref(isSignUpFromRoute())



</script>

<template>
  <div class="container">
    <AuthBox>

      <div class="logo">
        <img src="@/assets/logo.svg" class="logo" draggable="false"/>
      </div>

      <div class="nav">
        <div class="space"></div>
        <div class="button" :class="{active: !isSignUp}" @click="isSignUp = false">{{ t('auth.signIn.button') }}</div>
        <div class="button" :class="{active: isSignUp}" @click="isSignUp = true">{{ t('auth.signUp.button') }}</div>
        <div class="space"></div>
      </div>

      <template v-if="isSignUp">
        <TheSignUp/>
      </template>
      <template v-else>
        <TheSignIn/>
      </template>

    </AuthBox>
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #1F2128;
  justify-content: center;
  align-items: center;
}

.logo {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  margin: 1rem 0 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 80px;
  height: auto;
}

.container .nav {
  width: 100%;
  background: #E9E9EA;
  display: flex;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

.container .nav .space {
  width: 12px;
}

.container .nav .button {
  font-size: 1.25rem;
  padding: 12px 48px;
  border-radius: 12px;
  margin: 13px 10px;
  cursor: pointer;
  transition: .125s ease-in-out;
}

.container .nav .button:hover {
  background: #1f2128;
  color: white;
  box-shadow: rgba(50, 50, 50, .125) 3px 3px 5px;
}

.container .nav .button.active {
  background: #1f2128;
  color: white;
  box-shadow: rgba(50, 50, 50, .125) 3px 3px 5px;
}

.container .nav .button.active:hover {
  background: #414248;
  color: white;
}

</style>