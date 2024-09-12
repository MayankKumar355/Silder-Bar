const menubutton=document.querySelector('.menu');
const sidebar=document.querySelector('.sidebar');

//adding event listner to menu btn
menubutton.addEventListener('click',()=>{
    sidebar.classList.add('showsidebar'); //newclass ko add karna ke liye classlist.add or class ka name 

});
//adding event listner to document  btn
menubutton.addEventListener('mouseup',(e)=>{
    if(!sidebar.contains(e.target))
    {
        
    }

});