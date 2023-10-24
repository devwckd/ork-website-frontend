<script setup lang="ts">

import Title from "@/features/auth/components/Title.vue";
import AuthInput from "@/features/auth/components/AuthInput.vue";
import AuthContinue from "@/features/auth/components/AuthContinue.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import axios, {AxiosError, HttpStatusCode} from "axios";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const {t} = useI18n()

const name = ref<string>("")
const email = ref<string>("")
const password = ref<string>("")
const passwordConfirmation = ref<string>("")

const nameError = ref<string | undefined>(undefined)
const emailError = ref<string | undefined>(undefined)
const passwordError = ref<string | undefined>(undefined)
const passwordConfirmationError = ref<string | undefined>(undefined)

const register = () => {
  nameError.value = undefined;
  emailError.value = undefined;
  passwordError.value = undefined;
  passwordConfirmationError.value = undefined;

  let valid = true;

  if (name.value.trim().length < 2) {
    nameError.value = t("auth.signUp.error.invalidNameLength");
    valid = false;
  }

  if (email.value.trim().length < 5) {
    emailError.value = t("auth.signUp.error.invalidEmail")
    valid = false;
  }

  if (password.value.length < 8) {
    passwordError.value = t("auth.signUp.error.weakPassword")
    valid = false;
  }

  if (passwordConfirmation.value != password.value || passwordConfirmation.value.trim().length < 1) {
    passwordConfirmationError.value = t("auth.signUp.error.passwordsMustMatch")
    valid = false;
  }

  if (!valid) return;

  axios.post("http://localhost:8080/auth/register", {
    name: name.value,
    email: email.value,
    password: password.value
  }, {
    withCredentials: true
  }).catch((err: AxiosError) => {
    if(err.response) {
      if (err.response.status == HttpStatusCode.Conflict.valueOf()) {
        emailError.value = t("auth.signUp.error.emailAlreadyInUse")
        return;
      }

      if (err.response.status == HttpStatusCode.BadRequest.valueOf()) {
        let message = (err.response.data as Object)["message"]
        if ("name" in message) {
          nameError.value = t(`auth.signUp.error.${message.name[0].message}`)
        }

        if ("email" in message) {
          emailError.value = t(`auth.signUp.error.${message.email[0].message}`)
        }

        if ("password" in message) {
          passwordError.value = t(`auth.signUp.error.${message.password[0].message}`)
        }
      }
    }
  }).then(res => {
    router.go(0)
  })
}

</script>

<template>
  <Title :title-text="t('auth.signUp.title')" :sub-title-text="t('auth.signUp.subTitle')"/>

  <form>
    <AuthInput v-model="name" :error="nameError" name="name" :placeholder="t('auth.label.name')" type="text"/>
    <AuthInput v-model="email" :error="emailError" name="email" :placeholder="t('auth.label.email')" type="text"/>
    <AuthInput v-model="password" :error="passwordError" name="password" :placeholder="t('auth.label.password')"
               type="password"/>
    <AuthInput v-model="passwordConfirmation" :error="passwordConfirmationError" name="password-confirmation"
               :placeholder="t('auth.label.passwordConfirmation')" type="password"/>

    <AuthContinue :label="t('auth.signUp.continue')" @continue="register"/>
  </form>
</template>

<style lang="scss">
</style>