<template>
  <v-form v-model="valid">
    <v-card>
      <v-toolbar color="primary" dark>Lets Brew the Craziest Meme</v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                rounded="true"
                outlined="true"
                label="Name*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="caption"
                rounded="true"
                outlined="true"
                label="Caption"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="url"
                rounded="true"
                outlined="true"
                label="Url"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mr-4" @click="onSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>



<script>
export default {
  name: "MemeForm",
  data: () => ({
    name: "",
    caption: "",
    url: "",
  }),

  methods: {
    onSaved() {
      this.onSave(this.$data.name);
    },
  },

  props: ["onSave"],
};
</script>