<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import SectionByType from "$lib/SectionByType.svelte";
    import { onMount } from "svelte";

    let lumas = [
        {type: 'circles', videos: [
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'},
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'}]},
        {type: 'bars', videos: [
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'},
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'}]},
        {type: 'squares', videos: [
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'},
            {src: 'https://templates.shotstack.io/basic/asset/video/luma/abstract/full-screen-abstract-01.mp4'}]}
            
        ]
     
        onMount(() => {
            const divs = document.querySelectorAll('.video');

            divs.forEach(el => el.addEventListener('mouseover', function() {
                this.currentTime = 0;
                this.play();
            }));

            divs.forEach(el => el.addEventListener('mouseleave', function() {
                this.pause();
                this.currentTime = 0.4;
            }));

        })
        

       
</script>

<div class="headings" style="margin: 20px auto 0 ; pading: 20px; width: 700px;">
    <img src="https://drive.google.com/uc?export=download&id=0B2KyibKtouxNVng0X2ZUYnktVUU" alt="tamanec">
    <h1 style="text-align: center;">Luma Templates</h1>
    <h5 style="text-align: center;">Scroll through the page and preview the templates. Use the filter to improve your search.</h5>
    <p>filter</p>

    {#each lumas as luma}
        <SectionByType {luma} />
    {/each}
    
</div>

<style>
    div * {
        font-family: 'Golos Text', sans-serif !important; 
    }
    img {
        width: 140px;
    }
</style>