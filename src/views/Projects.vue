<template>
  <div class="container">
    <Header />
    <main class="main">
      <div class="b-project">
        <div class="b-project-header">
          <div class="b-project-header__title">
            Projects
          </div>
          <div class="b-project-header__btn">
            <BaseButton
              text="Create new projects" 
              @click="clickCreateNewProject"
            />
          </div>
        </div>
        <ul class="b-project-list">
          <li class="b-project-list__item" v-for="(project, index) in list" :key="index">
          <span class="b-project-list__item-name">
            <span class="b-project-list__item-id">
              {{ index + 1 }}.
            </span>
            {{ project.name }}
          </span>
            <span class="b-project-list__item-btn">
            <BaseLink
              :href="`/project/${project.id}`"
              text="Edit project"
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
import { mapState, mapMutations } from 'vuex'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Footer,
    Header
  },
  computed: {
    ...mapState('Projects', [
     'list',
    ]),
  },
  methods: {
    ...mapMutations('Projects', ['setNewProject']),
    
    clickCreateNewProject () {
      this.setNewProject();
    }
  }
};
</script>

<style scoped lang="scss">
  .b-project {
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
      }
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
