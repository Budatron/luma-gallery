<script>
    import VideoCard from "$lib/VideoCard.svelte";
    export let luma;
</script>


 <section >
    <div class="w3-container" id={luma.type}>
        <header class="w3-container">
            <h3>{luma.type}</h3>
        </header>
        <div class="w3-row-padding">
            {#each luma.videos as video}
                <VideoCard {video}/> 
            {/each}
        </div>
    </div>
</section> 
