(function(t){function e(e){for(var o,r,n=e[0],c=e[1],l=e[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0889":function(t,e,a){t.exports=a.p+"img/backgroundimage.b8e11b8f.svg"},"23e1":function(t,e,a){"use strict";var o=a("fa45"),s=a.n(o);s.a},"380c":function(t,e,a){},"3b29":function(t,e,a){},"3b46":function(t,e,a){t.exports=a.p+"img/mobiledevelopment.d5b84089.svg"},"433a":function(t,e,a){t.exports=a.p+"img/Labdecabits_Labdecabits.c65aefd6.png"},"53ad":function(t,e,a){t.exports=a.p+"img/banner0.46edf7b7.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"App"},n=r,c=a("2877"),l=Object(c["a"])(n,s,i,!1,null,null,null),m=l.exports,d=a("f309"),u=a("5a58"),p=a.n(u);o["default"].use(p.a),o["default"].use(d["a"]);var f=new d["a"]({}),h=a("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home",attrs:{id:"Home"}},[o("v-app",[o("v-app-bar",{attrs:{color:"FFFFFF",fixed:""}},[o("v-img",{staticClass:"icon",staticStyle:{"margin-right":"60%"},attrs:{src:a("6147"),"max-height":"60",contain:""},on:{click:function(e){return t.logoopen()}}}),o("v-text-field",{staticClass:"searchbox",staticStyle:{"border-radius":"11px"},attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search.."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),o("v-btn",{staticClass:"ma-2",staticStyle:{width:"150px",height:"40px",margin:"0 20px !important","font-size":"16px"},attrs:{dark:"",small:"",color:"#070785"},on:{click:function(e){return t.showContact()}}},[t._v("Contact Us")])],1),o("v-content",[o("Banner",{on:{bannerClicked:t.reachusbanner}}),o("Textarea"),t._v(" "),o("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3},expression:"{ duration: 1000 }"}],staticStyle:{"text-decoration":"none"},attrs:{href:"#desc"}},[o("Cards",{attrs:{Itemfilter:t.filteredItems},on:{cardClicked:t.onchildClick,AllItems:t.storeData,AllTags:t.storeTags}})],1),o("div",{staticStyle:{height:"20px"},attrs:{id:"desc"}}),o("Projectdescription",{staticStyle:{display:"none"},attrs:{pname:t.singleItem,id:"pdesc"}}),o("comments",{staticStyle:{display:"none"},attrs:{id:"cmnt"}})],1)],1),o("router-view"),o("b-modal",{ref:"my-modal",staticClass:"contactUS",attrs:{size:"md",centered:"","hide-footer":"",title:"Contact Us !"}},[o("div",{staticClass:"d-block text-center"},[o("p",[t._v(" Want to discuss some work?"),o("br"),t._v(" Just drop a message below or mail us at "),o("a",{attrs:{href:"info@decabits.com"}},[t._v("info@decabits.com")])])]),o("form",{ref:"form",staticClass:"contactModal",on:{submit:t.submitData}},[o("div",[o("b-form-input",{attrs:{id:"your_name",placeholder:"  Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),o("p",{staticClass:"validate"},[t._v(t._s(t.errors.name))]),o("b-form-input",{attrs:{id:"your_email",placeholder:"  Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),o("p",{staticClass:"validate"},[t._v(t._s(t.errors.email))]),o("b-form-input",{attrs:{id:"phone-input",placeholder:" Phone No."},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),o("p",{staticClass:"validate"},[t._v(t._s(t.errors.phone))])],1),o("div",[o("b-form-textarea",{attrs:{id:"message",placeholder:"Your message...",rows:"5"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),o("p",{staticClass:"validate"},[t._v(t._s(t.errors.message))])],1),o("b-button",{staticStyle:{margin:"auto",display:"flex"},attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),o("div",{staticStyle:{"margin-top":"20px",width:"100%","justify-content":"center",display:"flex"}},[o("a",{attrs:{href:"https://www.linkedin.com/company/decabits/",target:"_blank"}},[o("i",{staticClass:"fab fa-linkedin fa-2x",staticStyle:{margin:"5px 5px",color:"#0077B7"}})]),o("a",{attrs:{href:"https://github.com/decabits",target:"_blank"}},[o("i",{staticClass:"fab fa-github fa-2x",staticStyle:{margin:"5px 5px",color:"black"}})])])]),o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" "),o("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)},g=[],b=(a("a4d3"),a("e01a"),a("4de4"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("466d"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{staticClass:"banner",staticStyle:{width:"90%",margin:"120px auto 0 auto","border-radius":"16px"},attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":"","hide-delimiters":"true"}},t._l(t.items,(function(e,o){return a("v-carousel-item",{key:o,staticStyle:{"border-radius":"16px"},attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(a){return t.banneropen(e.bname)}}})})),1)}),y=[],w=a("53ad"),x=a.n(w),C=a("e29c"),_=a.n(C),k=a("6a15"),S=a.n(k),I=a("af19"),V=a.n(I),E=a("d1e6"),O=a.n(E),j={data:function(){return{items:[{src:x.a,bname:"labdecabits"},{src:_.a,bname:"blogomaker"},{src:S.a,bname:"blogomaker"},{src:V.a,bname:"blogomaker"},{src:O.a,bname:"reachus"}]}},methods:{banneropen:function(t){"reachus"==t?this.reserve(t):"blogomaker"==t&&window.open("https://logomaker.decabits.com/")},reserve:function(t){this.$emit("bannerClicked",t)}}},F=j,A=(a("f230"),a("6544")),B=a.n(A),T=a("5e66"),$=a("3e35"),D=Object(c["a"])(F,b,y,!1,null,null,null),L=D.exports;B()(D,{VCarousel:T["a"],VCarouselItem:$["a"]});var P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Parent"},[o("v-img",{staticClass:"backimg",attrs:{src:a("0889")}}),o("h2",{staticClass:"text"},[t._v("Welcome to Lab Decabits")]),o("p",{staticClass:"para "},[t._v(" Your self designed laboratory to create richly detailed, open-source & effective tools. Brainstorming, finding ideas & experimenting with the latest tech stack is now a click away. Quench your knowledge thirst in 3,2,1! tab to click ")])],1)},W=[],M=(a("9e9f"),a("adda")),G={},N=Object(c["a"])(G,P,W,!1,null,null,null),q=N.exports;B()(N,{VImg:M["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cards"},[a("div",{staticStyle:{"padding-top":"70px"},attrs:{id:"skl"}},[a("v-row",t._l(t.Itemfilter,(function(t,e){return a("v-col",{key:e,attrs:{cols:"6",sm:"4"}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card,paragraph,button"}})],1)})),1)],1),a("b-container",{staticStyle:{display:"none",width:"90%"},attrs:{id:"crd",fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.Itemfilter,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",sm:"4"}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(o){var s=o.hover;return[a("v-card",{staticClass:"mx-auto my-12",staticStyle:{"border-radius":"16px"},attrs:{elevation:s?16:2,loading:t.loading,"max-width":"420"},on:{click:function(a){return t.reserve({item:e})}}},[a("div",{staticClass:"logoimage"},[a("v-img",{attrs:{src:e.img,"aspect-ratio":"2"}})],1),a("v-card-title",[t._v(t._s(e.pname))]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("div",{staticClass:"grey--text ml-4"})]),a("div",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.description))])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("v-chip-group",{attrs:{column:""}},t._l(e.tags,(function(e){return a("v-chip",{key:e,attrs:{color:"#3389C2","text-color":"white"}},[t._v(t._s(e))])})),1)],1),a("v-card-actions",[a("v-btn",{staticStyle:{"border-radius":"11px"},attrs:{color:"#2496FF",dark:"",text:""},on:{click:function(a){return t.reserve({item:e})}}},[t._v(" Read More ")])],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},U=[],J=a("beef"),R=a.n(J),z={methods:{reserve:function(t){var e=t.item,a=t.i;this.$emit("cardClicked",{item:e,i:a})}},mounted:function(){var t=this;setTimeout((function(){console.log("3s elapsed!"),"none"==document.getElementById("crd").style.display&&(document.getElementById("crd").style.display=""),""==document.getElementById("skl").style.display&&(document.getElementById("skl").style.display="none")}),3e3),setTimeout((function(){t.$emit("AllItems",t.items)}),0),setTimeout((function(){t.$emit("AllTags",t.items.tags)}),0)},props:{Itemfilter:Array},data:function(){return{items:[{img:R.a,pname:"Logo Maker",rating:4,numberOfPeopleRated:143,description:"Make your own unique logo for free ",tags:["Vue.js","HTML","CSS","Fabric.js"],review:["Good","Awesome","Loved it","Not Good"]}]}}},Y=z,Q=a("8336"),X=a("b0af"),K=a("99d9"),Z=a("cc20"),tt=a("ef9a"),et=a("62ad"),at=a("ce7e"),ot=a("ce87"),st=a("0fd9"),it=a("3129"),rt=Object(c["a"])(Y,H,U,!1,null,null,null),nt=rt.exports;B()(rt,{VBtn:Q["a"],VCard:X["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VChip:Z["a"],VChipGroup:tt["a"],VCol:et["a"],VDivider:at["a"],VHover:ot["a"],VImg:M["a"],VRow:st["a"],VSkeletonLoader:it["a"]});var ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project"},[o("b-container",{staticStyle:{"margin-top":"50px",width:"90%"},attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("h3",{staticClass:"headingPr"},[t._v(t._s(t.pname.pname))]),o("v-card",{staticStyle:{"border-radius":"11px 11px 0px 0px"}},[o("v-img",{staticClass:"white--text align-end",staticStyle:{height:"300px"},attrs:{src:t.pname.img}}),o("v-card-text",{staticClass:"text--primary"},[o("p",{staticStyle:{width:"fit-content",margin:"0 auto"}},[t._v(" "+t._s(t.pname.description)+" ")])])],1)],1),o("v-col",{staticStyle:{position:"relative"},attrs:{cols:"6"}},[o("div",{staticClass:"infoSection"},[o("div",[o("p",[t._v("Website:")]),o("a",{staticStyle:{color:"#2496FF"},attrs:{href:"https://logomaker.decabits.com/",target:"_blank"}},[t._v("https://logomaker.decabits.com/")])]),o("div",[o("p",[t._v("Category:")]),o("p",[t._v("Logomaker, Web Service")])]),o("div",[o("p",[t._v("Tags:")]),o("p",[t._v("Logo, Design, Graphics, UI")])]),o("div",[o("p",[t._v("Share:")]),o("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fdecabits%2F&src=sdkpreparse",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook"})]),o("a",{attrs:{href:"https://twitter.com/intent/tweet?text=Checkout this awesome development tool-Logo Maker- at https://labs.decabits.com/",target:"_blank"}},[o("i",{staticClass:"fa fa-twitter"})]),o("a",{attrs:{href:"https://api.whatsapp.com/send?phone=+91999925147&text=Checkout this awesome development tool-Logo Maker- at https://labs.decabits.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-whatsapp",staticStyle:{color:"#4FCE5D"}})])])])])],1)],1),o("div",[o("p",{staticClass:"desc"},[t._v("Project Description")]),o("v-img",{staticStyle:{height:"60%",width:"60%",margin:"0 auto"},attrs:{src:a("433a")}}),o("p",{staticClass:"content"},[t._v(" Our foremost project at labs decabits is created with a vision to help other startups to flourish & grow with minimal investment. To begin with, we want to provide our customers with utmost convenience. ")]),o("p",{staticClass:"content"},[t._v(" Any consumer who wants to explore & design logomakes can begin with selecting/outlining a company name followed by picking fonts & case. The next step for creating the perfect trademark is connecting symbolic shades & colors to it. Move further by determining & specifying meaningful icons for a pleasing layout. ")]),o("p",{staticClass:"content"},[t._v(" Our high tech team of designers & developers have collaborated to fabricate the flawless logomakes. With frontend technology like Vue.JS, HTML & CSS- the project was set up & completed with precision & fruitful results. Apart from the basic technologies & coding, a very special part & copart of this project is contributed by an inbuilt canvas library called Fabric.JS. A powerful & simple library to build SVGs. With an easy yet robust tech stack, Labs.decabits delivered its very first open source tool for going live. ")]),o("p",{staticClass:"content"},[t._v(" A noteworthy detail & feature makes its free download service of the logos, in all formats like PNG, JPEG & SVG (With or without background) ")]),o("p",{staticClass:"content"},[t._v(" Any logo the consumer may create will directly be saved in the galleries, even if you are halfway through. Once you want to get back to the design, with a single click the consumer will be redirected to an editable file for making the needful alterations. ")]),o("div",{staticStyle:{height:"100px"}}),o("p",{staticStyle:{"margin-left":"15%","font-weight":"bold"}},[t._v("Step 1 :")]),o("v-img",{staticStyle:{height:"60%",width:"60%",margin:"0 auto",border:"3px solid #999999"},attrs:{src:a("ab99")}}),o("p",{staticStyle:{"margin-left":"15%","font-weight":"bold"}},[t._v("Step 2 :")]),o("v-img",{staticStyle:{height:"60%",width:"60%",margin:"0 auto",border:"3px solid #999999"},attrs:{src:a("7fdb")}}),o("p",{staticStyle:{"margin-left":"15%","font-weight":"bold"}},[t._v("Step 3 :")]),o("v-img",{staticStyle:{height:"60%",width:"60%",margin:"0 auto",border:"3px solid #999999"},attrs:{src:a("6c83")}}),t._m(0)],1)],1)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"content",staticStyle:{margin:"16px auto","text-align":"center"}},[t._v(" Feel free to give your suggestions or feedback in the following link or mail us at "),a("a",{attrs:{href:"info@decabits.com"}},[t._v("info@decabits.com")])])}],mt={components:{Cards:nt},data:function(){return{review:["Good","Awesome","Loved it","Not Good"],comment:""}},props:{pname:Object,stringProp:String,title:String},methods:{vclick:function(){console.log(this.props)}}},dt=mt,ut=(a("23e1"),Object(c["a"])(dt,ct,lt,!1,null,null,null)),pt=ut.exports;B()(ut,{VCard:X["a"],VCardText:K["b"],VCol:et["a"],VImg:M["a"],VRow:st["a"]});var ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{width:"75%",margin:"0px auto"}},[a("div",{staticClass:"fb-comments",attrs:{"data-href":"https://developers.facebook.com/docs/plugins/comments#labdecabits","data-width":"10px","data-numposts":"5"}})])])}],vt=(a("d81d"),{beforeMount:function(){for(var t=0;t<3;t++)this.commentOutput[t]=localStorage.getItem("comments"+t)},methods:{showContact:function(t){console.log(t.target.value);var e={comment:t.target.value};this.commentInput.push(e)},submitComment:function(){console.log(this.commentInput),this.commentInput.map((function(t,e){return[localStorage.setItem("comments"+e,t.comment)]}))}},data:function(){return{commentInput:[],commentOutput:[]}}}),gt=vt,bt=Object(c["a"])(gt,ft,ht,!1,null,null,null),yt=bt.exports,wt={name:"Home",components:{Banner:L,Textarea:q,Cards:nt,Projectdescription:pt,comments:yt},methods:{reachusbanner:function(t){console.log("Helloooooooo = "+t),this.$refs["my-modal"].show()},logoopen:function(){window.open("https://decabits.com/")},Onchange:function(t){console.log(t.target.value)},validEmail:function(){var t=this.form.email,e=/^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;return e.test(t)?(document.getElementById("your_email").style.borderColor="green",!0):(this.errors.email="Please enter valid email address",document.getElementById("your_email").style.borderColor="red",!1)},submitData:function(t){var e=this;if(t.preventDefault(),""==this.form.name&&(console.log("name empty"),this.errors.name="Name field is required!",document.getElementById("your_name").style.borderColor="red"),""==this.form.email.toString()?this.errors.email="Email field is required!":(this.errors.email="",document.getElementById("your_email").style.borderColor="green"),""==this.form.phone.toString()?(this.errors.phone="Phone field is required!",document.getElementById("phone-input").style.borderColor="red"):(this.errors.phone="",document.getElementById("phone-input").style.borderColor="green"),""==this.form.message.toString()?(this.errors.message="Message field is required!",document.getElementById("message").style.borderColor="red"):(this.errors.message="",document.getElementById("message").style.borderColor="green"),""==this.errors.name&&""==this.errors.email&&""==this.errors.phone&&""==this.errors.message&&this.validEmail()){var a={your_name:this.form.name,contact_submitted:this.form.phone?"yes":"no",your_email:this.form.email,your_message:this.form.message+"\n"+this.form.phone};this.axios.post("https://blog.entnetwrk.com/contact.php",a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){e.snackbar=!0,console.log(t.data)}))}console.log(this.form)},showContact:function(){this.$refs["my-modal"].show()},onchildClick:function(t){document.getElementById("pdesc").style.display="",document.getElementById("cmnt").style.display="",console.log(this.singleItem),this.singleItem.pname=t.item.pname,this.singleItem.img=t.item.img,this.singleItem.description=t.item.description},storeData:function(t){this.cardData=t},storeTags:function(t){this.tagData=t}},data:function(){return{errors:{name:"",email:"",phone:"",message:""},snackbar:!1,text:"Message sent Successfully! ",search:"",tagData:[],cardData:[],singleItem:{pname:"",img:"",description:""},form:{name:"",email:"",message:"",phone:""},drawer:!1,items:[{icon:"mdi-home",route:"/",name:"home"},{icon:"mdi-account",name:"contactus"},{icon:"mdi-cogs",route:"/services",name:"services"}]}},computed:{filteredItems:function(){var t=this;return this.cardData.filter((function(e){return e.pname.toLowerCase().match(t.search.toLowerCase())}))}}},xt=wt,Ct=(a("8b71"),a("7496")),_t=a("40dc"),kt=a("a75b"),St=a("2db4"),It=a("8654"),Vt=Object(c["a"])(xt,v,g,!1,null,null,null),Et=Vt.exports;B()(Vt,{VApp:Ct["a"],VAppBar:_t["a"],VBtn:Q["a"],VContent:kt["a"],VImg:M["a"],VSnackbar:St["a"],VTextField:It["a"]});var Ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"services"},[o("v-app-bar",{attrs:{color:"FFFFFF",fixed:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),o("v-img",{staticClass:"icon",attrs:{src:a("8353"),"max-height":"60",contain:""}})],1),o("v-navigation-drawer",{staticClass:"indogo navdrawer",attrs:{app:"",color:"#2496FF",width:"80px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-app-bar-nav-icon",{staticClass:"navicon mx-4 my-4",attrs:{color:"white"},on:{click:function(e){t.drawer=!t.drawer}}}),o("v-list",{staticClass:"list"},[o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(e,a){return o("v-list-item",{key:a,attrs:{router:"",to:e.route},on:{click:function(a){return t.showContact(e.name)}}},[o("v-list-item-icon",[o("v-icon",{staticClass:"icons",attrs:{nav:"","min-width":"",color:"white",light:""},domProps:{textContent:t._s(e.icon)}})],1)],1)})),1)],1)],1),o("b-modal",{ref:"my-modal",staticClass:"contactUS",attrs:{size:"lg",centered:"","hide-footer":"",title:"Contact Us !"}},[o("div",{staticClass:"d-block text-center"},[o("p",[t._v("Want to discuss some work? Just drop a message below")])]),o("form",{ref:"form",staticClass:"contactModal",attrs:{action:"https://formspree.io/xgezgyyw",method:"POST"}},[o("div",[o("b-form-input",{attrs:{id:"name-input",required:"",placeholder:"  Name"}}),o("b-form-input",{attrs:{id:"email-input",required:"",placeholder:"  Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("b-form-input",{attrs:{id:"phone-input",required:"",placeholder:" Phone No."},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),o("div",[o("b-form-textarea",{attrs:{id:"textarea",placeholder:"Your message...",rows:"5"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]),o("b-button",{staticClass:"mt-3 mx-auto",attrs:{variant:"primary"}},[t._v("Submit")])],1),t._m(0)],1)},jt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-top":"100px"}},[o("div",{staticClass:"container-fluid service",staticStyle:{"text-align":"center"}},[o("div",{staticClass:"row",staticStyle:{width:"50%","text-align":"center",margin:"0 auto"}},[o("div",{staticClass:"col-md-12"},[o("h1",[t._v("Services")]),o("p",[t._v("We are a startup incubator and we strictly follow Agile and test driven development.")])])])]),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("img",{staticClass:"column-image img-responsive",attrs:{src:a("80c6"),alt:"Web Development"}}),o("h3",{staticClass:"service-content"},[t._v("Web Development")]),o("p",{staticClass:"service-content"},[t._v("We develop Scalable Web Applications that can handle traffic of million users, Cloud based Web Apps on AWS/Google Services. We also provide Hosting on Cloud Based Solutions.")])]),o("div",{staticClass:"col-md-4"},[o("img",{staticClass:"column-image img-responsive",attrs:{src:a("ea6f"),alt:"Web Design"}}),o("h3",{staticClass:"service-content"},[t._v("Web Designing")]),o("p",{staticClass:"service-content"},[t._v("Our Goal is to provide Simple and Smart Websites which are Easy To Navigate and Responsive in Nature. We use Atomic Design Methodology to publish the best possible Results.")])]),o("div",{staticClass:"col-md-4"},[o("img",{staticClass:"column-image img-responsive",attrs:{src:a("3b46"),alt:"Mobile Development"}}),o("h3",{staticClass:"service-content"},[t._v("Mobile Developement")]),o("p",{staticClass:"service-content"},[t._v("We provide Application development across Android and iOS with agile UI/UX solutions. ")])])])])])}],Ft={data:function(){return{drawer:!1,items:[{icon:"mdi-home",route:"/",name:"home"},{icon:"mdi-account",name:"contactus"},{icon:"mdi-cogs",route:"/services",name:"services"}]}},methods:{showContact:function(t){console.log(t),"contactus"==t&&this.$refs["my-modal"].show()}}},At=Ft,Bt=(a("63ee"),a("5bc1")),Tt=a("132d"),$t=a("8860"),Dt=a("da13"),Lt=a("1baa"),Pt=a("34c3"),Wt=a("f774"),Mt=Object(c["a"])(At,Ot,jt,!1,null,null,null),Gt=Mt.exports;B()(Mt,{VAppBar:_t["a"],VAppBarNavIcon:Bt["a"],VIcon:Tt["a"],VImg:M["a"],VList:$t["a"],VListItem:Dt["a"],VListItemGroup:Lt["a"],VListItemIcon:Pt["a"],VNavigationDrawer:Wt["a"]}),o["default"].use(h["a"]);var Nt=new h["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Et},{path:"/services",name:"Services",component:Gt}]}),qt=Nt,Ht=a("5f5b"),Ut=a("b1e0"),Jt=(a("f9e3"),a("2dd8"),a("bc3a")),Rt=a.n(Jt),zt=a("a7fe"),Yt=a.n(zt);o["default"].use(Yt.a,Rt.a),o["default"].use(Ht["a"]),o["default"].use(Ut["a"]),o["default"].config.productionTip=!1,new o["default"]({vuetify:f,router:qt,render:function(t){return t(m)}}).$mount("#app")},6147:function(t,e,a){t.exports=a.p+"img/Labdecabits_logo.fc7682d4.svg"},"63ee":function(t,e,a){"use strict";var o=a("3b29"),s=a.n(o);s.a},"6a15":function(t,e,a){t.exports=a.p+"img/banner2.6707cfad.svg"},"6c83":function(t,e,a){t.exports=a.p+"img/gif3.9b220dac.gif"},"7fdb":function(t,e,a){t.exports=a.p+"img/gif2.68e3f490.gif"},"80c6":function(t,e,a){t.exports=a.p+"img/webdevelopment.ec508a0f.svg"},8353:function(t,e,a){t.exports=a.p+"img/decabitslogo.7f431ae1.svg"},"8b71":function(t,e,a){"use strict";var o=a("ce77"),s=a.n(o);s.a},"9e9f":function(t,e,a){"use strict";var o=a("ffb4"),s=a.n(o);s.a},ab99:function(t,e,a){t.exports=a.p+"img/gif1.cc6b3480.gif"},af19:function(t,e,a){t.exports=a.p+"img/banner3.cdaa6c37.svg"},beef:function(t,e,a){t.exports=a.p+"img/LogomakerLogo.8d70d83d.svg"},ce77:function(t,e,a){},d1e6:function(t,e,a){t.exports=a.p+"img/banner4.4fcbe273.svg"},e29c:function(t,e,a){t.exports=a.p+"img/banner1.5e5fd1df.svg"},ea6f:function(t,e,a){t.exports=a.p+"img/webdesign.5d866ad1.svg"},f230:function(t,e,a){"use strict";var o=a("380c"),s=a.n(o);s.a},fa45:function(t,e,a){},ffb4:function(t,e,a){}});
//# sourceMappingURL=app.4dcd31e6.js.map