<template v-slot:placeholder>
  <v-card class="mx-auto" max-width="400" min-height="300">
    <!-- <v-row class="fill-height ma-0" align="center" justify="center">
      <v-progress-circular
        indeterminate
        color="grey lighten-5"
      ></v-progress-circular>
    </v-row> -->

    <v-img class="white--text align-end" v-bind:src="memeObject.url" />
    <v-card-subtitle class="pb-0"> {{ memeObject.name }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ memeObject.caption }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue" text> Like </v-btn>
      <v-btn color="orange" text> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MemeCard",
  props: ["memeObject"],
};
</script>

<style>
</style>