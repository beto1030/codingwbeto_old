"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[953],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return P},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(72),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=s(e,f);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,o({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=s(e,w);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var L,k,C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:C},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],T=new Set,z=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,x),v=i.width,y=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,w),E=b.style,C=b.className,S=s(b,N),z=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,v,y);return(0,r.useEffect)((function(){L||(L=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=z.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(_)):k&&T.has(_)?void 0:(L.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;z.current&&(z.current.innerHTML=r(o({isLoading:!0,isLoaded:T.has(_),image:i},h)),T.has(_)||(e=requestAnimationFrame((function(){z.current&&(t=n(z.current,_,T,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(_)&&k&&(z.current.innerHTML=k(o({isLoading:T.has(_),isLoaded:T.has(_),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},S,{style:o({},E,c,{backgroundColor:d}),className:C+(u?" "+u:""),ref:z,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));_.propTypes=S,_.displayName="GatsbyImage";var O,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:C,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(O=_,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,A);return n&&console.warn(n),a?r.createElement(O,o({image:a},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=M},4915:function(e,t,a){var r=a(7294),n=a(1597),i=a(3723);t.Z=function(){var e,t,o=(0,n.useStaticQuery)("3257411868"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/santa-cruz2.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8974)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name),(null==s?void 0:s.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},"Follow me on Twitter")))}},5991:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(1597);function i(){return r.createElement("nav",{className:"my-4 d-flex justify-content-between"},r.createElement(n.Link,{className:"header-link-home",to:"/"},"codingwbeto"),r.createElement("div",{className:"links"},r.createElement(n.Link,{className:"header-link-home",to:"/"},"Home"),r.createElement(n.Link,{className:"header-link-home",to:"/about"},"About"),r.createElement(n.Link,{className:"header-link-home",to:"/geology"},"Geology")))}var o=function(e){var t=e.location,a=e.title,o=e.children,s="/reponame/"===t.pathname;return s?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},a)):r.createElement(n.Link,{className:"header-link-home",to:"/"},a),r.createElement("div",{className:"container","data-is-root-path":s},r.createElement(i,null),r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear()," Alberto Alvarado"))}},1755:function(e,t,a){var r=a(7294),n=a(1597),i=function(e){var t,a,i,o=e.description,s=(e.lang,e.title),l=e.children,c=(0,n.useStaticQuery)("2841359383").site,d=o||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?s+" | "+u:s),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:d}),l)};i.defaultProps={description:""},t.Z=i},8974:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#c8c8b8","images":{"fallback":{"src":"/reponame/static/8afe3c52c09aadd92133e1ca589402c4/e5610/santa-cruz2.png","srcSet":"/reponame/static/8afe3c52c09aadd92133e1ca589402c4/e5610/santa-cruz2.png 50w,\\n/reponame/static/8afe3c52c09aadd92133e1ca589402c4/e9b55/santa-cruz2.png 100w","sizes":"50px"},"sources":[{"srcSet":"/reponame/static/8afe3c52c09aadd92133e1ca589402c4/d4bf4/santa-cruz2.avif 50w,\\n/reponame/static/8afe3c52c09aadd92133e1ca589402c4/ee81f/santa-cruz2.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/reponame/static/8afe3c52c09aadd92133e1ca589402c4/3faea/santa-cruz2.webp 50w,\\n/reponame/static/8afe3c52c09aadd92133e1ca589402c4/6a679/santa-cruz2.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cfa7289549631f7bc88b5f75d05e04f4a9929ba2-9d82993d84843d1e9c65.js.map