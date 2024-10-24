var T=e=>{throw TypeError(e)};var E=(e,t,o)=>t.has(e)||T("Cannot "+o);var s=(e,t,o)=>(E(e,t,"read from private field"),o?o.call(e):t.get(e)),r=(e,t,o)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),g=(e,t,o,i)=>(E(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o),a=(e,t,o)=>(E(e,t,"access private method"),o);import"./modulepreload-polyfill-B5Qt9EMX.js";var d,l,n,h,p;class I{constructor(){r(this,n);r(this,d,[]);r(this,l,null);a(this,n,p).call(this)}addTask(t){s(this,d).push(t),a(this,n,h).call(this),this.displayTodos()}getTasks(){return s(this,d)}deleteTask(t){s(this,d).splice(t,1),a(this,n,h).call(this),this.displayTodos()}editTask(t,o){s(this,d)[t]=o,a(this,n,h).call(this)}displayTodos(){const t=document.getElementById("todoList");t.innerHTML="",s(this,d).forEach((o,i)=>{const c=document.createElement("li");c.textContent=o;const m=document.createElement("button");m.textContent="Edit",m.classList.add("edit-btn"),m.addEventListener("click",()=>this.editTodoItem(i));const u=document.createElement("button");u.textContent="Delete",u.classList.add("delete-btn"),u.addEventListener("click",()=>this.deleteTask(i)),c.appendChild(m),c.appendChild(u),t.appendChild(c)})}editTodoItem(t){document.getElementById("editSection").style.display="block",document.getElementById("editTodoInput").value=s(this,d)[t],g(this,l,t)}saveEditedTask(){const t=document.getElementById("editTodoInput").value;t&&(this.editTask(s(this,l),t),document.getElementById("editSection").style.display="none",this.displayTodos())}}d=new WeakMap,l=new WeakMap,n=new WeakSet,h=function(){localStorage.setItem("todos",JSON.stringify(s(this,d)))},p=function(){g(this,d,JSON.parse(localStorage.getItem("todos"))||[])};const y=()=>{const e=new I;e.displayTodos(),document.getElementById("addTodoButton").addEventListener("click",function(){const t=document.getElementById("todoInput").value;t&&(e.addTask(t),document.getElementById("todoInput").value="",e.displayTodos())}),document.getElementById("saveEditButton").addEventListener("click",function(){e.saveEditedTask()})},k=localStorage.getItem("registeredEmail");document.getElementById("userEmail").textContent=`Logged in as: ${k}`;document.getElementById("logoutButton").addEventListener("click",function(){localStorage.removeItem("registeredEmail"),localStorage.removeItem("registeredPassword"),window.location.href="/src/homepage/homepage.html"});y();
