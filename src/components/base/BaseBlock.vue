﻿<template>
  <div class="b-base-block"
    :style="blockStyles"
  >
    <div class="b-base-block__container">
      <div class="upTitle">
        <BaseEditable
          :style="elementsDef.upTitle.styles"
          :content="elementsDef.upTitle.text" 
          @update="updateText('elements', 'upTitle', $event)"
        />
      </div>
      <div class="header">
        <BaseEditable
          :style="elementsDef.header.styles"
          :content="elementsDef.header.text" 
          @update="updateText('elements', 'header', $event)"
        />
      </div>
      <div class="description">
        <BaseEditable
          :style="elementsDef.description.styles"
          :content="elementsDef.description.text"
          @update="updateText('elements', 'description', $event)"
        />
      </div>
      <div 
        v-if="optionsDef.showArrow" 
        class="b-base-block__arrow"
      >
        <IconArrow />
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from "../../assets/icons/arrow.svg";
import blockMixin from '../mixins/block'

export default {
  name: 'BaseBlock',
    
  components: {
    IconArrow
  },
  
  mixins: [
    blockMixin
  ],
  
  data () {
    return {
      stylesDef: {
        'is-desktop': {
          'height': '80vh',
          'background-color': '#d38b7c',
          'background-image': 'url(https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg)',
        },
        'is-mobile': {
          'height': 'auto'
        }  
      },
      optionsDef: {
        showArrow: true
      },  
      elementsDef: {
        upTitle: {
          text: 'OUR COMPANY',
          styles: {
            'font-size': '14px',
            'color': '#ffffff',
            'padding-top': '12px',
            'padding-bottom': '12px',
          }
        },
        header: {
          text: 'Bring your ideas to life',
          styles: {
            'font-size': '50px',
            'color': '#ffffff',
            'padding-top': '64px',
            'padding-bottom': '64px',
          }
        },
        description: {
          text: 'Anything you\'ve even dreamed about is possible to realise just at the moment when you decided to win.',
          styles: {
            'font-size': '16px',
            'color': '#ffffff',
            'padding-top': '40px',
            'padding-bottom': '12px',
          }
        }
      }
    }
  }
}
</script> 

<style lang="scss">
  .b-base-block {
    position: relative;
    
    min-height: 20vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    * { 
      line-height: 1.2; 
    }
    &__container {
      max-width: 60rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__arrow {
      position: absolute;
      bottom: 2rem;
      width: 3rem;
      left: 50%;
      margin-left: -1.5rem;
    }
  }
</style>
