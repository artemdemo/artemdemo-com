(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(79)).default.div.withConfig({displayName:"SecondaryText",componentId:"gvqirs-0"})(["font-size:85%;margin-bottom:10px;opacity:0.5;transition:300ms;&:hover{opacity:1;}"]);t.default=r},121:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(110));var l=e=>r.default.createElement(i.default,null,e.children);t.default=l},122:function(e,t,n){var a=n(123)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},123:function(e,t,n){var a=n(124),r=n(125),i=n(128),l=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(r(t).replace(l,"")),e,"")}}},124:function(e,t){e.exports=function(e,t,n,a){var r=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},125:function(e,t,n){var a=n(126),r=n(100),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,a).replace(l,"")}},126:function(e,t,n){var a=n(127)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},127:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},128:function(e,t,n){var a=n(129),r=n(130),i=n(100),l=n(131);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?l(e):a(e):e.match(t)||[]}},129:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},130:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},131:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+l+"|"+o+")",s="(?:"+f+"|"+o+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,d].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),g="(?:"+[i,u,d].join("|")+")"+m,x=RegExp([f+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,f,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,f+c,"$"].join("|")+")",f+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,g].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},439:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(3)),l=n(76),o=a(n(79));n(440);const u=o.default.div.withConfig({displayName:"BinaryPagination__PaginationContainerSty",componentId:"sc-1j8x01y-0"})(["&::after{content:'';display:table;clear:both;}@media (max-width:768px){text-align:center;}"]),d=o.default.div.withConfig({displayName:"BinaryPagination__PaginationItemSty",componentId:"sc-1j8x01y-1"})([""," "," @media (max-width:768px){float:initial;display:inline-block;width:51%;}"],e=>e.left&&"\n        float: left;    \n    ",e=>e.right&&"\n        float: right;\n    ");class f extends r.default.PureComponent{renderPrev(){const{previous:e}=this.props;if(e&&null!=e.slug){const t=e.title||e.slug;return r.default.createElement("ul",{className:"pagination binary-pagination"},r.default.createElement("li",{className:"page-item"},r.default.createElement(l.Link,{className:"page-link binary-pagination-link",to:e.slug,rel:"prev"},"← ",t)))}return null}renderNext(){const{next:e}=this.props;if(e&&null!=e.slug){const t=e.title||e.slug;return r.default.createElement("ul",{className:"pagination binary-pagination"},r.default.createElement("li",{className:"page-item"},r.default.createElement(l.Link,{className:"page-link binary-pagination-link",to:e.slug,rel:"next"},t," →")))}return null}render(){return r.default.createElement(u,null,r.default.createElement(d,{left:!0},this.renderPrev()),r.default.createElement(d,{right:!0},this.renderNext()))}}f.propTypes={previous:i.default.shape({slug:i.default.string,title:i.default.string}),next:i.default.shape({slug:i.default.string,title:i.default.string})},f.defaultProps={previous:null,next:null};var c=f;t.default=c},440:function(e,t,n){},442:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(3)),l=n(76),o=a(n(79)),u=a(n(110)),d=n(94);const f=o.default.div.withConfig({displayName:"PostTags__PostTagsItemSty",componentId:"sc-8r4n58-0"})(["display:inline-block;margin-right:5px;&::after{content:',';}&:last-of-type::after{content:'';}"]),c=e=>{const{tags:t}=e;return 0===t.length?null:r.default.createElement(u.default,null,"Tags: ",t.map(e=>r.default.createElement(f,{key:`post-tags-${(0,d.normalizeTag)(e)}`},r.default.createElement(l.Link,{to:`/tags/${(0,d.normalizeTag)(e)}`},e))))};c.propTypes={tags:i.default.arrayOf(i.default.string)},c.defaultProps={tags:[]};var s=c;t.default=s},443:function(e,t,n){},65:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=t.default=void 0;var i=r(n(0)),l=r(n(92)),o=r(n(88)),u=r(n(439)),d=r(n(121)),f=r(n(442)),c=a(n(94));n(443);var s=class extends i.default.Component{renderPagination(){const{previous:e,next:t}=this.props.pageContext,n=(0,l.default)(e,"fields.slug",null),a=(0,l.default)(t,"fields.slug",null);return i.default.createElement(u.default,{previous:{slug:n?c.prefixBlog(n):null,title:(0,l.default)(e,"frontmatter.title",null)},next:{slug:a?c.prefixBlog(a):null,title:(0,l.default)(t,"frontmatter.title",null)}})}render(){const e=this.props.data.markdownRemark,t=(0,l.default)(this.props,"data.site.siteMetadata.title"),n=(0,l.default)(this.props,"data.markdownRemark.frontmatter.tags",[]),a=e.excerpt;return i.default.createElement(o.default,{title:`${e.frontmatter.title} | ${t}`,description:a,metaTitle:t,location:this.props.location},i.default.createElement("h1",null,e.frontmatter.title),i.default.createElement(d.default,null,e.frontmatter.date),i.default.createElement(f.default,{tags:n}),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.default.createElement("hr",null),this.renderPagination())}};t.default=s;t.pageQuery="2565676383"},76:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"waitForRouteChange",{enumerable:!0,get:function(){return u.waitForRouteChange}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return f.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var i=r(n(0)),l=r(n(3)),o=a(n(97)),u=n(24),d=r(n(86)),f=r(n(25));const c=i.default.createContext({});t.StaticQueryContext=c;const s=e=>i.default.createElement(c.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)"));t.StaticQuery=s,s.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},77:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.locationProp=void 0;var r=a(n(3));const i=r.default.shape({pathname:r.default.string});t.locationProp=i},78:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0));var i=e=>r.default.createElement("div",{className:"container"},e.children);t.default=i},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFix=t.resetUl=t.resetButton=void 0;t.resetButton="\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    cursor: pointer;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n\n    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    /* Corrects inability to style clickable `input` types in iOS */\n    -webkit-appearance: none;\n";t.resetUl="\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n";t.clearFix="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n"},86:function(e,t,n){e.exports=(e=>e&&e.default||e)(n(87))},87:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(3)),l=a(n(26)),o=a(n(4));const u=({location:e})=>{const t=o.default.getResourcesForPathnameSync(e.pathname);return r.default.createElement(l.default,{key:e.pathname,location:e,pageResources:t,...t.json})};u.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var d=u;t.default=d},88:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(3)),l=a(n(98)),o=a(n(78)),u=a(n(89)),d=n(77);class f extends r.default.Component{render(){const{title:e,description:t,location:n}=this.props;return r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),r.default.createElement(u.default,{location:n}),r.default.createElement(o.default,null,this.props.children))}}f.propTypes={location:d.locationProp,title:i.default.string.isRequired,description:i.default.string.isRequired,metaTitle:i.default.string.isRequired},f.defaultProps={location:{}};var c=f;t.default=c},89:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),l=r(n(79)),o=n(76),u=r(n(90)),d=r(n(78)),f=n(77),c=a(n(80));const s=l.default.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),p=l.default.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),m=l.default.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],e=>e.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",e=>e.menu&&`\n        ${c.clearFix}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),g=l.default.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),x=l.default.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),h=(0,l.default)(o.Link).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),v=e=>{const{location:t}=e;return i.default.createElement(s,null,i.default.createElement(d.default,null,i.default.createElement(p,null,i.default.createElement(m,{logo:!0},i.default.createElement(h,{to:"/"},"Artem Demo, frontend dev.")),i.default.createElement(m,{menu:!0},i.default.createElement(g,null,i.default.createElement(u.default,{location:t})))),i.default.createElement(x,null)))};v.propTypes={location:f.locationProp},v.defaultProps={location:{}};var y=v;t.default=y},90:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),l=r(n(79)),o=n(76),u=n(77),d=a(n(80));const f=l.default.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],d.clearFix,d.resetUl),c=l.default.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],e=>e.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),s=(0,l.default)(o.Link).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),p=e=>{const{location:t}=e;return i.default.createElement(f,null,i.default.createElement(c,{active:"/"===t.pathname||t.pathname.startsWith("/blog")},i.default.createElement(s,{to:"/"},"Blog")),i.default.createElement(c,{active:t.pathname.startsWith("/about")},i.default.createElement(s,{to:"/about"},"About")),i.default.createElement(c,{active:t.pathname.startsWith("/contact")},i.default.createElement(s,{to:"/contact"},"Contact me")))};p.propTypes={location:u.locationProp},p.defaultProps={location:{}};var m=p;t.default=m},94:function(e,t,n){const a=n(95),r=n(122);t.POSTS_PER_PAGE=10;const i=(e,t)=>{const n=a(t)&&t.startsWith("/")?t.substr(1):t;return""===n||null==n?e:`${e}/${n}`};t.prefixBlog=(e=>i("/blog",e)),t.prefixTag=((e,t)=>i("/tags",i(e,t))),t.normalizeTag=(e=>r(e))}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-6ca8409ac3b341fe4896.js.map