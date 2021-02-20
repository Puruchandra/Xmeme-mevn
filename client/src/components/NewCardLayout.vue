<template>
  <!-- <div>
    <span>This is new card</span>
  </div> -->
  <div id="app">
    <v-app>
      <v-container fluid grid-list-xl>
        <v-layout wrap justify-space-around>
          <v-flex v-for="image in images" :key="image.num">
            <v-card color="gray" dark width="150px">
              <v-card-text>{{ image.num }}</v-card-text>
              <v-card-media :src="image.src" height="200px"></v-card-media>
              <v-card-actions>
                <v-btn icon><v-icon>arrow_left</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn icon flat color="red"><v-icon>favorite</v-icon></v-btn>
                  <span>お気に入り</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-btn icon><v-icon>arrow_right</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex v-for="image in images" :key="image.num" class="flex-empty">
            <div></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
  <!-- <v-card> </v-card> -->
</template>

<script>
export default {
  name: "NewCardLayout",
  data: () => ({
    images: Array.from(new Array(1)).map((e, i) => ({
      num: i + 1,
      src: `https://picsum.photos/300/400?image=${i + 1}`,
    })),
  }),
};
</script>

<style lang="scss" scoped>
.flex {
  flex-grow: 0;
}

.flex-empty {
  height: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  div {
    width: 150px;
  }
}
</style>