(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{61:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(92)),i=a(n(88)),l=a(n(78)),d=n(93);var u=class extends r.default.PureComponent{constructor(e){super(e),this.contentMd=null,this.state={content:null}}componentDidMount(){this.contentMd&&(0,d.renderMd)(this.contentMd).then(e=>this.setState({content:e}))}parentWrapper(e){const t=(0,o.default)(this.props,"data.site.siteMetadata.title",null),n=(0,o.default)(this.props,"data.site.siteMetadata.description",null);return this.props.location&&t&&n?r.default.createElement(i.default,{title:t,metaTitle:t,description:n,location:this.props.location},e):r.default.createElement(l.default,null,e)}renderBeforeContent(){return null}renderAfterContent(){return null}render(){return this.parentWrapper(r.default.createElement(r.default.Fragment,null,this.renderBeforeContent(),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),this.renderAfterContent()))}};t.default=u},76:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return l.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return l.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return l.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return l.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return l.navigateTo}}),Object.defineProperty(t,"waitForRouteChange",{enumerable:!0,get:function(){return d.waitForRouteChange}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return c.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var o=r(n(0)),i=r(n(3)),l=a(n(97)),d=n(23),u=r(n(86)),c=r(n(24));const s=o.default.createContext({});t.StaticQueryContext=s;const f=e=>o.default.createElement(s.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.default.createElement("div",null,"Loading (StaticQuery)"));t.StaticQuery=f,f.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},77:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.locationProp=void 0;var r=a(n(3));const o=r.default.shape({pathname:r.default.string});t.locationProp=o},78:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0));var o=e=>r.default.createElement("div",{className:"container"},e.children);t.default=o},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFix=t.resetUl=t.resetButton=void 0;t.resetButton="\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    cursor: pointer;\n\n    /* inherit font & color from ancestor */\n    color: inherit;\n    font: inherit;\n\n    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    /* Corrects inability to style clickable `input` types in iOS */\n    -webkit-appearance: none;\n";t.resetUl="\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n";t.clearFix="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n"},86:function(e,t,n){e.exports=(e=>e&&e.default||e)(n(87))},87:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),i=a(n(25)),l=a(n(4));const d=({location:e})=>{const t=l.default.getResourcesForPathnameSync(e.pathname);return r.default.createElement(i.default,{key:e.pathname,location:e,pageResources:t,...t.json})};d.propTypes={location:o.default.shape({pathname:o.default.string.isRequired}).isRequired};var u=d;t.default=u},88:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),i=a(n(98)),l=a(n(78)),d=a(n(89)),u=n(77);class c extends r.default.Component{render(){const{title:e,description:t,location:n}=this.props;return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.default,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),r.default.createElement(d.default,{location:n}),r.default.createElement(l.default,null,this.props.children))}}c.propTypes={location:u.locationProp,title:o.default.string.isRequired,description:o.default.string.isRequired,metaTitle:o.default.string.isRequired},c.defaultProps={location:{}};var s=c;t.default=s},89:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=r(n(79)),l=n(76),d=r(n(90)),u=r(n(78)),c=n(77),s=a(n(80));const f=i.default.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),p=i.default.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),m=i.default.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],e=>e.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",e=>e.menu&&`\n        ${s.clearFix}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),h=i.default.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),g=i.default.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),y=(0,i.default)(l.Link).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),v=e=>{const{location:t}=e;return o.default.createElement(f,null,o.default.createElement(u.default,null,o.default.createElement(p,null,o.default.createElement(m,{logo:!0},o.default.createElement(y,{to:"/"},"Artem Demo, frontend dev.")),o.default.createElement(m,{menu:!0},o.default.createElement(h,null,o.default.createElement(d.default,{location:t})))),o.default.createElement(g,null)))};v.propTypes={location:c.locationProp},v.defaultProps={location:{}};var b=v;t.default=b},90:function(e,t,n){"use strict";var a=n(7),r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=r(n(79)),l=n(76),d=n(77),u=a(n(80));const c=i.default.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],u.clearFix,u.resetUl),s=i.default.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],e=>e.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),f=(0,i.default)(l.Link).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),p=e=>{const{location:t}=e;return o.default.createElement(c,null,o.default.createElement(s,{active:"/"===t.pathname||t.pathname.startsWith("/blog")},o.default.createElement(f,{to:"/"},"Blog")),o.default.createElement(s,{active:t.pathname.startsWith("/about")},o.default.createElement(f,{to:"/about"},"About")),o.default.createElement(s,{active:t.pathname.startsWith("/contact")},o.default.createElement(f,{to:"/contact"},"Contact me")))};p.propTypes={location:d.locationProp},p.defaultProps={location:{}};var m=p;t.default=m},93:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.renderMd=void 0;var r=a(n(95)),o=a(n(101)),i=a(n(103)),l=a(n(104));t.renderMd=(e=>new Promise((t,n)=>{(0,o.default)().use(i.default).use(l.default).process(e,(e,a)=>{if(e)return n(new Error(e));(0,r.default)(a.contents)&&t(a.contents),n(new Error('Returned "file" does not have `contents` property in it, or it\'s not string'))})}))}}]);
//# sourceMappingURL=component---src-pages-base-page-base-page-jsx-d3aa10d014a7bc2255d9.js.map