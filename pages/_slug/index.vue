<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://sparkling_water_test01.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { "X-API-KEY": "0b74e5c9-9a5c-4ad6-a56b-b350d5baa7a7" }
      }
    );
    return data;
  }
};
</script>