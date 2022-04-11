const root = document.querySelector('html');

const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);

const follower = document.createElement('div');
follower.classList.add('cursor','cursor_follower');
root.appendChild(follower);

root.addEventListener('mouseover',(e)=>{
    setPosition(follower,e);
    setPosition(cursor,e);
    
})

function setPosition(element,e){
    element.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
}