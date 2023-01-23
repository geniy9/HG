<template>
  <div>
    <div v-if="category" class="brands_bg">
      <div class="brands_wrapper">
        <div class="brands_title">
          <p class="ui-text-regular">What we do</p>
          <h1 class="ui-text-regular">{{ category.description }}</h1>
        </div>
        <section>
          <div @click="sortArticles()" class="brands_category font">{{ category.title[$i18n.locale] }}</div>
          <div class="row grid-middle grid-center container-padding">
            <template v-for="(sub, i) in category.subcategory">
              <div :key="i" @click="sortArticles(sub.url)" class="ui-text-small sub_category_item pointer">{{ sub.title }}</div>
            </template>
          </div>
        </section>
        <section>
          <ArticleItems :items="articles"></ArticleItems>
        </section>
      </div>
    </div>
    <div v-else>
      No category...
    </div>
  </div>
</template>

<script>
import ArticleItems from '@/components/ArticleItems'
import ArrowLeft from '@/components/icons/ArrowLeft'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Brands',
  components: {
    ArticleItems,
    ArrowLeft
  },
  data() {
    return {
      subCategory: ''
    }
  },
  methods: {
    ...mapActions([
      'loadActiveCategory',
    ]),
    sortArticles(url) {
      this.subCategory = url;
    },
  },
  computed: {
    ...mapGetters({
      allCategories: 'activeCategoryArticles',
    }),
    categoryUrl() {
      return this.$route.params['category_url'] || null;
    },
    category() {
      return this.$store.state.brand.activeCategory;
    },
    articles() {
      if (!this.subCategory) {
        return this.allCategories
      } else {
        return this.allCategories.filter(item => { return item.subparent == this.subCategory });
      }
    }
  },
  watch: {
    '$route.params.category_url': {
      handler () {
        this.loadActiveCategory(this.categoryUrl);
      },
      immediate: true 
    }
  },
  mounted() {
    this.loadActiveCategory(this.categoryUrl);
  }
}
</script>
<style scoped>
.brands_wrapper {
  position: relative;
  padding: 5% 5% 5% 10%;
}
.sub_category_item {
  background: rgba(255,255,255,.05);
  padding: 10px 2rem;
  display: inline-block;
  margin: 0 1px;
  transition: .5s;
}
.sub_category_item:hover {
  color: #fff;
  background: rgba(255,255,255,.1);
  transition: .5s;
}
.brands_title {
  width: 50%;
  margin: 40px 5%;
  border-left: 1px rgba(255,255,255,.1) solid;
  padding-left: 5%;
}
.brands_title p {
  margin-bottom: 20px;
}
.brands_title h1 {
  text-transform: uppercase;
}
.brands_category {
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 10px;
}
</style>