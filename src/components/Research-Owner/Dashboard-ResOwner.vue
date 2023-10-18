<template>
    <v-app>
        <v-layout>
            <RONavBar></RONavBar>
            <v-main>
                <!-- Main content -->
                <v-container fluid>
                    <!-- Content of pages/components goes here -->
                    <router-view></router-view>
                </v-container>
            </v-main>
        </v-layout>
        <FooterDefault></FooterDefault>
    </v-app>
</template>
  
<script>
import RONavBar from '../common/Dashboard-RONavBar.vue';
import FooterDefault from '../common/Footer-Default.vue';

export default {
    name: "Dashboard-ResOwner",
    components: {
        RONavBar,
        FooterDefault,
    },
    beforeRouteLeave(to, from, next) {
        // Check if the user should be allowed to leave this route
        if (1) {
            // Show a confirmation dialog to confirm leaving
            const confirmLeave = window.confirm("Are you sure you want to leave the dashboard?");

            if (confirmLeave) {
                // If confirmed, allow navigation
                next();
            } else {
                // If not confirmed, prevent navigation
                next(false);
            }
        } else {
            // If the condition is not met, allow navigation
            next();
        }
    },
};
</script>
  
<style>
.main-content {
    padding: 105px 25px 25px 25px;
    margin-left: 337px;
    z-index: -1;
    min-height: 100%;
    background-color: #E8E5FC;
}

@media only screen and (max-width: 768px) {
    .main-content {
        margin-left: 0;
    }
}
</style>
  