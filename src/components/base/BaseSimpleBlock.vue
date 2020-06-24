﻿<template>
  <div class="b-base-simple-block"
    :style="blockStyles"
  >
    <div class="b-base-simple-block__container">
      <div class="b-base-simple-block__columns">
        <div 
          class="b-base-simple-block__columns-item"
          v-for="(column, index) in elementsDef.list"
          :key="index"
        >
          <div class="upTitle">
            <BaseEditable
              :style="column.upTitle.styles"
              :content="column.upTitle.text"
              @update="updateText(`${index}`, 'upTitle', $event)"
            />
          </div>
          <div class="description">
            <BaseEditable
              :style="column.description.styles"
              :content="column.description.text"
               @update="updateText(`${index}`, 'description', $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blockMixin from '../mixins/block'

export default {
  name: 'BaseSimpleBlock',

  mixins: [
    blockMixin
  ],
  
  data () {
    return {
      stylesDef: {
        'is-desktop': {
          'height': '80vh',
          'background-color': 'rgb(84, 85, 102)'
        },
        'is-mobile': {
          'height': 'auto'
        }  
      },
      optionsDef: {
        //
      },  
      elementsDef: {
        list: [
            {
                upTitle: {
                    text: 'OUR COMPANY',
                    styles: {
                        'font-size': '14px',
                        'color': '#ffffff',
                        'padding-top': '12px',
                        'padding-bottom': '12px',
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
            },
          {
            upTitle: {
              text: 'OUR COMPANY',
              styles: {
                'font-size': '14px',
                'color': '#ffffff',
                'padding-top': '12px',
                'padding-bottom': '12px',
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
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  .b-base-simple-block {
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
    &__columns {
      display: flex;
      &-item {
        margin: 20px;
      }
    }
  }
</style>
