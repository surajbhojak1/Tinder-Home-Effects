//------Data-----

(function createContainer (){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div")
        div.classList.add(`${element.classList[1]}container`)
        div.appendChild(element)
        select(".details").appendChild(div)
    })
})();





let usersInfos = [
    {
        profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 6,
        location: "Delhi, India",
        name: "Sanya",
        age: 22,
        interests: [{
            icon:`<i class="text-lg ri-quill-pen-fill"></i>`,
            instName:"Writing"
        },{
            icon:` <i class="text-lg ri-spotify-fill"></i>`,
            instName:"Music"
        }],
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur saepe esse deleniti explicabo voluptate?",
        isfriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location: "Pune, India",
        name: "Harshita",
        age: 24,
        interests: [{
            icon:`<i class="text-lg ri-quill-pen-fill"></i>`,
            instName:"Writing"
        },{
            icon:` <i class="text-lg ri-spotify-fill"></i>`,
            instName:"Music"
        }],
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur saepe esse deleniti explicabo voluptate?",
        isfriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 7,
        location: "Maharastya, India",
        name: "Amulya",
        age: 21,
        interests: [{
            icon:`<i class="text-lg ri-quill-pen-fill"></i>`,
            instName:"Writing"
        },{
            icon:` <i class="text-lg ri-spotify-fill"></i>`,
            instName:"Music"
        },{
            icon:`<i class="text-lg ri-mic-2-fill"></i>`,
            instName:"Singing"
        }],
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur saepe esse deleniti explicabo voluptate?",
        isfriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Maharastya, India",
        name: "Avni",
        age: 25,
        interests: [{
            icon:`<i class="text-lg ri-quill-pen-fill"></i>`,
            instName:"Writing"
        },{
            icon:` <i class="text-lg ri-spotify-fill"></i>`,
            instName:"Music"
        }],
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur saepe esse deleniti explicabo voluptate?",
        isfriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1618375066375-c09d6d1c7925?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1618374845648-162318f1e486?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location: "Maharashtra, India",
        name: "Shivani",
        age: 20,
        interests: [{
            icon:`<i class="text-lg ri-quill-pen-fill"></i>`,
            instName:"Writing"
        },{
            icon:` <i class="text-lg ri-spotify-fill"></i>`,
            instName:"Music"
        }],
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur saepe esse deleniti explicabo voluptate?",
        isfriend: null,
    }
];

let curr = 0;
let isAnimating = false;

function setdata(indx){

    select(".ProfileImg img").src = usersInfos[indx].profilePic;
    select(".bdge h5").textContent = usersInfos[indx].pendingMessage;
    select(".location h3").textContent = usersInfos[indx].location;
    select(".name h1:nth-child(1)").textContent = usersInfos[indx].name;
    select(".name h1:nth-child(2)").textContent = usersInfos[indx].age;


    let clutter = "";

    usersInfos[indx].interests.forEach(function(inst){
        clutter += ` <div class="Tag bg-white/20 flex justify-center items-center py-1 px-3 rounded-full gap-2">
        ${inst.icon}
        <h3 class="text-lg ">${inst.instName}</h3>
    </div>`
    })
    
    select(".Tags").innerHTML = clutter;

    select(".Bio p").textContent = usersInfos[indx].bio;
}

function select(elem){
    return  document.querySelector(elem)
}

(function setInitial(){
    select(".mainCard img").src = usersInfos[curr].displayPic;
    select(".incomingCard img").src = usersInfos[curr+1]?.displayPic;
    setdata(curr)
    curr = 2;
})();

function changeImages(){
    if(!isAnimating){
        isAnimating = true;
        let tl =  gsap.timeline({
            onComplete: function(){
                isAnimating= false;
                let MainImg = select(".mainCard");
                let IncomingImg = select(".incomingCard");
        
                IncomingImg.classList.remove("z-[2]")
                IncomingImg.classList.add("z-[3]")
                
                IncomingImg.classList.remove("incomingCard")
        
                MainImg.classList.remove("z-[3]")
                MainImg.classList.add("z-[2]")
                gsap.set(MainImg,{
                    scale: 1,
                    opacity: 1,
                })
                if(curr === usersInfos.length) curr = 0;
                select(".mainCard img").src = usersInfos[curr].displayPic;
                curr++;    
        
                MainImg.classList.remove("mainCard")
                MainImg.classList.add("incomingCard")
                IncomingImg.classList.add("mainCard")
            }
           });
        
        
           tl.to(".mainCard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
           },'join')
           .from(".incomingCard",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
           },'join')
    }
  
}

     
     let Deny = select(".deny")
     let Accept = select(".accept")

Deny.addEventListener("click",function(){
    changeImages();
    setdata(curr-1)
    gsap.from(".details .element",{
        y: "100%",
        stagger: .06,
        opacity: 0 ,
        ease: Power4.easeInOut,
        duration: 1.5
    
    })
})



