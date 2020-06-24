import PAGES_LIST from './../mockData/PagesListMock';

export default {
    state: {
      defaultList: PAGES_LIST,
      list: [],
      defaultPage: {
        id: 0,
        name: 'Name page',
        description: 'Best description about page',
        alias: 'page', 
        parentId: null
      },
      selectedPage: null,
      selectedProjectId: 1
    },

    mutations: {
      setNewPage (state) {
        const newProj = {...state.defaultPage};
        newProj.id = state.defaultList.length + 1;
        newProj.parentId = state.selectedProjectId;
        
        state.defaultList.push(newProj);
        state.list.push(newProj);
      },

      setSelectedPage (state, value) {
        state.selectedPage = value
      },

      setSelectedProjectId (state, value) {
        state.selectedProjectId = value
      },
        
      setList (state, value) {
        state.list = value
      },
    },

    actions: {
      setSelectedPage({ state, commit }, id) {
        const findPage = state.defaultList.find(p => p.id === parseInt(id));

        commit('setSelectedPage', findPage)
      },

      setSelectedProjectId({ state, commit }, id) {
        const filterList = state.defaultList.filter(p => p.parentId === parseInt(id));

        commit('setList', filterList);
        commit('setSelectedProjectId', parseInt(id));
      }
    },

    namespaced: true
};
