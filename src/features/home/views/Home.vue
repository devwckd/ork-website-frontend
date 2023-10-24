<script setup lang="ts">
import {useUser} from "@/features/auth/stores/user.store";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()
const {name, email, role} = useUser();

const logout = () => {
  axios.get("http://localhost:8080/auth/logout", {withCredentials: true}).then(res => {
    router.go(0)
  })
}

</script>

<template>
  <div class="page">
    <div class="left">
      <div class="sidebar">
        <div class="sidebar-logo">
          <div class="square">
            <img id="logo" src="@/assets/logo_white.svg" alt="white logo">
          </div>
          <div class="square">
          </div>
        </div>
        <div class="sidebar-nav">
        </div>
        <div class="sidebar-copy">
          Copyright ORK.gg 2023
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #F7F7F7;
}

.left {
  flex: 0 0 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar {
  background: #05050B;
  width: calc(220px - (2 * 12px));
  height: calc(100vh - (2 * 12px));
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-logo {
  flex: 0 0 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-logo .square {
  flex: 0 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-logo .square #logo {
  width: 32px;
  height: 32px;
}

.sidebar-nav {
  flex: 1 1 1%;
}

.sidebar-copy {
  flex: 0 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #19191F;
  overflow: hidden;
  font-weight: 600;
  color: rgba(255, 255, 255, .40);
}
</style>