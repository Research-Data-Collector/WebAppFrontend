<template>
    <div class="survey">
        <h1>Custom Form Creator</h1>

        <form>
            <div>
                <label>Form Title</label>
                <div><input type="text" v-model="formtitle"></div>
                <label>Form Description</label>
                <div><input type="text" v-model="formdescription"></div>

            </div>
            <div v-for="(question, index) in questions" :key="index">
                <div class="mt-4"></div>
                <label>{{ index + 1 + ') ' }}Question:</label>


                <input type="text" v-model="question.label">

                <v-btn type="button" @click="removeQuestion(index)">Remove Question</v-btn>
                <div class="mt-4"></div>

                <!--<div v-if="question.type === 'text'">-->
                <!--<label>Response:</label>-->
                <!-- <input v-show="showResponses" type="text" v-model="question.value">
                </div>-->

                <!-- <div v-else-if="question.type === 'multipleChoice'">
                    <label>Options:</label>
                    <div class="options" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                        <div class="mt-4"></div>
                        <input type="text" v-model="option.text"> -->
                <!-- <input v-show="showResponses" type="checkbox" v-model="option.correct"> -->
                <!-- <div class="mt-4"></div>
                        <v-btn type="button" @click="removeOption(question, optionIndex)">Remove Option</v-btn>
                        <div class="mt-4"></div>
                    </div>
                    
                    <v-btn type="button" @click="addOption(question)">Add Option</v-btn>
                    <div class="mt-4"></div> -->
                <!--<label>Response:</label>-->
                <!-- <select v-show="showResponses" v-model="question.response">
                        <option v-for="(option, optionIndex) in question.options" :key="optionIndex" :value="option.text">{{
                            option.text }}</option>
                    </select>
                </div> -->
                <div v-if="question.type === 'dropdown'">
                    <label>Options:</label>
                    <div class="options" v-for="(option, optionIndex) in question.data" :key="optionIndex">
                        <input type="text" :value="option"
                            @input="updateOption(question, optionIndex, $event.target.value)">
                        <!-- <input type="text" v-model="option"> -->
                        <!-- <input v-show="showResponses" type="radio" :id="`q${index}_o${optionIndex}`"
                            :value="option.text" v-model="question.response" :name="`q${index}`"> -->
                        <!-- <label v-show="showResponses" :for="`q${index}_o${optionIndex}`">{{ option }}</label> -->
                        <v-btn type="button" @click="removeOption(question, optionIndex)">Remove Option</v-btn>
                        <div class="mt-4"></div>
                    </div>


                    <div style="padding-left: 50px;">
                        <v-btn type="button" @click="addOption(question)">Add Option</v-btn>
                    </div>

                </div>


                <div v-if="question.type === 'radio'">
                    <label>Options:</label>
                    <div class="options" v-for="(option, optionIndex) in question.data" :key="optionIndex">
                        <input type="text" :value="option"
                            @input="updateOption(question, optionIndex, $event.target.value)">
                        <!-- <input type="text" v-model="option"> -->
                        <!-- <input v-show="showResponses" type="radio" :id="`q${index}_o${optionIndex}`"
                            :value="option.text" v-model="question.response" :name="`q${index}`"> -->
                        <!-- <label v-show="showResponses" :for="`q${index}_o${optionIndex}`">{{ option }}</label> -->
                        <v-btn type="button" @click="removeOption(question, optionIndex)">Remove Option</v-btn>
                        <div class="mt-4"></div>
                    </div>

                    <div style="padding-left: 50px;">
                        <v-btn type="button" @click="addOption(question)">Add Option</v-btn>
                    </div>

                </div>







                <div v-else-if="question.type === 'date'">
                    <!-- <label v-show="showResponses">Response (Date):</label> -->
                    <!-- <input v-show="showResponses" type="date" v-model="question.response"> -->
                </div>

                <div v-else-if="question.type === 'file'">
                    <!-- <label v-show="showResponses">Response (File):</label> -->
                    <!-- <input v-show="showResponses" type="file"> -->
                </div>
                <!-- 
                <div v-else-if="question.type === 'audio'">
                    <label v-show="showResponses">Response (Audio File):</label>
                    <input v-show="showResponses" type="file">
                </div>

                <div v-else-if="question.type === 'video'">
                    <label v-show="showResponses">Response (File):</label>
                    <input v-show="showResponses" type="file">
                </div> -->


            </div>

        </form>
        <div class="mt-4"></div>
        <v-divider></v-divider>
        <div class="mt-4"></div>
        <label> Select Question Type:</label>

        <!-- NEW  BUTTON TOGGLE-->
        <div class="d-flex align-center flex-column bg-grey-lighten-4 pa-6">
            <v-btn-toggle v-model="toggle" divided>
                <v-btn @click="addQuestion('text')">
                    <v-icon>mdi-format-text</v-icon>
                    <v-tooltip activator="parent" location="top">Text Question</v-tooltip>
                </v-btn>
                <v-btn @click="addQuestion('number')">
                    <v-icon>mdi-numeric</v-icon>
                    <v-tooltip activator="parent" location="top">Number Question</v-tooltip>
                </v-btn>
                <v-btn @click="addQuestion('dropdown')">
                    <v-icon>mdi-arrow-down-drop-circle</v-icon>
                    <v-tooltip activator="parent" location="top">Dropdown Question</v-tooltip>
                </v-btn>
                <v-btn @click="addQuestion('radio')">
                    <v-icon>mdi-radiobox-marked</v-icon>
                    <v-tooltip activator="parent" location="top">Radio Button</v-tooltip>
                </v-btn>

                <v-btn @click="addQuestion('file')">
                    <v-icon>mdi-file</v-icon>
                    <v-tooltip activator="parent" location="top">File Upload Question</v-tooltip>
                </v-btn>
            </v-btn-toggle>
        </div>




        <!-- <div class="main-question">
            <label> Select Question Type:</label>
            <select v-model="selectedType">
                <option value="text">Text</option>
                <option value="multipleChoice">Multiple Choice</option>
                <option value="radio">Radio Button</option>
                <option value="date">Date</option>
                <option value="file">File</option> -->

        <!-- <option value="img">Image</option>
                <option value="audio">Audio</option>
                <option value="video">Video</option> -->

        <!-- <option value="multipleSelect">Multiple Select</option> -->
        <!-- </select>
            <v-btn @click="addQuestion">Add Question</v-btn>
            <div class="mt-4"></div> -->
    </div>




    <div class="mt-4"></div>
    <v-btn type="button" class="submit-button" @click.prevent="submitForm">Publish Form</v-btn>

    <v-snackbar v-model="snackbar" :timeout="timeout" color="success">
        <b>
            {{ text }}
        </b>


        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>

    <!-- Are you sure dialog -->
    <div class="mt-4"></div>

    <!-- <v-btn v-if="false" @click="toggleResponses" type="button" class="submit-button">Toggle</v-btn>
    <p v-if="true">{{ questions }}</p> -->


    <!-- <div class="mt-8"></div>
    <v-btn type="button" class="submit-button" @click.prevent="submitForm">Publish Survey</v-btn> -->
    <!-- Are you sure dialog -->
    <!-- <div class="mt-4"></div> -->
</template>




<script>
import axios from "axios";
import { server } from "../../helper";

export default {
    name: 'SurveyCreator',
    data() {
        return {
            //Snakbar
            snackbar: false,
            text: "Published Form successfully!",
            timeout: 3000,


            //selectedType: 'text',
            formtitle: '',
            formdescription: '',
            questions: [],
            showResponses: false,

            createdForms: []
        }
    },

    methods: {
        addQuestion(selectedType) {
            if (selectedType === 'text') {
                this.questions.push({ id: '1', label: 'text field', type: 'text', data: [], value: '' });
            }
            else if (selectedType === 'number') {
                this.questions.push({ id: '2', label: 'number field', type: 'number', data: [], value: '' });
            }
            else if (selectedType === 'dropdown') {
                this.questions.push({ id: '3', label: 'dropdown fields', type: 'dropdown', data: [], value: '' });

            } else if (selectedType === 'radio') {
                this.questions.push({ id: '4', label: 'radio fields', type: 'radio', data: [], value: '' });
                //this.questions.push({ type: 'radio', text: 'Radio Button Question', options: [{ text: '' }], response: '' });
                // } else if (selectedType === 'multipleChoice') {
                //     this.questions.push({ type: 'multipleChoice', text: 'Multiple Choice Question', options: [{ text: '', correct: false }], response: '' });
                // } else if (selectedType === 'date') {
                //     this.questions.push({ type: 'date', text: 'Date Question', response: '' });
            }
            else if (selectedType === 'file') {
                this.questions.push({ id: '5', label: 'file fields', type: 'file', data: [], value: '' });
                //this.questions.push({ type: 'file', text: 'Image Question', response: '' });
            }
            // else if (this.selectedType === 'audio') {
            //     this.questions.push({ type: 'audio', text: 'Audio Question', response: '' });
            // }
            // else if (this.selectedType === 'video') {
            //     this.questions.push({ type: 'video', text: 'Video Question', response: '' });
            // }
        },
        removeQuestion(index) {
            this.questions.splice(index, 1);

        }, //
        addOption(question) {
            question.data.push('');
            //question.options.push({ text: '', correct: false });
        },
        removeOption(question, optionIndex) {
            question.data.splice(optionIndex, 1);
        },
        updateOption(question, optionIndex, newValue) {
            question.data[optionIndex] = newValue;
        },

        // saveSurvey() {
        //     //handle the form submission here, e.g., send responses to a server
        //     this.createdForms.push({ title: this.formtitle, description: this.formdescription, questions: this.questions });
        //     this.questions = [];
        // },


        toggleResponses() {
            this.showResponses = !this.showResponses;

        },
        //To be able to Drag Questions so that they can be rearranged

        submitForm() {
            try {
                const jsonData = {
                    title: this.formtitle,
                    fields: this.questions
                }

                //const data = JSON.stringify(jsonData);
                //console.log(data);
                const email = this.$store.getters.getSessionData.user.email
                const datapacket = {
                    title: this.formtitle,
                    data: jsonData,
                    email: email,
                    description: this.formdescription
                }
                console.log(datapacket);
                //Send the JSON data to the backend (e.g., using Axios)

                this.snackbar = true;

                //this.sendDataToBackend(datapacket);                  / /////////////////////CHANGEEEEEEE


            } catch (error) {
                console.log(error);

            }
            //console.log(this.$store.getters.getSessionData.user.email)

            // datapacket = {
            //     title: this.formtitle,
            //     data: data,
            //     email: this.$store.getters.getSessionData.user.email,
            //     description: this.formdescription
            // }
            // console.log(datapacket);

            // Send the JSON data to the backend (e.g., using Axios)
            //this.sendDataToBackend(data);



            //         title: string;
            // data:JsonValue;
            // email:string;
            // description:string;
        },

        async sendDataToBackend(jsonData) {
            try {
                const response = await axios.post(`${server.baseURL}/admin/uploadform`, jsonData, {
                    headers: {
                        'Content-Type': 'application/json'  //not sure if this is needed
                    }
                });
                console.log('Data sent successfully!');
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

    }
}


</script>
    





<style scoped>
/* Needs Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

}

.main-question button {
    background-color: rgb(177, 241, 211);
}

.survey {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

select,
input[type="text"],
input[type="date"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

select {
    background-color: #f1f4fe;
}

.options {
    margin-top: 5px;
    padding-left: 50px;
}

.options input[type="text"] {
    margin-right: 10px;
    background-color: #f9fee9;
}

.options label {
    display: inline;
    margin-right: 10px;
}

.options button {
    background-color: #f5a799;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.responses {
    margin-top: 10px;
}

.responses label {
    display: block;
    margin-top: 5px;
}

.submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>