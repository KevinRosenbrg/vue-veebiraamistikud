<template>
    <v-data-table :items="data_for_table" :headers="headers"></v-data-table>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        form_data: {
            type: Array,
            default: () => []
        },
    },
    setup(props) {
        const data_for_table = ref(props.form_data);

        const headers = [
            {title: 'First Name', value: 'name', sortable: true},
            {title: 'Second Name', value: 'surname', sortable: true}
        ];

        return {
            headers,
            data_for_table
        };
    }
}
</script>