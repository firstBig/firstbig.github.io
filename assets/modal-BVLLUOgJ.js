import{d as p,G as u,m as f,k as r,o as m,f as k,e as x,i as T}from"./index-ScKnynwN.js";const v=p({__name:"modal",props:{okText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},editVisible:{type:Boolean,default:!1},editTitle:{type:String,default:"新增"}},emits:["update:editVisible"],setup(o,{emit:i}){const e=o,{editVisible:t}=u(e),l=i;f(()=>{console.log(666)});const s=()=>{console.log("ok了"),l("update:editVisible",!1)},a=()=>{console.log("ok了"),l("update:editVisible",!1)};return(b,n)=>{const c=r("a-modal");return m(),k(c,{visible:x(t),"onUpdate:visible":n[0]||(n[0]=d=>T(t)?t.value=d:null),title:o.editTitle,centered:"",onOk:s,onCancel:a,okText:e.okText,cancelText:e.cancelText},null,8,["visible","title","okText","cancelText"])}}});export{v as default};