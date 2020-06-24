import { mapState, mapActions } from 'vuex'
import { merge } from 'lodash-es'

export default {
  props: {
    id: {
      type: Number,
    },
    options: {
      type: Object,
    },
    styles: {
      type: Object,
    },
    elements: {
      type: Object,
    },  
  },
  
  computed: {
    ...mapState('User', ['activeDevice']),
    
    blockStyles () {
      return this.stylesDef[this.activeDevice]
    }
  },

  mounted () {
    this.stylesDef = merge({}, this.stylesDef, this.styles);
    this.optionsDef = merge({}, this.optionsDef, this.options);
    this.elementsDef = merge({}, this.elementsDef, this.elements);
  },

  watch: {
    elements (value) {
      this.elementsDef = merge({}, this.elementsDef, value);
    }
  },
  
  methods: {
    ...mapActions('Blocks', ['updateBlockData']),
  
    updateText (prop, name, value) {
      if (prop.indexOf('elements') !== -1) {
        this[`${prop}Def`][name].text = value;
      } else {
        this[`elementsDef`]['list'][prop][name].text = value;
      }
      
      this.updateBlockData({ 
        id: this.id,
        elements: this.elementsDef 
      })
    }
  }
}