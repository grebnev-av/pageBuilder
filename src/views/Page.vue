<template>
  <div class="container">
    <Header
      :pageId="selectedProject.id"
    />
    <main class="main main_page">
      <div class="b-page">
        <component
          v-for="block in list"
          :key="block.id"
          :is="block.name"
          :id="block.id"
          :options="block.options"
          :styles="block.styles"
          :elements="block.elements"
        />
      </div>

      <div class="b-page__add">
        <BaseButton
          class="small"
          v-for="block in blocks"
          :text="`Add ${block}`"
          :key="block"
          @click="clickAddBlock(block)"
        />
        <BaseButton
          class="small black"
          text="Save"
          @click="save"
        />
      </div>  
    </main>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations } from 'vuex'
import Header from "../components/Header";

export default {
  name: "Page",
  components: {
    Header
  },
  computed: {
    ...mapState('Projects', [
     'selectedProject',
    ]),
    ...mapState('Pages', [
     'selectedPage',
    ]),
    ...mapState('Blocks', [
      'list',
      'blocks'
    ]),
  },
  methods: {
    ...mapActions('Projects', ['setSelectedProject']),
    ...mapActions('Pages', ['setSelectedPage']),
    ...mapActions('Blocks', ['setSelectedPageId']),
    ...mapMutations('Blocks', ['setNewBlock']),

    clickAddBlock (name) {
      this.setNewBlock(name);
    },

    save () {
      this.$router.push(`/project/${this.selectedProject.id}`);
    }
  },
  
  mounted () {
    this.setSelectedPage(this.$route.params.id);
    this.setSelectedPageId(this.$route.params.id);
  }
};
</script>

<style scoped lang="scss">
  .b-page {
    margin: 0 auto;
    width: 100%;
    padding-bottom: 60px;
    &__add {
      background: rgba(#fff, 0.6);
      margin: 1rem;
      position: fixed;
      bottom: -10px;
      left: 0;
      right: 0;
      padding: 10px;
      
      display: flex;
      justify-content: center;
      
      > * {
        margin: 0 10px;
      }
    }
  }
</style>
