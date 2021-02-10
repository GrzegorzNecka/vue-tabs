import Vue from "vue";

Vue.component("tab-home", {
  template: "<div>treść home component</div>"
});
Vue.component("tab-posts", {
  template: "<div>treść posts component</div>"
});
Vue.component("tab-archive", {
  template: "<div>treść archive component</div>"
});

new Vue({
  el: "#app",
  data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"]
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
      // zwraca zawartość komponentu tab-nazwa
    }
  }
});
