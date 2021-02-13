<template>
  <v-form>
    <v-card>
      <v-toolbar color="primary" dark>Lets Brew the Craziest Meme</v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                label="Name*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="caption"
                label="Caption"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="url" label="Url"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mr-4" @click="onSaved"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>



<script>
// import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "MemeForm",
  data: () => ({
    name: "",
    caption: "",
    url: "",
  }),

  methods: {
    ...mapActions(["postAMeme"]),

    onSaved() {
      this.postAMeme({
        name: this.$data.name,
        caption: this.$data.caption,
        url: this.$data.url,
      });
    },
  },

  props: ["onSave"],
};
</script>