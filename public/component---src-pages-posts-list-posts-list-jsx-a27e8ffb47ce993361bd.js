(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{105:function(e,t,n){"use strict";const a=n(75).a.div.withConfig({displayName:"SecondaryText",componentId:"gvqirs-0"})(["font-size:85%;margin-bottom:10px;opacity:0.5;transition:300ms;&:hover{opacity:1;}"]);t.a=a},113:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},118:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(105);t.a=(e=>r.a.createElement(o.a,null,e.children))},119:function(e,t,n){var a=n(120)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},120:function(e,t,n){var a=n(121),r=n(122),o=n(125),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(r(t).replace(i,"")),e,"")}}},121:function(e,t){e.exports=function(e,t,n,a){var r=-1,o=null==e?0:e.length;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}},122:function(e,t,n){var a=n(123),r=n(95),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,a).replace(i,"")}},123:function(e,t,n){var a=n(124)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},124:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},125:function(e,t,n){var a=n(126),r=n(127),o=n(95),i=n(128);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?r(e)?i(e):a(e):e.match(t)||[]}},126:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},127:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},128:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+i+"|"+s+")",d="(?:"+u+"|"+s+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",f="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,c].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),g="(?:"+[o,l,c].join("|")+")"+f,h=RegExp([u+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,u,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,u+p,"$"].join("|")+")",u+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,g].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(85),i=n.n(o),s=n(82),l=n(74),c=n(86);t.default=class extends r.a.PureComponent{constructor(e){super(e),this.contentMd=null,this.state={content:null}}componentDidMount(){this.contentMd&&Object(c.a)(this.contentMd).then(e=>this.setState({content:e}))}parentWrapper(e){const t=i()(this.props,"data.site.siteMetadata.title",null),n=i()(this.props,"data.site.siteMetadata.description",null);return this.props.location&&t&&n?r.a.createElement(s.a,{title:t,metaTitle:t,description:n,location:this.props.location},e):r.a.createElement(l.a,null,e)}renderBeforeContent(){return null}renderAfterContent(){return null}render(){return this.parentWrapper(r.a.createElement(r.a.Fragment,null,this.renderBeforeContent(),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),this.renderAfterContent()))}}},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(85),i=n.n(o),s=n(3),l=n.n(s),c=n(73),u=n(75),p=n(118),d=n(89),m=n(86);n(57);const f=u.a.div.withConfig({displayName:"PostsItem__PostItemSty",componentId:"sc-1fceitp-0"})(["margin-bottom:30px;"]);class g extends r.a.PureComponent{constructor(e){super(e),this.state={content:null}}componentDidMount(){const e=i()(this.props,"node.excerpt");e&&Object(m.a)(e).then(e=>this.setState({content:e}))}render(){const{node:e}=this.props;if(!e)return null;const t=i()(e,"frontmatter.title")||e.fields.slug;return r.a.createElement(f,null,r.a.createElement("h2",null,r.a.createElement(c.a,{to:d.prefixBlog(e.fields.slug)},t)),r.a.createElement(p.a,null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.content}}))}}g.propTypes={node:l.a.shape({})},g.defaultProps={node:null};var h=g;const x=e=>{const{list:t}=e;return r.a.createElement(r.a.Fragment,null,t.map(e=>{const{node:t}=e;return r.a.createElement(h,{node:t,key:t.fields.slug})}))};x.propTypes={list:l.a.arrayOf(l.a.shape({}))},x.defaultProps={list:[]};var b=x,y=n(113),v=n.n(y);class E extends r.a.PureComponent{prefixPath(e){const{prefixer:t}=this.props;return t?t(e):e}render(){const{pageNum:e,active:t}=this.props,n=v()("page-item",{active:t}),a=e>1?this.prefixPath(`/${e}`):this.prefixPath();return r.a.createElement("li",{className:n},r.a.createElement(c.a,{className:"page-link",to:a},e))}}E.propTypes={pageNum:l.a.number.isRequired,active:l.a.bool,prefixer:l.a.func},E.defaultProps={active:!1,prefixer:null};var P=E;class k extends r.a.PureComponent{prefixPath(e){const{prefixer:t}=this.props;return t?t(e):e}renderPrev(){const{skip:e,totalPosts:t,limit:n}=this.props;if(0===t)return null;const a=v()("page-item",{disabled:0===e}),o=Math.floor(e/n),i=o>1?this.prefixPath(`/${o}`):this.prefixPath();return r.a.createElement("li",{className:a},r.a.createElement(c.a,{className:"page-link",to:i},"Previous"))}renderNext(){const{skip:e,totalPosts:t,limit:n}=this.props;if(0===t)return null;const a=Math.ceil(t/n),o=Math.floor(e/n)+2,i=v()("page-item",{disabled:o>a});return r.a.createElement("li",{className:i},r.a.createElement(c.a,{className:"page-link",to:this.prefixPath(`/${o}`)},"Next"))}renderNumPages(){const{totalPosts:e,limit:t,skip:n,prefixer:a}=this.props;if(0===e)return null;const o=Math.ceil(e/t),i=Math.floor(n/t)+1,s=Array.from(Array(o));return r.a.createElement(r.a.Fragment,null,s.map((e,t)=>r.a.createElement(P,{pageNum:t+1,active:i===t+1,prefixer:a,key:`pagination-item-${t}`})))}render(){const{totalPosts:e}=this.props;return e<=d.POSTS_PER_PAGE?null:r.a.createElement("ul",{className:"pagination justify-content-center"},this.renderPrev(),this.renderNumPages(),this.renderNext())}}k.propTypes={skip:l.a.number,limit:l.a.number,totalPosts:l.a.number,prefixer:l.a.func},k.defaultProps={skip:0,limit:0,totalPosts:0,prefixer:null};var w=k,C=n(54);t.default=class extends C.default{renderPagination(e=d.prefixBlog){const t=i()(this.props,"data.allMarkdownRemark.totalCount",0),n=i()(this.props,"pageContext.skip",0),a=i()(this.props,"pageContext.limit",0);return r.a.createElement(w,{skip:n,limit:a,totalPosts:t,prefixer:e})}renderBeforeContent(){const e=i()(this.props,"data.allMarkdownRemark.edges");return r.a.createElement(b,{list:e})}renderAfterContent(){return this.renderPagination()}}},73:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(9),l=n.n(s);n.d(t,"a",function(){return l.a});n(76);r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},74:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=(e=>r.a.createElement("div",{className:"container"},e.children))},76:function(e,t,n){e.exports=(e=>e&&e.default||e)(n(79))},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(17),l=n(2);const c=({location:e})=>{const t=l.default.getResourcesForPathnameSync(e.pathname);return t?r.a.createElement(s.a,{location:e,pageResources:t,...t.json}):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},81:function(e){e.exports={name:"artemdemo-com",description:"Blog artemdemo.com",version:"0.8.0",author:"Artem Demo",dependencies:{bootstrap:"^4.3.1",classnames:"^2.2.6","font-awesome":"^4.7.0",gatsby:"^2.4.1","gatsby-plugin-feed":"^2.2.0","gatsby-plugin-google-analytics":"^2.0.19","gatsby-plugin-manifest":"^2.1.1","gatsby-plugin-react-helmet":"^3.0.12","gatsby-plugin-remove-serviceworker":"^1.0.0","gatsby-plugin-sharp":"^2.0.36","gatsby-remark-copy-linked-files":"^2.0.12","gatsby-remark-images":"^3.0.11","gatsby-remark-prismjs":"^3.2.9","gatsby-remark-responsive-iframe":"^2.1.1","gatsby-remark-smartypants":"^2.0.9","gatsby-source-filesystem":"^2.0.33","gatsby-transformer-remark":"^2.3.12","gatsby-transformer-sharp":"^2.1.19","jest-cli":"^24.7.1",lodash:"^4.17.11",prismjs:"^1.16.0","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-helmet":"^5.2.1","react-test-renderer":"^16.8.6",remark:"^10.0.1","remark-html":"^9.0.0","remark-preset-lint-markdown-style-guide":"^2.1.2","styled-components":"^4.2.0"},devDependencies:{"@babel/core":"^7.4.4","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-syntax-dynamic-import":"^7.2.0","@babel/plugin-syntax-object-rest-spread":"^7.2.0","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.4","@babel/preset-react":"^7.0.0","@types/jest":"^24.0.12","babel-plugin-macros":"^2.5.1","babel-plugin-styled-components":"^1.10.0",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.12.1","enzyme-to-json":"^3.3.5",eslint:"^4.19.1","eslint-plugin-react":"^7.13.0","gh-pages":"^2.0.1","raw-loader":"^0.5.1"},license:"MIT",main:"n/a",scripts:{start:"gatsby develop",lint:"eslint --ext .js,.jsx --ignore-pattern public .",test:"NODE_ENV=test BABEL_DISABLE_CACHE=1 jest --config ./jest/jest-config.json","test:coverage":"NODE_ENV=test BABEL_DISABLE_CACHE=1 jest --config ./jest/jest-config.json --coverage",develop:"gatsby develop",build:"gatsby build",serve:"gatsby serve"}}},82:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(91),l=n.n(s),c=n(74),u=n(75),p=n(73);const d=i.a.shape({pathname:i.a.string}),m="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n",f=u.a.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],m,"\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n"),g=u.a.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],e=>e.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),h=Object(u.a)(p.a).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),x=e=>{const{location:t}=e;return r.a.createElement(f,null,r.a.createElement(g,{active:"/"===t.pathname||t.pathname.startsWith("/blog")},r.a.createElement(h,{to:"/"},"Blog")),r.a.createElement(g,{active:t.pathname.startsWith("/about")},r.a.createElement(h,{to:"/about"},"About")),r.a.createElement(g,{active:t.pathname.startsWith("/contact")},r.a.createElement(h,{to:"/contact"},"Contact me")))};x.propTypes={location:d},x.defaultProps={location:{}};var b=x;const y=u.a.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),v=u.a.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),E=u.a.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],e=>e.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",e=>e.menu&&`\n        ${m}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),P=u.a.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),k=u.a.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),w=Object(u.a)(p.a).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),C=e=>{const{location:t}=e;return r.a.createElement(y,null,r.a.createElement(c.a,null,r.a.createElement(v,null,r.a.createElement(E,{logo:!0},r.a.createElement(w,{to:"/"},"Artem Demo, frontend dev.")),r.a.createElement(E,{menu:!0},r.a.createElement(P,null,r.a.createElement(b,{location:t})))),r.a.createElement(k,null)))};C.propTypes={location:d},C.defaultProps={location:{}};var A=C,N=n(81);class _ extends r.a.Component{render(){const{title:e,description:t,location:n}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t},{name:"app-version",content:N.version}],title:e}),r.a.createElement(A,{location:n}),r.a.createElement(c.a,null,this.props.children))}}_.propTypes={location:d,title:i.a.string.isRequired,description:i.a.string.isRequired,metaTitle:i.a.string.isRequired},_.defaultProps={location:{}};t.a=_},86:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(88),r=n.n(a),o=n(96),i=n.n(o),s=n(98),l=n.n(s),c=n(99),u=n.n(c);const p=e=>new Promise((t,n)=>{i()().use(l.a).use(u.a).process(e,(e,a)=>{if(e)return n(new Error(e));r()(a.contents)&&t(a.contents),n(new Error('Returned "file" does not have `contents` property in it, or it\'s not string'))})})},89:function(e,t,n){const a=n(88),r=n(119);t.POSTS_PER_PAGE=10;const o=(e,t)=>{const n=a(t)&&t.startsWith("/")?t.substr(1):t;return""===n||null==n?e:`${e}/${n}`};t.prefixBlog=(e=>o("/blog",e)),t.prefixTag=((e,t)=>o("/tags",o(e,t))),t.normalizeTag=(e=>r(e))}}]);
//# sourceMappingURL=component---src-pages-posts-list-posts-list-jsx-a27e8ffb47ce993361bd.js.map