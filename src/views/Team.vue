<template>
  <div class="manage">
    <Header />
    <div class="container">
      <h2 :class="{'h2-dark' : !isDarkMode, 'h2-light' : isDarkMode}">Team</h2>
      <div class="cards">
        <transition appear appear-active-class="animated flipInX">
          <a class="card card-1" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
            <img
              src="@/assets/slack.png"
              class="card-header"
              :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
            />
            <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Slack</h3>
            <p
              :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
            >Messaging app for all team communication.</p>
          </a>
        </transition>
        <transition appear appear-active-class="animated flipInX">
          <a class="card card-2" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
            <img
              src="@/assets/notion.png"
              class="card-header"
              :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
            />
            <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Notion</h3>
            <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">All-in-one workspace.</p>
          </a>
        </transition>
        <transition appear appear-active-class="animated flipInX">
          <a class="card card-3" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
            <img
              src="@/assets/figma.png"
              class="card-header"
              :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
            />
            <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Figma</h3>
            <p
              :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
            >Collaborative design tool.</p>
          </a>
        </transition>
        <transition appear appear-active-class="animated flipInX">
          <a class="card card-4" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
            <img
              src="@/assets/contentful.png"
              class="card-header"
              :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
            />
            <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Contentful</h3>
            <p
              :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
            >Content management system.</p>
          </a>
        </transition>
        <transition appear appear-active-class="animated flipInX">
          <a class="card card-5" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
            <img
              src="@/assets/dropbox.png"
              class="card-header"
              :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
            />
            <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Dropbox</h3>
            <p
              :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
            >Storage space in the cloud.</p>
          </a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Team",
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 10%;
}

.cards {
  margin: 0 -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.light-card {
  background: $white;
  box-shadow: 0px 15px 30px rgba(103, 110, 144, 0.15);
  scale: 1;

  &:hover {
    transition: 0.5s cubic-bezier(0.2, 0.2, 0.8, 1);
    box-shadow: 0 4px 4px rgba(103, 110, 144, 0.05),
      0 2px 2px rgba(103, 110, 144, 0.05);
    scale: 2;
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  scale: 1;

  &:hover {
    transition: 0.5s cubic-bezier(0.2, 0.2, 0.8, 1);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25);
    scale: 2;
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h2.dark {
  @include heading-3(black);
}

h2.light {
  @include heading-3(white);
}

h3 {
  @include heading-4;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
</style>
