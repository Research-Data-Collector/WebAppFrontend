<template>
  <v-container fluid>
    <div id="search-results-table">
      <!-- Integrate a search results table -->
      <v-table>
        <!-- Table Header -->
        <thead>
          <tr>
            <th class="text-center">Research ID</th>
            <th class="text-center">Research Title</th>
            <th class="text-center">Research Owner</th>
            <th class="text-center">Description</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody>
          <tr v-for="form in joinedResearches" :key="form.id">
            <td>{{ form.id }}</td>
            <td>{{ form.title }}</td>
            <td>{{ form.owner }}</td>
            <td>{{ form.description }}</td>
            <td><v-btn color="success">Leave Research</v-btn></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      joinedResearches: [
        { id: 24, title: 'Form 2', owner: "John Doe", description: "A research project description goes here." },
        { id: 25, title: 'Form 3', owner: "John Doe", description: "Some kind of research will be stored here." },
      ]
    }
  }
};
</script>

<style></style>