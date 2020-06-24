import PROJECT_LIST from './../mockData/ProjectListMock';

export default {
    state: {
      list: PROJECT_LIST,
      defaultProject: {
        id: 0,
        name: 'Name project',
        description: 'Best description about projects',
        domain: 'https://projects.com'
      },
      selectedProject: null
    },

    mutations: {
      setNewProject (state) {
        const newProj = {...state.defaultProject};
        newProj.id = state.list.length + 1;
        newProj.name = `${newProj.name} ${state.list.length + 1}`;
        
        state.list.push(newProj);
      },

      setSelectedProject (state, value) {
        state.selectedProject = value
      },
    },

    actions: {
      setSelectedProject({ state, commit }, id) {
        const findProject = state.list.find(p => p.id === parseInt(id));

        if (findProject) {
          commit('setSelectedProject', findProject)
        }
      }
    },

    namespaced: true
};
