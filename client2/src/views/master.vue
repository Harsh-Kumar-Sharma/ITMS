<template>
    <div>
        <div :class="`page-title d-flex flex-stack flex-wrap mb-5`">
            <h2 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                File & Master Current Transaction
            </h2>
        </div>

        <!--begin::Navs-->
        <div class="d-flex overflow-auto h-55px">
            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
                <!--begin::Nav item-->
                <li class="nav-item">
                    <router-link to="/master-table" class="nav-link text-active-primary me-6" active-class="active">
                        Master Transaction
                    </router-link>
                </li>
                <!--end::Nav item-->
                <!--begin::Nav item-->
                <li class="nav-item">
                    <router-link to="/file-table" class="nav-link text-active-primary me-6" active-class="active">
                        File Transaction
                    </router-link>
                </li>
                <!--end::Nav item-->
            </ul>
        </div>
        <!--begin::Navs-->
    </div>
    <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "widgets-tables",
    components: {},
});
</script>
  