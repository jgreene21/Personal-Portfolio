(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{146:function(e,n,t){e.exports=t.p+"static/media/Message.487adb5d.svg"},220:function(e,n,t){e.exports=t.p+"static/media/AboutHeader.15bd804a.svg"},221:function(e,n,t){e.exports=t.p+"static/media/ViewResume.7836c939.svg"},243:function(e,n,t){e.exports=t.p+"static/media/YellowButton.4e1350e0.svg"},244:function(e,n,t){e.exports=t.p+"static/media/GreenButton.90c47dde.svg"},245:function(e,n,t){e.exports=t.p+"static/media/PinkButton.0b80dbff.svg"},246:function(e,n,t){e.exports=t.p+"static/media/PurpleButton.549ab035.svg"},247:function(e,n,t){e.exports=t.p+"static/media/BrightPestSolutions.6f0fa1d5.svg"},248:function(e,n,t){e.exports=t.p+"static/media/DevPoint.5b09eb61.svg"},249:function(e,n,t){e.exports=t.p+"static/media/Rake.9e94fa38.svg"},250:function(e,n,t){e.exports=t.p+"static/media/Realtor.23283471.svg"},252:function(e,n,t){e.exports=t.p+"static/media/HomepageHeader.dd48aba0.svg"},253:function(e,n,t){e.exports=t.p+"static/media/Designer.0a093d25.svg"},254:function(e,n,t){e.exports=t.p+"static/media/Developer.beddd2ba.svg"},255:function(e,n,t){e.exports=t.p+"static/media/Woman.1c076ec4.svg"},256:function(e,n,t){e.exports=t.p+"static/media/Mother.257a5e32.svg"},257:function(e,n,t){e.exports=t.p+"static/media/NoMatchHeader.461c9f4e.svg"},258:function(e,n,t){e.exports=t.p+"static/media/Error.8a14e4ce.svg"},259:function(e,n,t){e.exports=t.p+"static/media/Bird1.6fc80daf.svg"},260:function(e,n,t){e.exports=t.p+"static/media/Bird2.ce18ac2b.svg"},271:function(e,n,t){e.exports=t(440)},276:function(e,n,t){},439:function(e,n,t){},440:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(56),i=t.n(o),l=t(26),c=(t(276),t(18)),m=t(15),s=t(65),u=t(66),p=t(70),f=t(71),d=t(449),h=t(261),g=t(453),x=t(455),b=t(16),w=t(220),E=t.n(w),v=t(115),y=t(451),j=t(146),O=t.n(j),z=t(221),M=t.n(z),_=t(67),N=t.n(_),k=t(109),F=t(450),S=t(454),B=t(452),C=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).submitForm=a.submitForm.bind(Object(k.a)(a)),a.state={status:""},a}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.status;return r.a.createElement(F.a,{className:"blue",style:{padding:"35px"},onSubmit:this.submitForm,action:"https://formspree.io/xknqlrne",method:"POST"},r.a.createElement(S.a,{style:I.form},"Contact Me"),r.a.createElement("br",null),r.a.createElement(F.a.Field,null,r.a.createElement("label",{style:{fontFamily:"Montserrat",fontWeight:"normal",fontSize:"13px",lineHeight:"19px"}},"Name:"),r.a.createElement("input",{type:"text",name:"name"})),r.a.createElement(F.a.Field,null,r.a.createElement("label",{style:{fontFamily:"Montserrat",fontWeight:"normal",fontSize:"13px",lineHeight:"19px"}},"Email:"),r.a.createElement("input",{type:"email",name:"email"})),r.a.createElement(F.a.Field,null,r.a.createElement("label",{style:{fontFamily:"Montserrat",fontWeight:"normal",fontSize:"13px",lineHeight:"19px"}},"Message:"),r.a.createElement("textarea",{name:"message"})),"SUCCESS"===e?r.a.createElement("p",null,"Thanks! I will get back to you shortly."):r.a.createElement(B.a,{style:I.button},"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error."))}},{key:"submitForm",value:function(e){var n=this;e.preventDefault();var t=e.target,a=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),n.setState({status:"SUCCESS"})):n.setState({status:"ERROR"}))},r.send(a)}}]),t}(r.a.Component),I={form:{fontFamily:"Montserrat",fontWeight:300,fontSize:"18px",lineHeight:"27px",textAlign:"center"},button:{backgroundColor:"white",color:"black",fontFamily:"Montserrat",fontWeight:"normal",fontSize:"13px",lineHeight:"19px"}};var R=function(){var e=r.a.useState(!1),n=Object(v.a)(e,2),t=n[0],a=n[1];return r.a.createElement(y.a,{closeIcon:!0,open:t,onClose:function(){return a(!1)},onOpen:function(){return a(!0)},trigger:r.a.createElement(h.a,{src:O.a,centered:!0,style:{padding:"10px",cursor:"pointer"},className:"hvr-grow-shadow"})},r.a.createElement(C,null))};function W(){var e=Object(m.a)(["{\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  @media(max-width: 700px) {\n    font-size: 14px;\n  }\n  @media(max-width: 400px) {\n    font-size: 12px;\n  }\n}\n"]);return W=function(){return e},e}function H(){var e=Object(m.a)(["{\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #706b6b;\n  margin-left: auto;\n  margin-right: auto;\n  width: 550px;\n  @media(max-width: 700px) {\n    font-size: 15px;\n    width: 420px;\n    }\n    @media(max-width: 475px) {\n      font-size: 15px;\n      width: 350px;\n      }\n}\n"]);return H=function(){return e},e}function P(){var e=Object(m.a)(["{\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  margin-top: -15px;\n  text-align: center;\n  color: #d573c5;\n  @media(max-width: 700px) {\n    font-size: 18px\n    }\n}\n"]);return P=function(){return e},e}function A(){var e=Object(m.a)(["{\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 29px;\n  text-align: center;\n  color: #d573c5;\n  @media(max-width: 700px) {\n    font-size: 22px\n    }\n}\n"]);return A=function(){return e},e}function D(){var e=Object(m.a)(["\n{\n  margin-top: 75px; \n  text-align: center; \n  margin-bottom: 75px;\n  @media(max-width: 700px) {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    }\n}\n"]);return D=function(){return e},e}var L=b.a.div(D()),T=b.a.p(A()),q=b.a.p(P()),Y=b.a.p(H()),G=b.a.p(W()),J=function(){var e=r.a.useState(!1),n=Object(v.a)(e,2),t=n[0],a=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(T,null,"Lets Work Together!"),r.a.createElement(q,{className:"animate__animated animate__tada animate__slower"},"Yeah, Yeah, Yeah"),r.a.createElement(Y,null,"Currently looking for a great place and team to start my journey in design and development. Also available for freelance work. Would love to hear from you."),r.a.createElement("br",null),r.a.createElement(R,null),r.a.createElement("a",{className:"hvr-grow-shadow",href:N.a},r.a.createElement(h.a,{src:M.a,centered:!0,style:{padding:"10px"}}))),r.a.createElement(x.a,{inverted:!0,className:"footer"},r.a.createElement(G,{style:{marginTop:"40px"}},r.a.createElement("a",{className:"hvr-grow-shadow",style:{color:"#d573c5"},href:"https://github.com/jgreene21"},"Github"),r.a.createElement("span",{style:{marginLeft:"5vw"}},r.a.createElement("a",{className:"hvr-grow-shadow",style:{color:"#d573c5"},href:"https://www.linkedin.com/in/julie-greene-slc/"},"Linkedin")),r.a.createElement("span",{style:{marginLeft:"5vw"}},r.a.createElement("a",{className:"hvr-grow-shadow",style:{color:"#d573c5"},href:"https://www.instagram.com/julescgreene/"},"Instagram")),r.a.createElement("span",{style:{marginLeft:"5vw"}},r.a.createElement(y.a,{closeIcon:!0,open:t,onClose:function(){return a(!1)},onOpen:function(){return a(!0)},trigger:r.a.createElement("p",{style:{cursor:"pointer",color:"#d573c5"},className:"hvr-grow-shadow"}," Contact ")},r.a.createElement(C,null))))))},U=t(243),X=t.n(U),V=t(244),$=t.n(V),K=t(245),Q=t.n(K),Z=t(246),ee=t.n(Z),ne=t(247),te=t.n(ne),ae=t(248),re=t.n(ae),oe=t(249),ie=t.n(oe),le=t(250),ce=t.n(le);function me(){var e=Object(m.a)(["\n   {\n    height: 675px;\n    margin-top: -14px !important;\n    border-radius: 0% !important;\n    @media (max-width: 800px) {\n      height: 640px !important;\n    }\n    @media (max-width: 700px) {\n      height: 600px !important;\n    }\n    @media (max-width: 600px) {\n      height: 480px !important;\n    }\n    @media (max-width: 475px) {\n      height: 420px !important;\n    }\n  }\n"]);return me=function(){return e},e}function se(){var e=Object(m.a)(["\n   {\n    font-family: Oswald;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    text-transform: lowercase;\n    color: #ffffff;\n    @media (max-width: 700px) {\n      font-size: 16px;\n    }\n  }\n"]);return se=function(){return e},e}function ue(){var e=Object(m.a)(["\n   {\n    font-family: Oswald;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 20px;\n    text-align: center;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: #ffffff;\n    mix-blend-mode: normal;\n    margin-top: 20px;\n    @media (max-width: 700px) {\n      font-size: 20px;\n    }\n  }\n"]);return ue=function(){return e},e}function pe(){var e=Object(m.a)(["\n   {\n    position: absolute;\n    right: 80px;\n    top: 0px;\n    @media (max-width: 1000px) {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n  }\n"]);return pe=function(){return e},e}function fe(){var e=Object(m.a)(["\n   {\n    font-size: 16px;\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n"]);return fe=function(){return e},e}function de(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 30px;\n    color: #706b6b;\n    margin-left: auto;\n    margin-right: auto;\n    width: 550px;\n    @media (max-width: 700px) {\n      font-size: 15px;\n      width: 420px;\n        }\n        @media(max-width: 475px) {\n          font-size: 15px;\n          width: 350px;\n          }\n    }\n  }\n"]);return de=function(){return e},e}function he(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 29px;\n    text-align: center;\n    color: #d573c5;\n    @media (max-width: 900px) {\n      font-size: 22px;\n    }\n  }\n"]);return he=function(){return e},e}function ge(){var e=Object(m.a)(["\n   {\n    text-align: center;\n    margin-bottom: 75px;\n    @media (max-width: 700px) {\n      margin-bottom: 50px;\n    }\n  }\n"]);return ge=function(){return e},e}var xe=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.fixed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement("div",{className:"menu-container"},r.a.createElement(h.a,{src:E.a,fluid:!0}),r.a.createElement(g.a,{borderless:!0,fixed:e?"top":null,style:{border:"none",boxShadow:"none"}},r.a.createElement(ye,{as:g.a.Menu,position:"right"},r.a.createElement(l.b,{to:"/",className:"hvr-grow-shadow"},r.a.createElement(ve,{as:g.a.Item,style:Me.menu},"About")),r.a.createElement(l.b,{to:"/projects",className:"hvr-grow-shadow"},r.a.createElement(ve,{as:g.a.Item,style:Me.menu},"Projects")),r.a.createElement("a",{className:"hvr-grow-shadow",href:"mailto:julesgreene.slc@gmail.com"},r.a.createElement(ve,{as:g.a.Item,style:Me.menu},"Contact")),r.a.createElement("a",{className:"hvr-grow-shadow",href:N.a},r.a.createElement(ve,{as:g.a.Item,style:Me.menu},"Resume")))))),r.a.createElement(be,null,r.a.createElement(we,null,"What I've Been Up To"),r.a.createElement(Ee,null,"Here is a selection of some of my first projects. For more of my work visit my",r.a.createElement("span",{style:{padding:"5px"}},r.a.createElement("a",{className:"hvr-grow-shadow",style:{color:"#d573c5"},href:"https://github.com/jgreene21"},"Github")),"repository.")),r.a.createElement(ze,{as:x.a,style:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #D573C5"},inverted:!0},r.a.createElement(h.a,{src:ie.a,size:"huge",centered:!0}),r.a.createElement(je,null,"Rake Salon"),r.a.createElement(Oe,null,"web design package for salon"),r.a.createElement(h.a,{src:Q.a,centered:!0,className:"hvr-grow-shadow"})),r.a.createElement(ze,{as:x.a,style:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #f8ee94"},inverted:!0},r.a.createElement(h.a,{src:te.a,size:"huge",centered:!0}),r.a.createElement(je,{style:{color:"#706B6B"}},"Bright Pest Solutions"),r.a.createElement(Oe,{style:{color:"#706B6B"}},"client build for local small business"),r.a.createElement(h.a,{src:X.a,centered:!0,className:"hvr-grow-shadow"})),r.a.createElement(ze,{as:x.a,style:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #6CC8A1"},inverted:!0},r.a.createElement(h.a,{src:re.a,size:"huge",centered:!0}),r.a.createElement(je,null,"DevPoint Store"),r.a.createElement(Oe,null,"e-commerce site"),r.a.createElement("a",{href:"https://devpoint-labs-store-2020.herokuapp.com/"},r.a.createElement(h.a,{src:$.a,centered:!0,className:"hvr-grow-shadow"}))),r.a.createElement(ze,{as:x.a,style:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), #A74AF0"},inverted:!0},r.a.createElement(h.a,{src:ce.a,size:"huge",centered:!0}),r.a.createElement(je,null,"Dream Home"),r.a.createElement(Oe,null,"web design package for realtor"),r.a.createElement(h.a,{src:ee.a,centered:!0,className:"hvr-grow-shadow"})),r.a.createElement(J,null))}}]),t}(r.a.Component),be=b.a.div(ge()),we=b.a.p(he()),Ee=b.a.p(de()),ve=b.a.div(fe()),ye=b.a.div(pe()),je=b.a.p(ue()),Oe=b.a.p(se()),ze=b.a.div(me()),Me={menu:{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500",color:"#706B6B"}},_e=xe,Ne=t(456),ke=t(252),Fe=t.n(ke),Se=t(253),Be=t.n(Se),Ce=t(254),Ie=t.n(Ce),Re=t(255),We=t.n(Re),He=t(256),Pe=t.n(He);function Ae(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 29px;\n    color: #fd983a;\n    @media (max-width: 850px) {\n      font-size: 22px;\n    }\n  }\n"]);return Ae=function(){return e},e}function De(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 29px;\n    color: #4fc7ed;\n    @media (max-width: 850px) {\n      font-size: 22px;\n    }\n  }\n"]);return De=function(){return e},e}function Le(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 29px;\n    color: #a74af0;\n    @media (max-width: 850px) {\n      font-size: 22px;\n    }\n  }\n"]);return Le=function(){return e},e}function Te(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 29px;\n    color: #6cc8a1;\n    @media (max-width: 850px) {\n      font-size: 22px;\n    }\n  }\n"]);return Te=function(){return e},e}function qe(){var e=Object(m.a)(["\n   {\n    position: absolute;\n    right: 80px;\n    top: 0px;\n    @media (max-width: 1000px) {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n  }\n"]);return qe=function(){return e},e}function Ye(){var e=Object(m.a)(["\n   {\n    margin-left: 20%;\n    @media (max-width: 1200px) {\n      margin-left: 10%;\n    }\n    @media (max-width: 850px) {\n      margin-left: 0px;\n      margin-top: 40px;\n    }\n  }\n  "]);return Ye=function(){return e},e}function Ge(){var e=Object(m.a)(["\n   {\n    margin-left: 20%;\n    @media (max-width: 1200px) {\n      margin-left: 10%;\n    }\n    @media (max-width: 850px) {\n      margin-left: 0px;\n      margin-top: 40px;\n    }\n    @media (max-width: 495px) {\n      margin-top: 50px\n    }\n  }\n"]);return Ge=function(){return e},e}function Je(){var e=Object(m.a)(["\n   {\n    margin-left: 20%;\n    @media (max-width: 1200px) {\n      margin-left: 10%;\n    }\n    @media (max-width: 850px) {\n      margin-left: 0px;\n      margin-top: 50px;\n    }\n    @media (max-width: 495px) {\n      margin-top: 60px\n    }\n  }\n"]);return Je=function(){return e},e}function Ue(){var e=Object(m.a)(["\n   {\n    margin-top: 75px;\n    margin-left: 200px;\n    @media (max-width: 850px) {\n      margin-top: 50px;\n      margin-left: 50px;\n    }\n  }\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 30px;\n    color: #706b6b;\n    @media (max-width: 700px) {\n      font-size: 14px;\n    }\n  }\n"]);return Xe=function(){return e},e}function Ve(){var e=Object(m.a)(["\n   {\n    font-size: 16px;\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n"]);return Ve=function(){return e},e}var $e=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.fixed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement("div",{className:"menu-container"},r.a.createElement(h.a,{src:Fe.a,fluid:!0}),r.a.createElement(g.a,{borderless:!0,fixed:e?"top":null,style:{border:"none",boxShadow:"none",padding:"15px"}},r.a.createElement(an,{as:g.a.Menu,position:"right"},r.a.createElement(l.b,{to:"/",className:"hvr-grow-shadow"},r.a.createElement(Ke,{as:g.a.Item,style:mn.menu},"About")),r.a.createElement(l.b,{to:"/projects",className:"hvr-grow-shadow"},r.a.createElement(Ke,{as:g.a.Item,style:mn.menu},"Projects")),r.a.createElement("a",{className:"hvr-grow-shadow",href:N.a},r.a.createElement(Ke,{as:g.a.Item,style:mn.menu},"Resume")))))),r.a.createElement(Ne.a,{centered:!0,columns:2},r.a.createElement(Ne.a.Column,{mobile:9,tablet:7,computer:5},r.a.createElement(rn,null,"I'm a Designer"),r.a.createElement(Qe,null,"Creative web designer and illustrator. Focusing on clean and simple design that aid in user experience without distracting from it. Passionate about creating the right emotion through color.")),r.a.createElement(Ne.a.Column,{mobile:5,computer:4},r.a.createElement(nn,{as:h.a,src:Be.a,className:"animate__animated animate__fadeInRightBig"}))),r.a.createElement(Ne.a,{centered:!0,columns:2},r.a.createElement(Ne.a.Column,{mobile:5,computer:4},r.a.createElement(en,{as:h.a,src:Ie.a,className:"animate__animated animate__fadeInLeftBig"})),r.a.createElement(Ne.a.Column,{mobile:9,tablet:7,computer:5},r.a.createElement(on,null,"I'm a Developer"),r.a.createElement(Qe,null,"Talented web developer utilizing the latest technologies to create engaging digital experiences that run across various devices."))),r.a.createElement(Ne.a,{centered:!0,columns:2},r.a.createElement(Ne.a.Column,{mobile:9,tablet:7,computer:5},r.a.createElement(ln,null,"I'm a Woman"),r.a.createElement(Qe,null,"Excited to join the ranks of women in tech and do my part to encourage and help women thrive in that world.")),r.a.createElement(Ne.a.Column,{mobile:5,computer:4},r.a.createElement(tn,{as:h.a,src:We.a,className:"animate__animated animate__fadeInRightBig"}))),r.a.createElement(Ze,{as:Ne.a,centered:!0,columns:2},r.a.createElement(Ne.a.Column,{mobile:5,computer:4},r.a.createElement(en,{as:h.a,src:Pe.a,className:"animate__animated animate__fadeInLeftBig"})),r.a.createElement(Ne.a.Column,{mobile:9,tablet:7,computer:5},r.a.createElement(cn,null,"I'm a Mother"),r.a.createElement(Qe,null,"Mother to four who has gone from knowing less about computers than her two oldest sons to building websites. Now they think mom is pretty cool!"))),r.a.createElement(J,null))}}]),t}(r.a.Component),Ke=b.a.div(Ve()),Qe=b.a.div(Xe()),Ze=b.a.div(Ue()),en=b.a.div(Je()),nn=b.a.div(Ge()),tn=b.a.div(Ye()),an=b.a.div(qe()),rn=b.a.p(Te()),on=b.a.p(Le()),ln=b.a.p(De()),cn=b.a.p(Ae()),mn={menu:{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500",color:"#706B6B"}},sn=$e,un=t(257),pn=t.n(un),fn=t(258),dn=t.n(fn),hn=t(259),gn=t.n(hn),xn=t(260),bn=t.n(xn);function wn(){var e=Object(m.a)(["\n   {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 30px;\n    color: #706b6b;\n    text-align: center;\n    @media (max-width: 700px) {\n      font-size: 15px;\n    }\n  }\n"]);return wn=function(){return e},e}function En(){var e=Object(m.a)(["\n{\n  text-align: center; \n  margin-top: 75px;\n  margin-bottom: 75px;\n  @media(max-width: 700px) {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    }\n}\n"]);return En=function(){return e},e}var vn=b.a.div(En()),yn=b.a.p(wn()),jn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{src:pn.a,fluid:!0}),r.a.createElement(vn,null,r.a.createElement(yn,null,"Whoops! Nothing to see here.",r.a.createElement("br",null)," Just head on back to my ",r.a.createElement(l.b,{to:"/",className:"hvr-grow-shadow",style:{padding:"2px",marginBottom:"5px"}},"homepage."))),r.a.createElement(h.a,{src:gn.a,style:{marginLeft:"25%",marginTop:"-50px"},className:"animate__animated animate__tada animate__slower animate__infinite"}),r.a.createElement(h.a,{src:bn.a,style:{marginLeft:"65%",marginTop:"-30px"},className:"animate__animated animate__tada animate__slower animate__infinite"}),r.a.createElement(h.a,{src:dn.a,centered:!0,style:{marginTop:"-20px"}}),r.a.createElement(J,null))};var On=Object(c.f)((function(e){var n=e.history,t=e.children;return Object(a.useEffect)((function(){var e=n.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),r.a.createElement(a.Fragment,null,t)})),zn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"https://www.julie-greene.com"},r.a.createElement(On,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:sn}),r.a.createElement(c.a,{path:"/projects",component:_e}),r.a.createElement(c.a,{component:jn})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(438),t(439);i.a.render(r.a.createElement(l.a,null,r.a.createElement(zn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,n,t){e.exports=t.p+"static/media/Resume.b01ac44b.pdf"}},[[271,1,2]]]);
//# sourceMappingURL=main.3998fef0.chunk.js.map