(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3dzV":function(e,t,a){e.exports={hero:"hero-module--hero--S__gH",heroImage:"hero-module--heroImage--DciWV",heroDetails:"hero-module--heroDetails--3uv8x",heroHeadline:"hero-module--heroHeadline--jhgHQ",heroTitle:"hero-module--heroTitle--2LulU"}},"D1b+":function(e,t,a){e.exports={previewTitle:"article-preview-module--previewTitle--16pYm",tag:"article-preview-module--tag--27JAs"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));a("/SS/"),a("bWfx");var r=a("q1tI"),l=a.n(r),n=a("mwIZ"),o=a.n(n),i=a("qhky"),c=(a("f3/d"),a("9eSz")),s=a.n(c),m=a("3dzV"),u=a.n(m),p=function(e){var t=e.data;return l.a.createElement("div",{className:u.a.hero},l.a.createElement(s.a,{className:u.a.heroImage,alt:t.name,fluid:t.heroImage.fluid}),l.a.createElement("div",{className:u.a.heroDetails},l.a.createElement("h3",{className:u.a.heroHeadline},t.name),l.a.createElement("p",{className:u.a.heroTitle},t.title),l.a.createElement("p",null,t.shortBio.shortBio)))},d=a("Bl7J"),h=a("aWpR");function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,f(t,a),r.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.allContentfulBlogPost.edges"),a=o()(this,"props.data.allContentfulPerson.edges")[0];return l.a.createElement(d.a,{location:this.props.location},l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement(i.a,{title:e}),l.a.createElement(p,{data:a.node}),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"section-headline"},"Recent articles"),l.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.slug},l.a.createElement(h.a,{article:t}))}))))))},r}(l.a.Component),v=(t.default=E,"1130537188")},aWpR:function(e,t,a){"use strict";var r=a("q1tI"),l=a.n(r),n=a("Wbzz"),o=a("9eSz"),i=a.n(o),c=a("D1b+"),s=a.n(c);t.a=function(e){var t=e.article;return l.a.createElement("div",{className:s.a.preview},l.a.createElement(i.a,{alt:"",fluid:t.heroImage.fluid}),l.a.createElement("h3",{className:s.a.previewTitle},l.a.createElement(n.a,{to:"/blog/"+t.slug},t.title)),l.a.createElement("small",null,t.publishDate),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f0aef7d0b19f81040f08.js.map