<template v-slot:placeholder>
  <v-card hover class="rounded-card mx-auto" max-width="400" min-height="300">
    <!-- Meme Card Header -->
    <v-card-actions>
      <v-avatar color="primary" size="36">
        <span class="card-title-avatar">{{
          memeObject.name[0]
        }}</span></v-avatar
      >
      <v-btn color="blue" text> {{ memeObject.name }} </v-btn>
      <v-spacer></v-spacer>

      <v-btn class="mx-1" dark small color="cyan">
        <v-icon dark right> mdi-pencil </v-icon>
      </v-btn>
    </v-card-actions>

    <!-- Image Section -->
    <v-img
      class="white--text align-end"
      v-bind:src="memeObject.url"
      height="250"
    />

    <!-- Meme Card Footer -->
    <v-card-text class="text--primary">
      <div>{{ memeObject.caption }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MemeCard",
  props: ["memeObject"],
};
</script>


<style scoped>
.card-title-avatar {
  font-size: 18;
  color: white;
}
</style>>


