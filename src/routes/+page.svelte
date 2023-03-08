<svelte:head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</svelte:head>

<script>
    import SectionByType from "$lib/SectionByType.svelte";
    import { onMount } from "svelte";

    export let data;
    //console.log(data)

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }
    
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
        
    onMount(() => {


    })
        

       
</script>
<body id="body" class="w3-light-grey w3-content" style="max-width:1600px">

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
    <div class="w3-container">
      <a href="#" on:click={w3_close} class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
        <i class="fa fa-remove"></i>
      </a>
      <h4><b>Category</b></h4>
    </div>
    <div class="w3-bar-block">

        <a href="#body"  on:click={w3_close} class="w3-bar-item w3-button w3-padding w3-text-gray"><i class="fa fa-home fa-fw w3-margin-right"></i>top</a> 

        {#each data.lumas as luma}
        <a href="#{luma.type}"  on:click={w3_close} class="w3-bar-item w3-button w3-padding w3-text-gray"><i class="fa fa-th-large fa-fw w3-margin-right"></i>{luma.type}</a> 
        {/each}
    </div>
  </nav>

  <!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">
    <header class="headings container" style="margin: 20px auto 0 ; pading: 20px; width: 700px;">
        <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" on:click={w3_open}><i class="fa fa-bars"></i></span>
        <div class="w3-container">
            <img class="logo-header" src="https://drive.google.com/uc?export=download&id=0B2KyibKtouxNVng0X2ZUYnktVUU" alt="tamanec">
            <hgroup>
                <h1 style="text-align: center;">Luma Transitions</h1>
                <h5 style="text-align: center;">Scroll through the page and hover your mouse to preview the templates animations.</h5>
            </hgroup>
        </div>
    
    </header>
   
    <!-- First Photo Grid-->
  <div class="w3-container">
    {#each data.lumas as luma}
        <SectionByType {luma} />
    {/each}
  </div>
       
    
    
  <footer class="w3-container w3-padding-32 w3-dark-grey">
    <!-- <div class="w3-row-padding">
      <div class="w3-third">
        <h3>FOOTER</h3>
       
      </div>
    
      <div class="w3-third">
        <h3>BLOG POSTS</h3>
       
      </div>
  
      <div class="w3-third">
        <h3>POPULAR LINKS</h3>
        <p>
            <a href="https://shotstack.io/" title="W3.CSS" target="_blank" class="w3-hover-opacity">
                ShotStack
            </a>
        </p>
      </div>
  
    </div> -->
    
    <div class="w3-black w3-center w3-padding-24">Powered by <a href="xamantechmail@gmail.com" title="Xamantec" target="_blank" class="w3-hover-opacity">
        <img class="logo-footer" src="https://drive.google.com/uc?export=download&id=0B2KyibKtouxNVng0X2ZUYnktVUU" alt="xamanec">
    </a></div>
    </footer>
</div>
    
</body>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
    /* div * {
        font-family: 'Golos Text', sans-serif !important; 
    } */
    .logo-header {
      width: 120px;
    }

    nav {
      top: 0px;
    }

    .logo-footer {
        margin-left: 10px;
        width: 80px;
    }

  
</style>