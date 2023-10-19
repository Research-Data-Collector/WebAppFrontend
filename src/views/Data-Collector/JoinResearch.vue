<template>
  <div>
    <v-container fluid>

      <v-container>
        <div id="search">
          <h1>Join Researches</h1>
          <!-- Integrate a search -->
          <v-menu>
            <template v-slot:activator>
              <v-select v-model="selectedItem" :items="dropdownItems" label="Search by" style="width: 200px"></v-select>
            </template>
          </v-menu>
        </div>
      </v-container>

      <v-container class="d-flex align-center justify-center" v-if="selectedItem">
        <div id="search-popup">
          <v-text-field style="width: 350px;" :label="`Search by ${selectedItem}`"></v-text-field>
          <v-btn color="primary" dark @click="search">Search</v-btn>
        </div>

      </v-container>

      <v-container fluid>
        <div id="search-results-table">
          <!-- Integrate a search results table -->
          <v-toolbar title="Published Researches"></v-toolbar>

            <v-table fixed-header height="160px" style="padding-bottom:20px">
                <thead>
                    <tr>
                        <th class="text-center">
                            Form ID
                        </th>
                        <th class="text-center">
                            Form Title
                        </th>
                        <th class="text-center">
                            Form Owner
                        </th>
                        <th class="text-center">
                            Description
                        </th>
                        <th class="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, index) in searchResults" :key="i.id">
                        <td>{{ i.id }}</td>
                        <td>{{ i.title }}</td>
                        <td>{{ i.researchOwner }}</td>
                        <td>{{ i.description }}</td>
                        <td><v-btn color="primary" @click="joinRequest(index)"> Join Research </v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </div>
      </v-container>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: '',
      navigateItem: '',
      dropdownItems: [
        'Research Title',
        'Organization Name',
        '',
      ],

      searchResults: [ ], //store search results.
    


    }
  },

  methods: {
    selectItem(item) {
      this.navigateItem = item;
      alert('Selected item:', this.navigateItem);
    },

    search() {
      // Simulate search results (replace with actual API call)
      this.searchResults = [
        {
          researchId: 1,
          researchOwner: 'John Doe',
          researchTitle: 'Sample Research 1',
          description: 'Lorem ipsum...',
        },
        {
          researchId: 2,
          researchOwner: 'Jane Smith',
          researchTitle: 'Sample Research 2',
          description: 'Lorem ipsum...',
        },
        // Add more search results as needed
      ];
    },
    joinResearch(selectedResearch) {
      // Handle the Join button click for the selected research
      console.log('Joining research:', selectedResearch);
    },


  }
};
</script>


<style></style>
