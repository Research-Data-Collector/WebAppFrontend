<template>
  <v-container fluid>
    <div id="search-results-table">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Research ID</th>
            <th class="text-center">Research Title</th>
            <th class="text-center">Organization Name</th>
            <th class="text-center">Description</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody>
          <tr v-for="form in joinedResearches" :key="form.id">
            <td class="text-center">{{ form.formId }}</td>
            <td class="text-center">{{ form.title }}</td>
            <td class="text-center">{{ form.org }}</td>
            <td class="text-center">{{ form.description }}</td>
            <td class="text-center"><v-btn color="blue" @click="selectItem(form.formId)">View Research Form</v-btn></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>


  <v-container v-if="selectedItem" fluid>
    <v-card scrollable>
      <!-- {{ joinedResearches.find((form) => form.formId === selectedItem) }} -->
      
      <SurveyElement :form="joinedResearches.find((form) => form.formId === selectedItem)"></SurveyElement>
      
      <!-- <v-card-actions><v-btn @click="selectItem(null)">Close</v-btn></v-card-actions>
      <v-card-title>
        {{ joinedResearches.find((form) => form.formId === selectedItem).data.title }}
      </v-card-title> -->
      <!-- {{ joinedResearches.find((form) => form.formId === selectedItem).data.fields }} -->
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import { server } from '../../helper.js';
import SurveyElement from "../Research-Owner/SurveyElement.vue"

export default {

  components: {
    SurveyElement,
  },

  data() {
    return {
      joinedResearches: [],
      selectedItem: '',
    }
  },

  methods: {
    async load() {
      const data = {
        email: this.$store.getters.getSessionData.user.email,
      };
      const response = await axios.post(`${server.baseURL}/users/joinedforms`, data).then((response) => {
        this.joinedResearches = response.data;
        console.log(this.joinedResearches)
        return true;
      }).catch((error) => {
        console.log(error);
        alert(error.response);
      });
    },

    selectItem(formId) {
      this.selectedItem = formId;
    },

  },  

  created() {
    this.load();
  },


};
</script>

<style></style>