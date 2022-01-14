<template>
  <div class="app">
    <JobList :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import JobList from "./components/JobList.vue";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { title: "Farm Worker", location: "Valley", salary: 30000, id: "1" },
      { title: "Quarryman", location: "Mountain", salary: 40000, id: "2" },
      { title: "flute player", location: "woods", salary: 30000, id: "3" },
      { title: "fisherman", location: "lake", salary: 15000, id: "4" },
      { title: "Prison Guard", location: "Valley", salary: 25000, id: "5" },
    ]);

    return { jobs };
  },
});
</script>

<style></style>
