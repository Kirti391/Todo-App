

let  btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
    // console.log("clicked");
    // console.log(inp.value);
    let item=document.createElement("li");
    
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    ul.appendChild(item);
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    inp.value=" ";
     let delBtns= document.querySelectorAll(".delete");
    //  for(delBtn of delBtns){
    //     delBtn.addEventListener("click", function(){
    //         // console.log("element delted");
    //         let par=delBtn.parentElement;
    //         // console.log(par);
    //         par.remove();
    //     })
    //  }

    ul.addEventListener("click",function(event){
        // console.log("button clicked");
        // console.log(event.target);
        // console.dir(event.target);
        // console.log(event.target.nodeName);
        if(event.target.nodeName=="BUTTON"){
            let listItem=event.target.parentElement;
            console.log(" task delted");
            // console.log(listItem);
            listItem.remove();
            
        }
    })

})
