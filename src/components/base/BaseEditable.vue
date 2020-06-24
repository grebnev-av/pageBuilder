<template>
  <div 
    contenteditable="true" 
    @input="update"
  />
</template>

<script>
export default {
  name: 'BaseEditable',

  props: ['content'],
  
  mounted () {
    this.$el.innerText = this.content;
  },
  
  watch: {
    content () {
      this.$el.innerText = this.content;
    }
  },
  
  
  methods: {
    update: function(event) {
      this.$emit('update', event.target.innerText);
    }
  }
}
</script>