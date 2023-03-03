<script>
    export let video;
    
    function handleClick(copyText) {
    navigator.clipboard.writeText(copyText);
    alert("Copied");
}
</script>
 
 <video class="video" width="320" height="240" muted="muted">
    <source src={video.src + '#t=0.4'} type="video/mp4">
  Your browser does not support the video tag.
  </video>

  <div>
    {video.src}
    <button on:click={() => handleClick(video.src)}>Copy text</button>
  </div>