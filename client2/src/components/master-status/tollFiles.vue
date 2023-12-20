<template>
    <div class="row" :class="`page-title mb-3`">
        <div class="card">
            <div class="card-body">
                <Datatable :data="transactions" :header="fields" :enable-items-per-page-dropdown="true"
                    :checkbox-enabled="false">
                    <template v-slot:FILENAME="{ row: transaction }">
                        {{ transaction.FILENAME }}
                    </template>
                    <template v-slot:FILETYPE="{ row: transaction }">
                        {{ transaction.FILETYPE }}
                    </template>
                    <template v-slot:CREATIONTIME="{ row: transaction }">
                        {{ transaction.CREATIONTIME.replace(/(\.\d{3})?Z$/, '').replace('T', ' ') }}
                    </template>
                    <template v-slot:RECORDS="{ row: transaction }">
                        {{
                            transaction.RECORDS
                        }}
                    </template>
                    <template v-slot:F_STATUS="{ row: transaction }">
                        {{ transaction.F_STATUS }}
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
                    columnName: "File Name",
                    columnLabel: "FILENAME",
                    sortEnabled: true,
                    columnWidth: 145,
                },
                {
                    columnName: "File Type",
                    columnLabel: "FILETYPE",
                    columnWidth: 145,
                },
                {
                    columnName: "Time",
                    columnLabel: "CREATIONTIME",
                    columnWidth: 145,
                },
                {
                    columnName: "Records",
                    columnLabel: "RECORDS",
                    columnWidth: 145,
                },
                {
                    columnName: "Upload Status",
                    columnLabel: "F_STATUS",
                    columnWidth: 105,
                }
            ],
        };
    },
    mounted() {
        axios.get(`${BASE_URL}${API_ROUTES.admin_REPORT.GET_TOLL_FILE_STATUS}`).then((res) => {
            this.transactions = res.data.data
        })
    }
});
</script>
  