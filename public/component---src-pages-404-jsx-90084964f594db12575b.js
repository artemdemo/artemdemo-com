(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{442:function(t,e){t.exports="# NOT FOUND\n\nYou just hit a route that doesn't exist... the sadness."},52:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(84),i=n.n(r),s=n(81),c=n(72),l=n(82);e.default=class extends o.a.PureComponent{constructor(t){super(t),this.contentMd=null,this.state={content:null}}componentDidMount(){this.contentMd&&Object(l.a)(this.contentMd).then(t=>this.setState({content:t}))}parentWrapper(t){const e=i()(this.props,"data.site.siteMetadata.title",null),n=i()(this.props,"data.site.siteMetadata.description",null);return this.props.location&&e&&n?o.a.createElement(s.a,{title:e,metaTitle:e,description:n,location:this.props.location},t):o.a.createElement(c.a,null,t)}renderBeforeContent(){return null}renderAfterContent(){return null}render(){return this.parentWrapper(o.a.createElement(o.a.Fragment,null,this.renderBeforeContent(),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),this.renderAfterContent()))}}},60:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return r});n(0);var a=n(52),o=n(96);e.default=class extends a.default{constructor(t){super(t),this.contentMd=o.a?null:n(442)}};const r="3998338720"},71:function(t,e,n){"use strict";var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(9),c=n.n(s);n.d(e,"a",function(){return c.a});n(74);o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},72:function(t,e,n){"use strict";var a=n(0),o=n.n(a);e.a=(t=>o.a.createElement("div",{className:"container"},t.children))},74:function(t,e,n){t.exports=(t=>t&&t.default||t)(n(80))},80:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(17),c=n(2);const l=({location:t})=>{const e=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,{location:t,pageResources:e,...e.json})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},81:function(t,e,n){"use strict";var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(90),c=n.n(s),l=n(72),d=n(73),u=n(71);const p=i.a.shape({pathname:i.a.string}),m="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n",h=d.a.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],m,"\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n"),f=d.a.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],t=>t.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),g=Object(d.a)(u.a).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),x=t=>{const{location:e}=t;return o.a.createElement(h,null,o.a.createElement(f,{active:"/"===e.pathname||e.pathname.startsWith("/blog")},o.a.createElement(g,{to:"/"},"Blog")),o.a.createElement(f,{active:e.pathname.startsWith("/about")},o.a.createElement(g,{to:"/about"},"About")),o.a.createElement(f,{active:e.pathname.startsWith("/contact")},o.a.createElement(g,{to:"/contact"},"Contact me")))};x.propTypes={location:p},x.defaultProps={location:{}};var y=x;const w=d.a.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),E=d.a.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),v=d.a.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],t=>t.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",t=>t.menu&&`\n        ${m}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),M=d.a.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),b=d.a.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),_=Object(d.a)(u.a).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),C=t=>{const{location:e}=t;return o.a.createElement(w,null,o.a.createElement(l.a,null,o.a.createElement(E,null,o.a.createElement(v,{logo:!0},o.a.createElement(_,{to:"/"},"Artem Demo, frontend dev.")),o.a.createElement(v,{menu:!0},o.a.createElement(M,null,o.a.createElement(y,{location:e})))),o.a.createElement(b,null)))};C.propTypes={location:p},C.defaultProps={location:{}};var H=C;class I extends o.a.Component{render(){const{title:t,description:e,location:n}=this.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e}],title:t}),o.a.createElement(H,{location:n}),o.a.createElement(l.a,null,this.props.children))}}I.propTypes={location:p,title:i.a.string.isRequired,description:i.a.string.isRequired,metaTitle:i.a.string.isRequired},I.defaultProps={location:{}};e.a=I},82:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(86),o=n.n(a),r=n(92),i=n.n(r),s=n(94),c=n.n(s),l=n(95),d=n.n(l);const u=t=>new Promise((e,n)=>{i()().use(c.a).use(d.a).process(t,(t,a)=>{if(t)return n(new Error(t));o()(a.contents)&&e(a.contents),n(new Error('Returned "file" does not have `contents` property in it, or it\'s not string'))})})},96:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a=(()=>{try{return!1}catch(t){return!1}})()}}]);
//# sourceMappingURL=component---src-pages-404-jsx-90084964f594db12575b.js.map