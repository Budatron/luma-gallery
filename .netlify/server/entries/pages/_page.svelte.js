import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, m as missing_component, f as each } from "../../chunks/index.js";
const placeholderClass = "svelte-lazy-placeholder";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = null } = $$props;
  let { placeholderProps = null } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderProps === void 0 && $$bindings.placeholderProps && placeholderProps !== void 0)
    $$bindings.placeholderProps(placeholderProps);
  return `${placeholder ? `<div${add_attribute("class", placeholderClass, 0)}>${typeof placeholder === "string" ? `<div>${escape(placeholder)}</div>` : `${["function", "object"].includes(typeof placeholder) ? `${validate_component(placeholder || missing_component, "svelte:component").$$render($$result, Object.assign({}, placeholderProps), {}, {})}` : ``}`}</div>` : ``}`;
});
const Src = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 0 } = $$props;
  let { offset = 150 } = $$props;
  let { fadeOption = { delay: 0, duration: 400 } } = $$props;
  let { resetHeightDelay = 0 } = $$props;
  let { onload = null } = $$props;
  let { placeholder = null } = $$props;
  let { placeholderProps = null } = $$props;
  let { class: className = "" } = $$props;
  const rootClass = "svelte-lazy" + (className ? " " + className : "");
  const rootInitialHeight = getStyleHeight();
  function getStyleHeight() {
    return typeof height === "number" ? height + "px" : height;
  }
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.fadeOption === void 0 && $$bindings.fadeOption && fadeOption !== void 0)
    $$bindings.fadeOption(fadeOption);
  if ($$props.resetHeightDelay === void 0 && $$bindings.resetHeightDelay && resetHeightDelay !== void 0)
    $$bindings.resetHeightDelay(resetHeightDelay);
  if ($$props.onload === void 0 && $$bindings.onload && onload !== void 0)
    $$bindings.onload(onload);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderProps === void 0 && $$bindings.placeholderProps && placeholderProps !== void 0)
    $$bindings.placeholderProps(placeholderProps);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", rootClass, 0)} style="${"height: " + escape(rootInitialHeight, true)}">${`${placeholder ? `${validate_component(Placeholder, "Placeholder").$$render($$result, { placeholder, placeholderProps }, {}, {})}` : ``}`}
</div>`;
});
const VideoCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-content.svelte-12pwclo{height:40px}footer.svelte-12pwclo{margin-top:-7px}article.svelte-12pwclo{min-width:220px}video.svelte-12pwclo{background:lightgray}",
  map: null
};
function onLoad(node) {
  setTimeout(
    () => {
      const video = node.querySelector("video");
      video.addEventListener("mouseover", function() {
        this.currentTime = 0;
        this.play();
      });
      video.addEventListener("mouseleave", function() {
        this.pause();
        this.currentTime = 0.6;
      });
    },
    3e3
  );
}
const VideoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { video } = $$props;
  let videoName = video.src.split("/").pop().split(".").slice(0, -1).join(".");
  if ($$props.video === void 0 && $$bindings.video && video !== void 0)
    $$bindings.video(video);
  $$result.css.add(css$1);
  return `<article class="${"w3-col s5 m4 l3 w3-container w3-margin-bottom svelte-12pwclo"}">${validate_component(Src, "Lazy").$$render(
    $$result,
    {
      height: 200,
      onload: (node) => {
        onLoad(node);
      }
    },
    {},
    {
      default: () => {
        return `<video class="${"video svelte-12pwclo"}" poster="${"/loading.gif"}" width="${"100%"}" height="${"auto"}" muted="${"muted"}" loop="${"false"}"><source class="${""}"${add_attribute("src", "https://templates.shotstack.io/basic/asset/video/luma/" + video.src + "#t=0.5", 0)} type="${"video/mp4"}">
      Your browser does not support the video tag.
      </video>`;
      }
    }
  )}
    
    <footer class="${"w3-container w3-white svelte-12pwclo"}"><p class="${"w3-monospace card-content svelte-12pwclo"}"><b>${escape(videoName)}</b></p>
    <p><button class="${"w3-button w3-dark-grey w3-small w3-padding-small"}"><i class="${"fa fa-copy w3-margin-right"}"></i>Copy link</button></p></footer>
  </article>`;
});
const SectionByType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { luma } = $$props;
  if ($$props.luma === void 0 && $$bindings.luma && luma !== void 0)
    $$bindings.luma(luma);
  return `<section><div class="${"w3-container"}"${add_attribute("id", luma.type, 0)}><header class="${"w3-container"}"><h3>${escape(luma.type)}</h3></header>
        <div class="${"w3-row-padding"}">${each(luma.videos, (video) => {
    return `${validate_component(VideoCard, "VideoCard").$$render($$result, { video }, {}, {})}`;
  })}</div></div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'html{scroll-behavior:smooth}body.svelte-1ojg7tv{position:absolute}body.svelte-1ojg7tv,h1.svelte-1ojg7tv,h4.svelte-1ojg7tv,h5.svelte-1ojg7tv{font-family:"Raleway", sans-serif}.logo-header.svelte-1ojg7tv{width:120px}.logo-footer.svelte-1ojg7tv{margin-left:10px;width:80px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1q1yvi0_START --><link rel="${"stylesheet"}" href="${"https://www.w3schools.com/w3css/4/w3.css"}"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Raleway"}"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}"><!-- HEAD_svelte-1q1yvi0_END -->`, ""}


<body id="${"body"}" class="${"w3-light-grey w3-content svelte-1ojg7tv"}" style="${"max-width:1600px"}">
<nav class="${"w3-sidebar w3-collapse w3-white w3-animate-left"}" style="${"z-index:3;width:300px;"}" id="${"mySidebar"}"><br>
    <div class="${"w3-container"}"><a href="${"#"}" class="${"w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"}" title="${"close menu"}"><i class="${"fa fa-remove"}"></i></a>
      <h4 class="${"svelte-1ojg7tv"}"><b>Category</b></h4></div>
    <div class="${"w3-bar-block"}"><a href="${"#body"}" class="${"w3-bar-item w3-button w3-padding w3-text-gray"}"><i class="${"fa fa-home fa-fw w3-margin-right"}"></i>top</a> 

        ${each(data.lumas, (luma) => {
    return `<a href="${"#" + escape(luma.type, true)}" class="${"w3-bar-item w3-button w3-padding w3-text-gray"}"><i class="${"fa fa-th-large fa-fw w3-margin-right"}"></i>${escape(luma.type)}</a>`;
  })}</div></nav>

  
<div class="${"w3-overlay w3-hide-large w3-animate-opacity"}" onclick="${"w3_close()"}" style="${"cursor:pointer"}" title="${"close side menu"}" id="${"myOverlay"}"></div>


<div class="${"w3-main"}" style="${"margin-left:300px"}"><header class="${"headings container"}" style="${"margin: 20px auto 0 ; pading: 20px; width: 700px;"}"><span class="${"w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"}"><i class="${"fa fa-bars"}"></i></span>
        <div class="${"w3-container"}"><img class="${"logo-header svelte-1ojg7tv"}" src="${"https://drive.google.com/uc?export=download&id=0B2KyibKtouxNVng0X2ZUYnktVUU"}" alt="${"tamanec"}">
            <hgroup><h1 style="${"text-align: center;"}" class="${"svelte-1ojg7tv"}">Luma Transitions</h1>
                <h5 style="${"text-align: center;"}" class="${"svelte-1ojg7tv"}">Scroll through the page and hover your mouse to preview the templates animations.</h5></hgroup></div></header>
   
    
  <div class="${"w3-container"}">${each(data.lumas, (luma) => {
    return `${validate_component(SectionByType, "SectionByType").$$render($$result, { luma }, {}, {})}`;
  })}</div>
       
    
    
  <footer class="${"w3-container w3-padding-32 w3-dark-grey"}">
    
    <div class="${"w3-black w3-center w3-padding-24"}">Powered by <a href="${"xamantechmail@gmail.com"}" title="${"Xamantec"}" target="${"_blank"}" class="${"w3-hover-opacity"}"><img class="${"logo-footer svelte-1ojg7tv"}" src="${"https://drive.google.com/uc?export=download&id=0B2KyibKtouxNVng0X2ZUYnktVUU"}" alt="${"xamanec"}"></a></div></footer></div>
    
</body>`;
});
export {
  Page as default
};
