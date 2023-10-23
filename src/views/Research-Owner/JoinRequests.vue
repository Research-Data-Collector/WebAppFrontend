<template>
    <div>
        <div class="container" style="padding-top: 10px">
            <h3>Accept Join Requests</h3>


            <v-toolbar title="Published Forms">
                <v-card class="mx-auto" color="grey-lighten-3" max-width="400" min-width="250">
                    <v-card-text>
                        <v-text-field :loading="loading" v-model="searchQuery" density="compact" variant="solo"
                            label="Search" append-inner-icon="mdi-magnify" single-line hide-details
                            @click:append-inner="onClick"></v-text-field>
                    </v-card-text>
                </v-card>


            </v-toolbar>

            <v-table fixed-header height="368px" style="padding-bottom:20px">
                <thead>
                    <tr>
                        <th class="text-center">
                            Form ID
                        </th>
                        <th class="text-center">
                            Form Title
                        </th>
                        <th class="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, index) in createdForms" :key="i.id">
                        <td>{{ i.id }}</td>
                        <td>{{ i.title }}</td>
                        <!-- <td><v-btn v-show="i.reqs.length > 0" @click="showRequests(index)">View Join Requests ({{
                            i.reqs.length }})</v-btn></td> -->
                        <td><v-btn  @click="showRequests(index)">View Join Requests</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </div>


        <div class="container" style="padding-top: 40px;">
            <v-container fluid>
                <v-row>
                    <v-col v-for="i in selectedReqs" :key="i.uid" cols="12" sm="6" md="4" lg="3">
                        <v-card v-if="i.showCard" class="mx-auto" max-width="344">
                            <v-card-item>
                                <div>
                                    <v-avatar color="purple" size="x-large">
                                        <span class="text-h5">{{ i.name[0] }}</span>
                                    </v-avatar>
                                    <div class="text-overline mb-1">

                                    </div>
                                    <div class="text-h6 mb-1">
                                        {{ i.name }}
                                    </div>
                                    <!-- <div class="text-caption">Data Collector.ID {{ i.uid }}. See Profile.</div> -->
                                    <div>
                                        Data Collector
                                        <br>
                                        Requested to join on: {{ i.date }}

                                    </div>
                                </div>
                            </v-card-item>

                            <v-card-actions>
                                <v-btn variant="tonal" @click="acceptCard(i)" >
                                    Accept
                                </v-btn>
                
                                <v-snackbar   v-model="snackbar" :timeout="timeout" color="success">
                                    <b>
                                        {{ text }}
                                    </b>
           

                                    <template v-slot:actions>
                                        <v-btn color="white" variant="text" @click="snackbar = false">
                                            Close
                                        </v-btn>
                                    </template>
                                </v-snackbar>

                                <v-btn variant="tonal" @click="acceptCard(i)">
                                    Decline
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";


//ACCEPT, DELETE and viewing profile capability...
// SEPARATE HISTORY of approvals (who's in res grp- form) Table, BUT, state management? must be synced right?
export default {
    name: 'JoinRequests',
    mounted() {
        //const org = JSON.stringify({ orgId: 2 })//this.$route.params.orgId);
        const email = { email: this.$store.getters.getSessionData.user.email }
        this.getforms(email);
        console.log(email);
    },

    data() {
        return {
            //         snackbar: false,
            //   alertMessage: "Accepted JOin Requested successfully!",


            //Snakbar
            snackbar: false,
            text: "Accepted Join Requested successfully!",
            timeout: 3000,

            createdForms: [],
            selectedTitle: '',
            selectedReqs: [],
            submissions: [
                { id: 24, title: 'Form 2', newreqs: true, reqs: [{ uid: 231, name: "John Doe", showCard: true, date: "2023-10-22" }, { uid: 232, name: "Jane Turner", showCard: true, date: "2023-10-22" }, { uid: 233, name: "Mark Green", showCard: true, date: "2023-10-22" }] },
                { id: 25, title: 'Form 3',newreqs: false, reqs: [] },
                { id: 26, title: 'Form 4', newreqs: true,reqs: [{ uid: 237, name: "Pam Murphy" }, { uid: 238, name: "Ronda James" }, { uid: 233, name: "Mark Green" }] },
                { id: 27, title: 'Form 5', newreqs: true,reqs: [{ uid: 231, name: "John Doe" }, { uid: 232, name: "Jane Turner" }, { uid: 233, name: "Mark Green" }, { uid: 234, name: "Sam Brown" }] },
                { id: 28, title: 'Form 6',newreqs: false, reqs: [] },
                { id: 24, title: 'Form 2',newreqs: true, reqs: [{ uid: 231, name: "John Doe", showCard: true, date: "2023-10-22" }, { uid: 232, name: "Jane Turner", showCard: true, date: "2023-10-22" }, { uid: 233, name: "Mark Green", showCard: true, date: "2023-10-22" }] },
                { id: 24, title: 'Form 2',newreqs: true, reqs: [{ uid: 231, name: "John Doe", showCard: true, date: "2023-10-22" }, { uid: 232, name: "Jane Turner", showCard: true, date: "2023-10-22" }, { uid: 233, name: "Mark Green", showCard: true, date: "2023-10-22" }] },
                { id: 24, title: 'Form 2',newreqs: true, reqs: [{ uid: 231, name: "John Doe", showCard: true, date: "2023-10-22" }, { uid: 232, name: "Jane Turner", showCard: true, date: "2023-10-22" }, { uid: 233, name: "John de Gone", showCard: true, date: "2023-10-22" }] },
                { id: 24, title: 'Form 2',newreqs: true, reqs: [{ uid: 231, name: "John Doe", showCard: true, date: "2023-10-22" }, { uid: 232, name: "Jane Turner", showCard: true, date: "2023-10-22" }, { uid: 233, name: "John de Gone", showCard: true, date: "2023-10-22" }] },
            
            ]
            ,
        }
    },

    methods: {
        acceptCard(item) {
            
            // Set showCard to false to hide the card when "Accept" is clicked
            item.showCard = false;
            this.snackbar = true;
        },
        async getforms(data) {
            //get the list of Json forms from a get request

            try {
                console.log('Calling api...');
                const response = await axios.post(`${server.baseURL}/admin/getOrgforms`, data,
                    {
                        headers: {
                            'Content-Type': 'application/json'  //not sure if this is needed
                        }
                    }
                );
                console.log('Called api successfully!');
                console.log(response);

                this.createdForms = response.data;
            } catch (error) {
                console.log(error);
            }
        },


        showRequests(index) {

            this.selectedReqs = this.submissions[index].reqs;
            this.selectedTitle = this.submissions[index].title;
        },

        //Regarding Search
        onClick() {
            this.loading = true,
                console.log(this.searchQuery)

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    }


}

</script>

<style>
.card-icon .card-buttons {
    /* Set the buttons container to have absolute positioning */
    bottom: 10px;
    /* Adjust the distance from the bottom as needed */
    left: 0;
    /* Align the buttons to the left */
    width: 100%;
    /* Make the buttons span the full width of the card */
    text-align: center;
    /* Center-align the buttons horizontally */
}

.card-icon .card-buttons button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}

.card-icon .card-buttons button:hover {
    background-color: #0056b3;
}
</style>