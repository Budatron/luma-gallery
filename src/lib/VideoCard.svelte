<script>
    export let video;
    
    function handleClick(copyText) {
    navigator.clipboard.writeText(copyText);
    alert("Copied");
}
</script>
 <!-- <template>
    <div class="skeleton" width="320" height="240" ></div>
 </template> -->

  <article class="w3-col s5 m4 l3 w3-container w3-margin-bottom">
    <video  class="video lazy" width="100%" height="auto" poster="https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img_width=320_height=240.png" muted="false" loop="false">
      <source class="skeleton" src={'https://templates.shotstack.io/basic/asset/video/luma/' + video.src + '#t=0.5'} type="video/mp4">
    Your browser does not support the video tag.
    </video>
    <footer class="w3-container w3-white">
      <p class="w3-monospace card-content"><b>{video.src.split('/').pop().split(".").slice(0, -1).join(".")}</b></p>
    <p><button class="w3-button w3-dark-grey w3-small w3-padding-small"  on:click={() => handleClick('https://templates.shotstack.io/basic/asset/video/luma/' + video.src)}><i class="fa fa-copy w3-margin-right"></i>Copy link</button></p>
    </footer>
  </article>

  <style>
    .card-content {
      height: 40px;
    }
    footer {
      margin-top: -7px;
    }
  </style>