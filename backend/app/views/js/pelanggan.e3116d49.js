(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pelanggan"],{"02fa":function(t,s,a){},"15b3":function(t,s,a){"use strict";a("02fa")},"7cde":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"mt-3"},[e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticClass:"display-1 font-weight-bold"},[t._v(" Data Pelanggan ")])]),e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{justify:"end",align:"center"}})],1),t._l(t.productData,(function(s,n){return[e("v-col",{key:n,attrs:{cols:"12"}},[e("div",{staticClass:"box rounded-lg py-2"},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"2"}},[e("v-img",{attrs:{src:a("c121"),contain:""}})],1),e("v-col",{attrs:{cols:"7"}},[e("p",{staticClass:"title"},[t._v(t._s(s.name))]),e("p",{staticClass:"subtitle-1"},[t._v("Nama Lengkap: "+t._s(s.fullname))]),e("p",{staticClass:"subtitle-1"},[t._v("Alamat : "+t._s(s.address))]),e("p",{staticClass:"subtitle-1"},[t._v("Email : "+t._s(s.email))])]),e("v-col",{attrs:{cols:"1"}},[e("v-btn",{attrs:{large:"",block:"",depressed:"",dark:""},on:{click:function(s){return t.jumpTo(n)}}},[t._v(" Info ")])],1),e("v-col",{attrs:{cols:"1"}},[e("v-btn",{attrs:{large:"",block:"",depressed:"",dark:""},on:{click:function(s){return t.handleDelete(n)}}},[t._v(" Hapus ")])],1)],1)],1)])]}))],2)],1)},n=[],o=a("1f57"),r={name:"Home",components:{},data:()=>({productData:[]}),methods:{jumpTo(t){const s=this.productData[t]._id;this.$router.push({path:"/admin/info-pelanggan/"+s})},handleDelete(t){const s=this.productData[t]._id;o["a"].removeUser(s).then(t=>{console.log(t),this.$router.go()},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}},mounted(){this.$store.state.auth.user?this.$router.push({path:"/"}):this.$store.state.adminAuth.admin||this.$router.push({path:"/admin/login"}),o["a"].getAllUsers().then(t=>{this.productData=t.data,console.log(this.productData)},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}},l=r,c=(a("15b3"),a("2877")),i=a("6544"),u=a.n(i),d=a("8336"),p=a("62ad"),g=a("a523"),h=a("adda"),m=a("0fd9"),v=Object(c["a"])(l,e,n,!1,null,null,null);s["default"]=v.exports;u()(v,{VBtn:d["a"],VCol:p["a"],VContainer:g["a"],VImg:h["a"],VRow:m["a"]})},c121:function(t,s,a){t.exports=a.p+"img/user.f7e5e3f5.png"}}]);
//# sourceMappingURL=pelanggan.e3116d49.js.map