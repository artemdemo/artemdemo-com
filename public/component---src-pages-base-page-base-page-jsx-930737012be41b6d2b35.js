(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(85),i=n.n(o),s=n(82),l=n(74),c=n(86);t.default=class extends r.a.PureComponent{constructor(e){super(e),this.contentMd=null,this.state={content:null}}componentDidMount(){this.contentMd&&Object(c.a)(this.contentMd).then(e=>this.setState({content:e}))}parentWrapper(e){const t=i()(this.props,"data.site.siteMetadata.title",null),n=i()(this.props,"data.site.siteMetadata.description",null);return this.props.location&&t&&n?r.a.createElement(s.a,{title:t,metaTitle:t,description:n,location:this.props.location},e):r.a.createElement(l.a,null,e)}renderBeforeContent(){return null}renderAfterContent(){return null}render(){return this.parentWrapper(r.a.createElement(r.a.Fragment,null,this.renderBeforeContent(),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content}}),this.renderAfterContent()))}}},73:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(9),l=n.n(s);n.d(t,"a",function(){return l.a});n(76);r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},74:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=(e=>r.a.createElement("div",{className:"container"},e.children))},76:function(e,t,n){e.exports=(e=>e&&e.default||e)(n(79))},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(17),l=n(2);const c=({location:e})=>{const t=l.default.getResourcesForPathnameSync(e.pathname);return t?r.a.createElement(s.a,{location:e,pageResources:t,...t.json}):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},81:function(e){e.exports={name:"artemdemo-com",description:"Blog artemdemo.com",version:"0.8.0",author:"Artem Demo",dependencies:{bootstrap:"^4.3.1",classnames:"^2.2.6","font-awesome":"^4.7.0",gatsby:"^2.4.1","gatsby-plugin-feed":"^2.2.0","gatsby-plugin-google-analytics":"^2.0.19","gatsby-plugin-manifest":"^2.1.1","gatsby-plugin-react-helmet":"^3.0.12","gatsby-plugin-remove-serviceworker":"^1.0.0","gatsby-plugin-sharp":"^2.0.36","gatsby-remark-copy-linked-files":"^2.0.12","gatsby-remark-images":"^3.0.11","gatsby-remark-prismjs":"^3.2.9","gatsby-remark-responsive-iframe":"^2.1.1","gatsby-remark-smartypants":"^2.0.9","gatsby-source-filesystem":"^2.0.33","gatsby-transformer-remark":"^2.3.12","gatsby-transformer-sharp":"^2.1.19","jest-cli":"^24.7.1",lodash:"^4.17.11",prismjs:"^1.16.0","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-helmet":"^5.2.1","react-test-renderer":"^16.8.6",remark:"^10.0.1","remark-html":"^9.0.0","remark-preset-lint-markdown-style-guide":"^2.1.2","styled-components":"^4.2.0"},devDependencies:{"@babel/core":"^7.4.4","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-syntax-dynamic-import":"^7.2.0","@babel/plugin-syntax-object-rest-spread":"^7.2.0","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.4","@babel/preset-react":"^7.0.0","@types/jest":"^24.0.12","babel-plugin-macros":"^2.5.1","babel-plugin-styled-components":"^1.10.0",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.12.1","enzyme-to-json":"^3.3.5",eslint:"^4.19.1","eslint-plugin-react":"^7.13.0","gh-pages":"^2.0.1","raw-loader":"^0.5.1"},license:"MIT",main:"n/a",scripts:{start:"gatsby develop",lint:"eslint --ext .js,.jsx --ignore-pattern public .",test:"NODE_ENV=test BABEL_DISABLE_CACHE=1 jest --config ./jest/jest-config.json","test:coverage":"NODE_ENV=test BABEL_DISABLE_CACHE=1 jest --config ./jest/jest-config.json --coverage",develop:"gatsby develop",build:"gatsby build",serve:"gatsby serve"}}},82:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(91),l=n.n(s),c=n(74),p=n(75),m=n(73);const d=i.a.shape({pathname:i.a.string}),u="\n    &::after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n",g=p.a.ul.withConfig({displayName:"MainMenu__MainMenuSty",componentId:"sc-10g5x94-0"})([""," ",""],u,"\n    list-style-type: none;\n    margin: none;\n    margin: 0;\n    padding: 0;\n"),h=p.a.li.withConfig({displayName:"MainMenu__MainMenuItemSty",componentId:"sc-10g5x94-1"})(["float:left;padding:0 10px;",""],e=>e.active&&"\n        border-bottom: 2px solid #96c9ff;\n    "),y=Object(p.a)(m.a).withConfig({displayName:"MainMenu__MainMenuLinkSty",componentId:"sc-10g5x94-2"})(["&:hover{text-decoration:none;}"]),b=e=>{const{location:t}=e;return r.a.createElement(g,null,r.a.createElement(h,{active:"/"===t.pathname||t.pathname.startsWith("/blog")},r.a.createElement(y,{to:"/"},"Blog")),r.a.createElement(h,{active:t.pathname.startsWith("/about")},r.a.createElement(y,{to:"/about"},"About")),r.a.createElement(h,{active:t.pathname.startsWith("/contact")},r.a.createElement(y,{to:"/contact"},"Contact me")))};b.propTypes={location:d},b.defaultProps={location:{}};var f=b;const v=p.a.div.withConfig({displayName:"Header__HeaderSty",componentId:"x4ek9t-0"})(["margin-bottom:20px;"]),E=p.a.div.withConfig({displayName:"Header__HeaderContainerSty",componentId:"x4ek9t-1"})(["padding:15px 0;@media (max-width:575.98px){text-align:center;}"]),x=p.a.div.withConfig({displayName:"Header__HeaderItemSty",componentId:"x4ek9t-2"})(["display:inline-block;vertical-align:middle;"," ",""],e=>e.logo&&"\n        width: 50%;\n        min-width: 280px;\n        font-size: 1.5rem;\n        font-weight: 300;\n        @media (max-width: 575.98px) {\n            width: auto;\n            margin-bottom: 10px;\n        }\n    ",e=>e.menu&&`\n        ${u}\n        width: 50%;\n        @media (max-width: 768px) {\n            width: auto;\n        }\n    `),w=p.a.div.withConfig({displayName:"Header__HeaderItemMenuSty",componentId:"x4ek9t-3"})(["float:right;"]),_=p.a.div.withConfig({displayName:"Header__HeaderSeparatorSty",componentId:"x4ek9t-4"})(["border-bottom:1px solid #dee2e6;max-width:90%;margin:0 auto;"]),k=Object(p.a)(m.a).withConfig({displayName:"Header__HeaderLogoLinkSty",componentId:"x4ek9t-5"})(["color:initial;&:hover{text-decoration:none;}"]),C=e=>{const{location:t}=e;return r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement(E,null,r.a.createElement(x,{logo:!0},r.a.createElement(k,{to:"/"},"Artem Demo, frontend dev.")),r.a.createElement(x,{menu:!0},r.a.createElement(w,null,r.a.createElement(f,{location:t})))),r.a.createElement(_,null)))};C.propTypes={location:d},C.defaultProps={location:{}};var j=C,M=n(81);class I extends r.a.Component{render(){const{title:e,description:t,location:n}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t},{name:"app-version",content:M.version}],title:e}),r.a.createElement(j,{location:n}),r.a.createElement(c.a,null,this.props.children))}}I.propTypes={location:d,title:i.a.string.isRequired,description:i.a.string.isRequired,metaTitle:i.a.string.isRequired},I.defaultProps={location:{}};t.a=I},86:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(88),r=n.n(a),o=n(96),i=n.n(o),s=n(98),l=n.n(s),c=n(99),p=n.n(c);const m=e=>new Promise((t,n)=>{i()().use(l.a).use(p.a).process(e,(e,a)=>{if(e)return n(new Error(e));r()(a.contents)&&t(a.contents),n(new Error('Returned "file" does not have `contents` property in it, or it\'s not string'))})})}}]);
//# sourceMappingURL=component---src-pages-base-page-base-page-jsx-930737012be41b6d2b35.js.map