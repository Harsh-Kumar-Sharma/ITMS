<template>
    <div class="row" :class="`page-title mb-3`">
        <div class="card">
            <div class="card-body">
                <Datatable :data="transactions" :header="fields" :enable-items-per-page-dropdown="true"
                    :checkbox-enabled="false">
                    <template v-slot:LANE_TRANS_ID="{ row: transaction }">
                        {{ transaction.LANE_TRANS_ID }}
                    </template>
                    <template v-slot:ENTRY_LANE_ID="{ row: transaction }">
                        {{ transaction.ENTRY_LANE_ID }}
                    </template>
                    <template v-slot:TAG="{ row: transaction }">
                        {{ transaction.TAG }}
                    </template>
                    <template v-slot:VEH_PLATE="{ row: transaction }">
                        {{ transaction.VEH_PLATE }}
                    </template>
                    <template v-slot:ENTRY_AVC_CLASS="{ row: transaction }">
                        {{
                            transaction.ENTRY_AVC_CLASS
                        }}
                    </template>
                    <template v-slot:ENTRY_PASSAGE_TIME="{ row: transaction }">
                        {{ transaction.ENTRY_PASSAGE_TIME.replace(/(\.\d{3})?Z$/, '').replace('T', ' ') }}
                    </template>
                    <template v-slot:API_TRANS_STATUS="{ row: transaction }">
                        {{ transaction.API_TRANS_STATUS }}
                    </template>
                </Datatable>
                <!--end::Table container-->
            </div>
            <!--begin::Body-->
        </div>
        <!--end::Tables Widget 11-->
    </div>
</template>
  
<script>
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { BASE_URL, API_ROUTES } from "@/constants/Config";
import axios from "axios";
export default defineComponent({
    name: "kt-widget-11",
    components: {
        Datatable
    },


    data() {
        return {
            transactions: [],
            fields: [
                {
                    columnName: " Transaction ID",
                    columnLabel: "LANE_TRANS_ID",
                    sortEnabled: true,
                    columnWidth: 145,
                },
                {
                    columnName: "LANE",
                    columnLabel: "ENTRY_LANE_ID",
                    columnWidth: 145,
                },
                {
                    columnName: "FASTag",
                    columnLabel: "TAG",
                    columnWidth: 145,
                },
                {
                    columnName: "Vehicle Plate",
                    columnLabel: "VEH_PLATE",
                    columnWidth: 145,
                },
                {
                    columnName: "Vehicle Class",
                    columnLabel: "ENTRY_AVC_CLASS",
                    columnWidth: 145,
                },
                {
                    columnName: "PASSAGE TIME",
                    columnLabel: "ENTRY_PASSAGE_TIME",
                    columnWidth: 105,
                },
                {
                    columnName: "STATUS",
                    columnLabel: "API_TRANS_STATUS",
                    columnWidth: 105,
                }
            ],
        };
    },
    mounted() {
        axios.get(`${BASE_URL}${API_ROUTES.admin_REPORT.GET_MASTER_TOP_DATA}`).then((res) => {
            this.transactions = res.data.data
        })
    }
});
</script>
  