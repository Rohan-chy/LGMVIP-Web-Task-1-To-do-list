const data=document.getElementById("inp");
const container=document.getElementById("container");

function Add(){
    
     const newDiv=document.createElement("div");   
     newDiv.setAttribute("class","task");

     const header=document.createElement("h3");
     header.innerHTML=`${data.value}`;
     newDiv.append(header);

     const delButton=document.createElement("button");
    delButton.innerHTML="X";
    newDiv.append(delButton);

    container.append(newDiv);

    data.value=" ";

    newDiv.querySelector("button").addEventListener("click",function(){
        newDiv.remove();
    })

}
