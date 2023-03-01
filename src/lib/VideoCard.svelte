<script>
    export let video = {src: 'https://joy1.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0983_preview.mp4'};
    console.log(video);
</script>

<video width="320" height="240" controls>
    <source src={video.src} type="video/mp4">
  Your browser does not support the video tag.
  </video>