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

            <!-- FORM CODE GOES HERE -->
            <MemeForm :onSave="onSaveThisMeme" />
          </v-dialog>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <!-- CARDS SECTION  -->
      <v-container>
        <v-row>
          <v-col v-for="meme in memeAll" :key="meme._id" md="4">
            <MemeCard :memeObject="meme" />
          </v-col>
        </v-row>
      </v-container>
      <!-- <NewCardLayout /> -->
    </v-main>
  </v-app>
</template>

<script>
import MemeForm from "./components/MemeForm";
// import NewCardLayout from "./components/NewCardLayout";
import MemeCard from "./components/MemeCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MemeForm,
    MemeCard,
    // NewCardLayout,
  },

  methods: {
    ...mapActions(["fetchAllMemes"]),
    onSaveThisMeme(name) {
      console.log(name);
    },
  },
  computed: {
    ...mapGetters(["memeAll"]),
  },

  created: function () {
    this.fetchAllMemes();
  },
};
</script>
