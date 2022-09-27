<template>
  <div>
    <video
      id="example_video_1"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="1280"
      height="720"
      poster="http://vjs.zencdn.net/v/oceans.png"
      data-setup="{}"
    >
      <source src="rtsp://admin:admin@10.136.26.200:554/live/0">
    </video>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {};
  },
  mounted() {
    this.playervideo("example_video_1");
  },
  methods: {
    playervideo(id) {
      var player = this.$video(id, {}, function onPlayerReady() {
        this.play();
        this.on("ended", function() {
          console.log("Awww...over so soon?!");
        });
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
