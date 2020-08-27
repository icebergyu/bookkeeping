import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';
import clone from '@/lib/clone';
import createdId from '@/lib/idCreator';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || '[]'
      ) as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem('tagList') || '[]'
      ) as Tag[];

    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名重复");
      } else {
        const id = createdId().toString();
        state.tagList.push({ id: id, name: name });
        store.commit('saveTags');
        window.alert("添加成功");
      }
    },
    findTag(state, id: string) { return state.tagList.filter((t) => t.id === id)[0]; },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTag(state, payload: { id: string; name: string }) {
      const { id, name } = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const tag = state.tagList.filter(t => t.id === id)[0];
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复')
        } else {
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        window.alert('删除失败');
      }
    },

    setCurrentTag(state, id: string) {
      const tag = state.tagList.filter(t => t.id === id)[0];
      state.currentTag = tag;
    }

  },
  actions: {
  },
  modules: {
  }
})
export default store;