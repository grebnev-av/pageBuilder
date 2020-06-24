import BLOCK_LIST from './../mockData/BlocksListMock';
import { merge } from 'lodash-es'

export default {
    state: {
      defaultList: BLOCK_LIST,
      list: [],
      selectedBlock: null,
      selectedPageId: 1,
      defaultBlock: {
        options: {},
        styles: {},
        elements: {},
      },
      blocks: [
       'BaseBlock',
       'BaseSimpleBlock'
      ]
    },

    mutations: {
      setNewBlock (state, value) {
        const newProj = {...state.defaultBlock};
        newProj.id = state.defaultList.length + 1;
        newProj.parentId = state.selectedPageId;
        newProj.name = value;
        
        state.defaultList.push(newProj);
        state.list.push(newProj);
      },

      save (state, value) {
        const newProj = {...state.defaultBlock};
        newProj.id = state.defaultList.length + 1;
        newProj.parentId = state.selectedPageId;
        newProj.name = value;

        state.defaultList.push(newProj);
        state.list.push(newProj);
      },

      setSelectedBlock (state, value) {
        state.selectedBlock = value
      },

      setSelectedPageId (state, value) {
        state.selectedPageId = value
      },
        
      setList (state, value) {
        state.list = value
      },

      setDefaultList (state, value) {
        state.defaultList = value
      },
    },

    actions: {
      setSelectedBlock({ state, commit }, id) {
        const findBlock = state.defaultList.find(p => p.id === parseInt(id));

        commit('setSelectedBlock', findBlock)
      },

      setSelectedPageId({ state, commit }, id) {
        const filterList = state.defaultList.filter(p => p.parentId === parseInt(id));

        commit('setList', filterList);
        commit('setSelectedPageId', parseInt(id));
      },

      updateBlockData({ state, commit }, data) {
        const { id, elements } = data;
        const { list, defaultList} = state;
        const index = state.list.findIndex(b => b.id === id );
        const indexDef = state.defaultList.findIndex(b => b.id === id );
        const newBlock = merge({}, state.list[index], { elements });

        list[index] = newBlock;
        defaultList[indexDef] = newBlock;

        commit('setList', list);
        commit('setDefaultList', defaultList);
      }
    },

    namespaced: true
};
