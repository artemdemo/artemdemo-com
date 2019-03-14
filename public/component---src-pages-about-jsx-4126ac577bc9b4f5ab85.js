(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{443:function(e,t){e.exports="Hi guys,\n\nMy name is Artem and I'm a Frontend developer.\nI live and work in Tel Aviv, while trying to build useful things. I decided to start this blog for number of reasons:\n\nFirst, I really believe in knowledge sharing.\nThis is what continues to improve the web industry and each developer can only benefit from that\n(the one who shares and the one who can find useful information on the internet).\n\nSecond, writing helps me better understand the concepts.\nYou truly start to understand something, only when you start to explain it to someone.\nI know that for some it could seem unintuitive, but it's true.\nBy explaining complicated concepts we start to understand them better  ourselves.\n\nIf you're interested in my open source projects, or code examples, you can checkout\n[my github account](https://github.com/artemdemo)\n\nBest, <br />\nArtem"},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(84),i=n.n(r),s=n(81),c=n(72),l=n(82);t.default=class extends o.a.PureComponent{constructor(e){super(e),this.contentMd=null,this.state={content:null}}componentDidMount(){this.contentMd&&Object(l.a)(this.contentMd).then(e=>this.setState({content:e}))}parentWrapper(e){const t=i()(this.props,"data.site.siteMetadata.title",null),n=i()(this.props,"data.site.siteMetadata.description",null);return this.props.location&&t&&n?o.a.createElement(s.a,{title:t,metaTitle:t,description:n,location:this.props.location},e):o.a.createElement(c.a,null,e)}renderBeforeContent(){return null}renderAfterContent(){return null}render(){return this.parentWrapper(o.a.createElement(o.a.Fragment,null,this.renderBeforeContent(),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),this.renderAfterContent()))}}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return r});n(0);var a=n(52),o=n(96);t.default=class extends a.default{constructor(e){super(e),this.contentMd=o.a?null:n(443)}};const r="3998338720"},71:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(9),c=n.n(s);n.d(t,"a",function(){return c.a});n(74);o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},72:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=(e=>o.a.createElement("div",{className:"container"},e.children))},74:function(e,t,n){e.exports=(e=>e&&e.default||e)(n(80))},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(17),c=n(2);const l=({location:e})=>{const t=c.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(s.a,{location:e,pageResources:t,...t.json})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},81:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=n(90),c=n.n(s),l=n(72),d=n(73),u=n(71);const m=i.a.shape({pathname:i.a.string}),p="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n",h=d.a.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],p,"\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n"),f=d.a.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],e=>e.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),g=Object(d.a)(u.a).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),y=e=>{const{location:t}=e;return o.a.createElement(h,null,o.a.createElement(f,{active:"/"===t.pathname||t.pathname.startsWith("/blog")},o.a.createElement(g,{to:"/"},"Blog")),o.a.createElement(f,{active:t.pathname.startsWith("/about")},o.a.createElement(g,{to:"/about"},"About")),o.a.createElement(f,{active:t.pathname.startsWith("/contact")},o.a.createElement(g,{to:"/contact"},"Contact me")))};y.propTypes={location:m},y.defaultProps={location:{}};var w=y;const x=d.a.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),v=d.a.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),b=d.a.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],e=>e.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",e=>e.menu&&`\n        ${p}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),E=d.a.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),M=d.a.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),_=Object(d.a)(u.a).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),I=e=>{const{location:t}=e;return o.a.createElement(x,null,o.a.createElement(l.a,null,o.a.createElement(v,null,o.a.createElement(b,{logo:!0},o.a.createElement(_,{to:"/"},"Artem Demo, frontend dev.")),o.a.createElement(b,{menu:!0},o.a.createElement(E,null,o.a.createElement(w,{location:t})))),o.a.createElement(M,null)))};I.propTypes={location:m},I.defaultProps={location:{}};var C=I;class k extends o.a.Component{render(){const{title:e,description:t,location:n}=this.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),o.a.createElement(C,{location:n}),o.a.createElement(l.a,null,this.props.children))}}k.propTypes={location:m,title:i.a.string.isRequired,description:i.a.string.isRequired,metaTitle:i.a.string.isRequired},k.defaultProps={location:{}};t.a=k},82:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(86),o=n.n(a),r=n(92),i=n.n(r),s=n(94),c=n.n(s),l=n(95),d=n.n(l);const u=e=>new Promise((t,n)=>{i()().use(c.a).use(d.a).process(e,(e,a)=>{if(e)return n(new Error(e));o()(a.contents)&&t(a.contents),n(new Error('Returned "file" does not have `contents` property in it, or it\'s not string'))})})},96:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=(()=>{try{return!1}catch(e){return!1}})()}}]);
//# sourceMappingURL=component---src-pages-about-jsx-4126ac577bc9b4f5ab85.js.map