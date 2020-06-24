<template>
  <div class="container">
    <Header />
    <main class="main">
      <div class="b-project-page">
        <div class="b-project-page-header">
          <div class="b-project-page-header__title">
            {{ selectedProject ? selectedProject.name : 'Name' }}
            <div>
              <BaseLink
                href="/projects"
                text="Back to projects list"
              />
            </div>
          </div>
          <div class="b-project-page-header__btn">
            <BaseButton
              text="Create new page"
              @click="clickCreateNewPage"
          />
          </div>
        </div>
        <div class="b-project-page-sub-header">
          Pages
        </div>
        <ul class="b-project-page-list">
          <li class="b-project-page-list__item" v-for="(page, index) in list" :key="index">
          <span class="b-project-page-list__item-name">
            <span class="b-project-page-list__item-id">
              {{ index + 1 }}.
            </span>
            {{ page.name }}
          </span>
            <span class="b-project-page-list__item-btn">
            <BaseLink
              :href="`/page/${page.id}`"
              text="Edit page"
            />
          </span>
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations } from 'vuex'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Project",
  components: {
    Footer,
    Header
  },
  computed: {
    ...mapState('Projects', [
     'selectedProject',
    ]),
    ...mapState('Pages', [
      'list'
    ]),
  },
  methods: {
    ...mapActions('Projects', ['setSelectedProject']),
    ...mapActions('Pages', ['setSelectedProjectId']),
    ...mapMutations('Pages', ['setNewPage']),
    
    clickCreateNewPage () {
      this.setNewPage();
    }
  },
  
  mounted () {
    this.setSelectedProject(this.$route.params.id)
    this.setSelectedProjectId(this.$route.params.id)
  }
};
</script>

<style scoped lang="scss">
  .b-project-page {
    margin: 2rem auto;
    width: 100%;
    max-width: 120rem;
    
    &-header {
      padding: 3rem 0 2rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__title {
        font-size: 3rem;
        display: flex;
        align-items: center;
        & > div {
          margin: 0 0 0 3rem;
        }
      }
    }
    &-sub-header {
      padding: 1rem 0 0 2rem;
      display: flex;
      font-size: 2rem;
    }
    &-list {
      margin: 2rem auto;
      width: 100%;
      &__item {
        width: 100%;
        padding: 3rem;
        margin: 1rem;
        border: $gray5 1px solid;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
