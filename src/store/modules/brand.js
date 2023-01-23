import Api from '@/api'

export default {
  state: {
    logoBrands: [],
    projects: [],
    news: [],
    articles: [],
    categories: [],
    activeArticle: null,
    activeCategory: null
  },
  getters: {
    logoBrands(state) {
      return state.logoBrands;
    },
    getterProjects(state) {
      return state.projects;
    },
    getterNews(state) {
      return state.news;
    },
    articles(state) {
      return state.articles.slice(0, 10);
    },
    categories(state) {
      return state.categories.slice(0, 12);
    },
    activeCategoryArticles(state) {
      if (!state.activeCategory) {
        return [];
      }
      // return state.articles.filter((item) => state.activeCategory.articles.indexOf(item.id) >= 0);
      return state.articles.filter((item) => state.activeCategory.url == item.parent);
    }
  },
  mutations: {
    setBrands(state, payload) {
      state.logoBrands = payload.items;
    },
    setProjects(state, payload) {
      state.projects = payload.items;
    },
    setNews(state, payload) {
      state.news = payload.items;
    },
    setArticles(state, payload) {
      state.articles = payload.items;
    },
    setCategories(state, payload) {
      state.categories = payload.items;
    },
    setActiveCategory(state, payload) {
      state.activeCategory = payload;
    },
    setActiveArticle(state, payload) {
      state.activeArticle = payload;
    }
  },
  actions: {
    async loadBrands({ commit }) {
      const items = await Api.getArticles();
      commit('setBrands', { items });
    },
    async loadProjects({ commit }) {
      const items = await Api.getProjects();
      commit('setProjects', { items });
    },
    async loadNews({ commit }) {
      const items = await Api.getNews();
      commit('setNews', { items });
    },
    async loadArticles({ commit, state }) {
      if (state.articles.length > 0) { return; }
      const items = await Api.getArticles();
      commit('setArticles', { items });
    },
    async loadCategories({ commit, state }) {
      if (state.categories.length > 0) { return; }
      const items = await Api.getCategories();
      commit('setCategories', { items });
    },
    async loadActiveCategory(context, url) {
      await context.dispatch('loadArticles');
      await context.dispatch('loadCategories');
      let category = context.state.categories.find((item) => {
        return item.url == url;
      });
      context.commit('setActiveCategory', category);
    },
    async loadActiveArticle(context, url) {
      await context.dispatch('loadArticles');
      let model = context.state.articles.find((item) => {
        return item.url == url;
      });
      context.commit('setActiveArticle', model);
    }
  }
}