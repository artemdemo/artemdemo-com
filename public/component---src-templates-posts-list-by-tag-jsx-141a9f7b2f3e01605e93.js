(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9],{567:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(114),s=n.n(o),i=n(8),u=n.n(i),f=n(71),l=n(37),c=n(584),p=n(581),d=n(156);n(568);const x=l.a.div.withConfig({displayName:"PostsItem__PostItemSty",componentId:"sc-1fceitp-0"})(["margin-bottom:30px;"]);class m extends a.a.PureComponent{constructor(e){super(e),this.state={content:null}}componentDidMount(){const e=s()(this.props,"node.excerpt");e&&Object(d.a)(e).then(e=>this.setState({content:e}))}render(){const{node:e}=this.props;if(!e)return null;const t=s()(e,"frontmatter.title")||e.fields.slug;return a.a.createElement(x,null,a.a.createElement("h2",null,a.a.createElement(f.Link,{to:p.prefixBlog(e.fields.slug)},t)),a.a.createElement(c.a,null,e.frontmatter.date),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.content}}))}}m.propTypes={node:u.a.shape({})},m.defaultProps={node:null};var h=m;const g=e=>{const{list:t}=e;return a.a.createElement(a.a.Fragment,null,t.map(e=>{const{node:t}=e;return a.a.createElement(h,{node:t,key:t.fields.slug})}))};g.propTypes={list:u.a.arrayOf(u.a.shape({}))},g.defaultProps={list:[]};var v=g,E=n(582),P=n.n(E);class b extends a.a.PureComponent{prefixPath(e){const{prefixer:t}=this.props;return t?t(e):e}render(){const{pageNum:e,active:t}=this.props,n=P()("page-item",{active:t}),r=e>1?this.prefixPath(`/${e}`):this.prefixPath();return a.a.createElement("li",{className:n},a.a.createElement(f.Link,{className:"page-link",to:r},e))}}b.propTypes={pageNum:u.a.number.isRequired,active:u.a.bool,prefixer:u.a.func},b.defaultProps={active:!1,prefixer:null};var y=b;class A extends a.a.PureComponent{prefixPath(e){const{prefixer:t}=this.props;return t?t(e):e}renderPrev(){const{skip:e,totalPosts:t,limit:n}=this.props;if(0===t)return null;const r=P()("page-item",{disabled:0===e}),o=Math.floor(e/n),s=o>1?this.prefixPath(`/${o}`):this.prefixPath();return a.a.createElement("li",{className:r},a.a.createElement(f.Link,{className:"page-link",to:s},"Previous"))}renderNext(){const{skip:e,totalPosts:t,limit:n}=this.props;if(0===t)return null;const r=Math.ceil(t/n),o=Math.floor(e/n)+2,s=P()("page-item",{disabled:o>r});return a.a.createElement("li",{className:s},a.a.createElement(f.Link,{className:"page-link",to:this.prefixPath(`/${o}`)},"Next"))}renderNumPages(){const{totalPosts:e,limit:t,skip:n,prefixer:r}=this.props;if(0===e)return null;const o=Math.ceil(e/t),s=Math.floor(n/t)+1,i=Array.from(Array(o));return a.a.createElement(a.a.Fragment,null,i.map((e,t)=>a.a.createElement(y,{pageNum:t+1,active:s===t+1,prefixer:r,key:`pagination-item-${t}`})))}render(){const{totalPosts:e}=this.props;return e<=p.POSTS_PER_PAGE?null:a.a.createElement("ul",{className:"pagination justify-content-center"},this.renderPrev(),this.renderNumPages(),this.renderNext())}}A.propTypes={skip:u.a.number,limit:u.a.number,totalPosts:u.a.number,prefixer:u.a.func},A.defaultProps={skip:0,limit:0,totalPosts:0,prefixer:null};var k=A,N=n(248);class T extends N.default{renderPagination(e=p.prefixBlog){const t=s()(this.props,"data.allMarkdownRemark.totalCount",0),n=s()(this.props,"pageContext.skip",0),r=s()(this.props,"pageContext.limit",0);return a.a.createElement(k,{skip:n,limit:r,totalPosts:t,prefixer:e})}renderBeforeContent(){const e=s()(this.props,"data.allMarkdownRemark.edges");return a.a.createElement(v,{list:e})}renderAfterContent(){return this.renderPagination()}}t.default=T},573:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));var r=n(114),a=n.n(r),o=n(567),s=n(581);class i extends o.default{constructor(e){super(e)}renderPagination(){const e=a()(this.props,"pageContext.tagName","");return super.renderPagination(s.prefixTag.bind(null,e))}}t.default=i;const u="431193472"},581:function(e,t,n){const r=n(155),a=n(585);t.POSTS_PER_PAGE=10;const o=(e,t)=>{const n=r(t)&&t.startsWith("/")?t.substr(1):t;return""===n||null==n?e:`${e}/${n}`};t.prefixBlog=e=>o("/blog",e),t.prefixTag=(e,t)=>o("/tags",o(e,t)),t.normalizeTag=e=>a(e)},582:function(e,t,n){var r;n(36),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},583:function(e,t,n){"use strict";const r=n(37).a.div.withConfig({displayName:"SecondaryText",componentId:"gvqirs-0"})(["font-size:85%;margin-bottom:10px;opacity:0.5;transition:300ms;&:hover{opacity:1;}"]);t.a=r},584:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(583);t.a=e=>a.a.createElement(o.a,null,e.children)},585:function(e,t,n){var r=n(586)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},586:function(e,t,n){n(5),n(38);var r=n(587),a=n(588),o=n(591),s=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(s,"")),e,"")}}},587:function(e,t){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},588:function(e,t,n){n(5),n(38);var r=n(589),a=n(247),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(s,"")}},589:function(e,t,n){var r=n(590)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},590:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},591:function(e,t,n){n(35);var r=n(592),a=n(593),o=n(247),s=n(594);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?s(e):r(e):e.match(t)||[]}},592:function(e,t,n){n(35);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},593:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},594:function(e,t,n){n(35),n(38);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",s="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+i+"|"+u+")",d="(?:"+c+"|"+u+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,l].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),h="(?:"+[s,f,l].join("|")+")"+m,g=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,c+p,"$"].join("|")+")",c+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");e.exports=function(e){return e.match(g)||[]}}}]);
//# sourceMappingURL=component---src-templates-posts-list-by-tag-jsx-141a9f7b2f3e01605e93.js.map