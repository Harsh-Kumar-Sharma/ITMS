<template>
  <div>
    <div :class="`page-title d-flex flex-stack flex-wrap mb-5`">
      <h2 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
        Edit Lane Details
      </h2>
      <button type="button" class="btn btn-sm btn-danger align-items-end mt-2" @click="back">
        <i class="ki-duotone ki-left"> </i>Back
      </button>
    </div>
    <EditLane></EditLane>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditLane from "@/components/lanes/EditLane.vue";

export default defineComponent({
  name: "main-dashboard",
  components: { EditLane },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/lanes");
    },
  },
});
</script>
