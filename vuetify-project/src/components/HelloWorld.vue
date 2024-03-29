<template>
<h1 class="heading">{{ message }}</h1>

  <form @submit.prevent="onSave">
    <v-text-field label="Name" v-model="fullnameForm.name"></v-text-field>
    <v-text-field label="Surname" v-model="fullnameForm.surname"></v-text-field>

    <v-btn type="submit">Submit</v-btn>
  </form>
  <span v-if="fullnameList.length > 0">
    <br>
      <DataTable :form_data="fullnameList"></DataTable>
    <br>
  </span>
  <!-- <span v-else>NOT LIST</span> -->
  
  <PrimaryButton>PRESS ME</PrimaryButton>
  <PrimaryButton>DO NOT PRESS ME</PrimaryButton>

  <span>
    <ul>
      <li v-for="fullname in fullnameList">{{ fullname.name + " " + fullname.surname }}</li>
    </ul>
  </span>
</template>

<script>
import { ref } from 'vue';
import DataTable from './DataTable.vue';
import PrimaryButton from './PrimaryButton.vue';

export default {
  setup() {
    const message = ref('form');
    const name = ref('');
    const surname = ref('');

    const fullnameForm = ref({});
    const fullnameList = ref([]);

    function onSave() {
      console.log('form data saved')
      const newFullname = { name: fullnameForm.value.name, surname: fullnameForm.value.surname };
      fullnameList.value.push(newFullname);
    }

    return {
      message,
      onSave,
      name,
      surname,
      fullnameForm,
      fullnameList,
    };
  }
}
</script>

<style scoped>
.heading {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
