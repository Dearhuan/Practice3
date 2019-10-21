<template>
  <div
    v-bind:abc="title"
    :class="['weui-search-bar',{
    'weui-search-bar_focusing': isFocus
}]"
    id="searchBar"
  >
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          ref="input"
          v-model="searchText"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        />
        <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label
        @click="toggleFocus"
        class="weui-search-bar__label"
        id="searchText"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>{{title}}</span>
      </label>
    </form>
    <a
      v-on:click="toggleFocus"
      href="javascript:"
      class="weui-search-bar__cancel-btn"
      id="searchCancel"
    >{{cancel}}</a>
  </div>
</template>
<script>
import txt from './search.txt'
import observer from '../../tools/observer'
export default {
    data() {
        return {
            // 表示搜索框的两个状态，一个是聚焦后的，一个是非聚焦
            isFocus: false,
            // 搜索框的值
            searchText: '',
            title: txt,
            cancel: '取消',
        }
    },
    // 注册事件
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
            // 聚焦
            this.$refs.input.focus()
            // search.isFocus = false
            console.log('点击了取消')
        },
        // 清空输入框
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        // 监听搜索框
        searchText() {
            // 使用观察者模式
            observer.emit('setSeatchText', this.searchText)
        }
    }
}
</script>