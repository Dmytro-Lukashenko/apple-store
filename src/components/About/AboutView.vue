<template>
  <v-container>
    <section class="about">
      <v-flex row>
        <v-flex column>
          <v-img position src="@/assets/images/levi9-icon.png" width="50px" height="50px">
          </v-img>
        </v-flex>
        <v-flex column>
          <h1 class="about-title">LEVI9 Front End Academy</h1>
          <h2 class="about-text">This is Home-Work Application "APPLE STORE"</h2>
          <p class="about-text">This application was developed by Dmytro Lukashenko using Vue JS 2.0</p>
          <p class="about-text">During the development of the application, the following features of the Vue JS 2.0 were
            used:</p>
          <ul class="about-list">
            <li class="about-list_item">Vue Router</li>
            <li class="about-list_item">VueX</li>
            <li class="about-list_item">Vuetify Library</li>
          </ul>
        </v-flex>
      </v-flex>
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
@import './AboutView.scss';
</style>
