//myLeads->should be assigned to an empty array
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveButton = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el")
const delButton=document.getElementById("del-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const saveTabButton=document.getElementById("save-tab-btn");

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


saveTabButton.addEventListener("click",function(tabs){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        let activeTab=tabs[0];
        let activeTabUrl=activeTab.url;
        myLeads.push(activeTabUrl)
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
   
})

delButton.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads.length=0;
    render(myLeads)
})

saveButton.addEventListener("click", function () {
    let lead = inputEl.value.trim();
    if(lead=== "")return
    if(!lead.startsWith("https://") && !lead.startsWith("http://")){
        lead="https://"+lead; 
    }
    myLeads.push(lead);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads)

})

let trueOrFalse=Boolean("hello");
console.log(trueOrFalse);

function render(leads) { 
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li> <a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`;
        console.log(listItems)
      
    }
        ulEl.innerHTML = listItems
 
      /* Alternative to innerHTML 
    
            const li=document.createElement("li");
            li.textContent=myLeads[i]
            ulEl.append(li);
            
            */
           /* Faster alternative(Prioritizes re-rendering only the new item and not the entire list)

           function renderLead(){
            let listItem=`<li>${inputEl.value}</li>`
            ulEl.innerHTML+=listitem
           }
           
           */
}
/*const welcomeEl=document.getElementById("welcome-el");
function greetUser(greeting,name,emoji){
    welcomeEl.textContent=`${greeting}, ${name} ${emoji}.`
}

greetUser("Oyaa","Justin Mwathi","👋")

function add(num1,num2){
    return num1+num2;
}
function getFirst(arr){
return arr.shift()
}
console.log(getFirst([12,24,36,78]));

console.log(add(9,6));
console.log(add(3,4));*/