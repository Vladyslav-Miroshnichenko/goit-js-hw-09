import"./assets/styles-d4add205.js";const o=document.querySelector(".feedback-form");let t={email:"",message:""};const r=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){t=e;for(const a in e)e.hasOwnProperty(a)&&(o.elements[a].value=e[a])}};r();const s=e=>{const a=e.target.name,l=e.target.value;t[a]=l,localStorage.setItem("feedback-form-state",JSON.stringify(t))},m=e=>{e.preventDefault(),!t.email||!t.message?alert("Fill please all fields"):(console.log(t),localStorage.removeItem("feedback-form-state"),t.email="",t.message="",o.reset())};o.addEventListener("input",s);o.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
