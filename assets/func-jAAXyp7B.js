let u=(e,o)=>{let r=null,l="";return e.type=="number"&&(l=/^\d+$/,e.length&&(l=new RegExp("^\\d{"+e.length+"}$")),r=l.test(o)),r},f=e=>({username:e.username,password:e.password,code:Math.random()*10});function s(e,o){return typeof e!="object"&&(e={}),Object.keys(o).forEach(function(r){const l=o[r],n=e[r];typeof l=="object"&&l!==null?Array.isArray(l)?(e[r]=n&&Array.isArray(n)?n:[],e[r]=s(e[r],l)):(e[r]=n&&typeof n=="object"&&!Array.isArray(n)?n:{},e[r]=s(e[r],l)):e[r]=l}),e}export{s as deepMerge,f as login,u as reg,u as regular};