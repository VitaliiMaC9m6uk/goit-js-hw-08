const e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");e.addEventListener("input",(function(e){const{elements:{email:t,message:a}}=e.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:t.value,message:a.value}))}));const r=JSON.parse(localStorage.getItem("feedback-form-state"));r&&(t.value=r.email,a.value=r.message);
//# sourceMappingURL=03-feedback.0461b166.js.map