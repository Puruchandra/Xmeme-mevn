<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-row justify="end">
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on">
                <span class="mr-2">Create a Meme</span>
              </v-btn>
            </template>
            <!-- <template v-slot:default> -->
            <!-- FORM CODE GOES HERE -->
            <MemeForm :onSave="onSaveThisMeme" />
            <!-- </template> -->
          </v-dialog>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <!-- CARDS SECTION  -->
      <v-container>
        <v-row>
          <v-col v-for="item in memes" :key="item" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- <ul>
          <li v-for="item in memes" :key="item">
            
          </li>
        </ul> -->
        <!-- <v-row rows="12" >
          
        </v-row> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MemeForm from "./components/MemeForm";

export default {
  name: "App",
  components: {
    MemeForm,
  },
  data: () => ({
    memes: [1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    onSaveThisMeme(name) {
      console.log(name);
    },
  },
};
</script>
