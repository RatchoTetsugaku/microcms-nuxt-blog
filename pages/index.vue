<template>
  <div class="container">
    <div>
      <h1 class="title">
        microCMS-Nuxt-Blog
      </h1>
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({}) {
    const { data } = await axios.get(
      "https://sparkling_water_test01.microcms.io/api/v1/blog",
      {
        headers: { "X-API-KEY": "0b74e5c9-9a5c-4ad6-a56b-b350d5baa7a7" }
      }
    );
    return data;
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
