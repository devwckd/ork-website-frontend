<script setup lang="ts">
import Title from './Title.vue';
import AuthInput from "@/features/auth/components/AuthInput.vue";
import {ref} from "vue";
import AuthContinue from "@/features/auth/components/AuthContinue.vue";
import {useI18n} from "vue-i18n";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()
const {t} = useI18n()

const email = ref("")
const password = ref("")

const emailError = ref<string | undefined>(undefined)
const passwordError = ref<string | undefined>(undefined)

const signIn = () => {
  emailError.value = undefined;
  passwordError.value = undefined;

  let valid = true;

  if (email.value.trim().length < 5) {
    emailError.value = t("auth.signIn.error.invalidEmail")
    valid = false;
  }

  if (password.value.trim().length < 8) {
    passwordError.value = t("auth.signIn.error.invalidPassword")
    valid = false;
  }

  if (!valid) return

  axios.post("http://localhost:8080/auth/login", {
    email: email.value,
    password: password.value
  }, {
    withCredentials: true
  }).then(res => {
    console.log(res)
      router.go(0)
  }).catch(err => console.log(err))
}

</script>

<template>
  <Title :title-text="t('auth.signIn.title')" :sub-title-text="t('auth.signIn.subTitle')"/>

  <form>
    <AuthInput v-model="email" :error="emailError" name="email" :placeholder="t('auth.label.email')" type="text"/>
    <AuthInput v-model="password" :error="passwordError" name="password" :placeholder="t('auth.label.password')"
               type="password"/>

    <AuthContinue @continue="signIn" :label="t('auth.signIn.continue')"/>
  </form>
</template>

<style lang="scss">

</style>