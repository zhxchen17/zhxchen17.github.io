"use strict";(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[989],{1496:function(e,t,a){var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),l=r(a(5354)),s=r(a(7316)),d=r(a(7154)),o=r(a(7294)),u=r(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=g(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(C,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),C=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,m=(0,s.default)(e,c);return o.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:u,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=g(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,x=g||h;if(!x)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,d.default)({opacity:O?1:0,transition:k?"opacity "+v+"ms":"none"},s),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},k&&P,s,c),W={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:S},j=this.state.isHydrated?m(x):x[0];if(g)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&P)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:R}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,w(x),o.default.createElement(C,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,d.default)({alt:a,title:t,loading:E},j,{imageVariants:x}))}}));if(h){var Z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete Z.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:Z,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},N&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},k&&P)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:R}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,w(x),o.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,d.default)({alt:a,title:t,loading:E},j,{imageVariants:x}))}}))}return null},t}(o.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:H,sizes:N,fixed:P(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:P(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=k;t.Z=T},9535:function(e,t,a){var r=a(7294),i=a(5444);t.Z=function(){var e,t=(0,i.useStaticQuery)("104267996").author,a=null==t||null===(e=t.avatar)||void 0===e?void 0:e.url;return r.createElement("div",{className:"bio"},a&&r.createElement("img",{alt:(null==t?void 0:t.firstName)||"",className:"bio-avatar",src:a}),(null==t?void 0:t.firstName)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,t.firstName)," ",(null==t?void 0:t.description)||null," ",(null==t?void 0:t.twitter)&&r.createElement("a",{href:"https://twitter.com/"+((null==t?void 0:t.twitter)||"")},"You should follow them on Twitter")))}},4870:function(e,t,a){a.r(t);var r=a(7294),i=a(5444),n=a(1496),l=a(3310),s=a(9535),d=a(7198),o=a(6179);t.default=function(e){var t,a,u,c,f,p,g=e.data,m=g.previous,h=g.next,b=g.post,v={fluid:null===(t=b.featuredImage)||void 0===t||null===(a=t.node)||void 0===a||null===(u=a.localFile)||void 0===u||null===(c=u.childImageSharp)||void 0===c?void 0:c.fluid,alt:(null===(f=b.featuredImage)||void 0===f||null===(p=f.node)||void 0===p?void 0:p.alt)||""};return r.createElement(d.Z,null,r.createElement(o.Z,{title:b.title,description:b.excerpt}),r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},(0,l.ZP)(b.title)),r.createElement("p",null,b.date),(null==v?void 0:v.fluid)&&r.createElement(n.Z,{fluid:v.fluid,alt:v.alt,style:{marginBottom:50}})),!!b.content&&r.createElement("section",{itemProp:"articleBody"},(0,l.ZP)(b.content)),r.createElement("hr",null),r.createElement("footer",null,r.createElement(s.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,m&&r.createElement(i.Link,{to:m.uri,rel:"prev"},"← ",(0,l.ZP)(m.title))),r.createElement("li",null,h&&r.createElement(i.Link,{to:h.uri,rel:"next"},(0,l.ZP)(h.title)," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-df857130707828e3eb43.js.map