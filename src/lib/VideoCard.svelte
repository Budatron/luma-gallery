<script>
    import Lazy from 'svelte-lazy';
    export let video;
    
    function handleClick(copyText) {
    navigator.clipboard.writeText(copyText);
    alert("Copied");
}

let videoName = video.src.split('/').pop().split(".").slice(0, -1).join(".");

function onLoad (node) {
  setTimeout(() => {
    const video = node.querySelector('video');
  
    video.addEventListener('mouseover', function() {
        this.currentTime = 0;
        this.play();
    });
      
      video.addEventListener('mouseleave', function() {
        this.pause();
        this.currentTime = 0.6;
      });
  }, 3000);


}
</script>

  <article class="w3-col s5 m4 l3 w3-container w3-margin-bottom">
    <Lazy height={200} onload={(node) => {onLoad(node)}}>
      <video class="video" poster="/loading.gif" width="100%" height="auto" muted="muted" loop="false">
        <source class="" src={'https://templates.shotstack.io/basic/asset/video/luma/' + video.src + '#t=0.5'} type="video/mp4">
      Your browser does not support the video tag.
      </video>
    </Lazy>
    
    <footer class="w3-container w3-white">
      <p class="w3-monospace card-content"><b>{videoName}</b></p>
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

    article {
      min-width: 220px;
    }

    video{
      background: lightgray;
    }


  </style>