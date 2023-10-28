<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { user } from '@/store.js';

const router = useRouter();
const loggedIn = computed(() => user.loggedInStatus);

const userLoggedIn = () => {
  router.push('/home');
};

const userLoggedOut = () => {
  router.push('/');
};
</script>

<template>
  <HeaderComponent @user-logged-in="userLoggedIn" @user-logged-out="userLoggedOut"/>
  <NavigationComponent v-if="loggedIn" @show-home="() => router.push('/home')" @show-about-me="() => router.push('/about-me')" />
  <router-view></router-view>
</template>


<script>
import { user } from '@/store.js';

export default {
  data() {
    return {
      user: user,
    };
  },
  computed: {
    loggedIn() {
      return this.user.loggedInStatus;
    },
  },
  methods: {
    userLoggedIn() {
      this.$router.push('/home');
    },
    userLoggedOut() {
      this.$router.push('/');
    },
  },
};
</script>

