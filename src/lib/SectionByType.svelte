<script>
    import VideoCard from "$lib/VideoCard.svelte";
    export let luma;
</script>


 <section>
    <h4>{luma.type}</h4>
    {#each luma.videos as video}
        <VideoCard {video}/> 
    {/each}
</section> 
