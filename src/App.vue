<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm
    :openCloseForm="openCloseForm"
    :reloadTweets="reloadTweets"
    :showForm="showForm"
  />
  <TweetList :reloadTweets="reloadTweets" :tweets="tweets" />
</template>

<script>
import { ref } from "vue";
import Menu from "./components/Menu.vue";
import TweetForm from "./components/TweetForm.vue";
import TweetList from "./components/TweetList.vue";
import { getTweetsApi } from "./api/tweet";
import useFormTweet from "./hooks/useFormTweet";

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    };
    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss">
</style>
