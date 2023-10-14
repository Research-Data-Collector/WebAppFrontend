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

            <v-list>
              <v-list-item v-for="item in dropdownItems" :key="item" @click="selectItem(item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
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
          <v-table>
            <!-- Table Header -->
            <thead>
              <tr>
                <th class="text-center">Research ID</th>
                <th class="text-center">Research Owner</th>
                <th class="text-center">Research Title</th>
                <th class="text-center">Description</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <!-- Table Body -->
            <tbody>
              <!-- Table Row 1 -->
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Research Project 1</td>
                <td>A research project description goes here.</td>
                <td>
                  <v-btn color="primary" @click="joinResearch(1)">Join</v-btn>
                </td>
              </tr>
              <!-- Table Row 2 -->
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Research Project 2</td>
                <td>Another research project description.</td>
                <td>
                  <v-btn color="primary" @click="joinResearch(2)">Join</v-btn>
                </td>
              </tr>
              <!-- Add more rows as needed -->
              
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Research Project 1</td>
                <td>A research project description goes here..</td>
                <td>
                  <v-btn color="primary" @click="joinResearch(1)">Join</v-btn>
                </td>
              </tr>
              
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Research Project 1</td>
                <td>A research project description goes here.</td>
                <td>
                  <v-btn color="primary" @click="joinResearch(1)">Join</v-btn>
                </td>
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
      dropdownItems: [
        'Research Title',
        'Research ID',
        'Researcher Name',
        '',
      ],


    }
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item;
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
