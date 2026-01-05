// btn section all categories
const catagoryApi =()=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        catabtn(data.categories)
    })
}
const catabtn = (allbtns) =>{
for (const btns of allbtns) {
    // console.log(btns)
    const btnSection = document.getElementById("btn-section");
    // console.log(btnSection)
    const btn = document.createElement("div");
    btn.innerHTML = `<button onclick=catagoriVideo(${btns.category_id}); id=btn-${btns.category_id} class="btn btn-sm">${btns.category}</button>`;
    btnSection.append(btn);
    
}
}
catagoryApi();
// cata video
const catagoriVideo = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showVideo(data.category)
            removeActive();
            const active = document.getElementById(`btn-${id}`);
            active.classList.add("active")
        })
    showLoading();
}
const removeActive =()=>{
    const activeClasses = document.getElementsByClassName("active");
    for (const active of activeClasses) {
        active.classList.remove("active")
    }
}

// all video
const videoApi = ()=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos`;
    fetch(url)
    .then(res=> res.json())
    .then(data =>{
        removeActive();
        const btncolor = document.getElementById(`btn-all`);
        btncolor.classList.add("active");
        showVideo(data.videos);
        
    })
    showLoading();
}
const showVideo= (videos)=>{
    // console.log(videos)
    
    const videoSection = document.getElementById("video-section");
    videoSection.innerHTML="";
    
    if(videos.length ===0){
        videoSection.innerHTML =`<div id="emtySection" class="col-span-full flex flex-col justify-center items-center py-10">
    <img class="w-[250px]" src="assests/Icon.png" alt="">
    <h2 class="text-3xl font-semibold text-center">Opps! No video available!</h2>
</div>`;
        hideLoading();
        return;
    }
    for (const video of videos) {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `<div class="card bg-base-100">
    <figure>
        <img class="h-[200px] w-auto rounded-sm object-cover" src="${video.thumbnail}" alt="images" />
    </figure>
    <div class="py-5 flex gap-2">

        <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring-2 ring-offset-2">
                <img src="${video.authors[0].profile_picture}" />
            </div>
        </div>
        <div>
            <h2 class="font-semibold">${video.title}</h2>
            <p class="text-[#acaaaa]">${video.authors[0].profile_name}</p>
            <p class="text-[#acaaaa]">${video.others.views}</p>
        </div>
    </div>

        <button onclick=apiForModal('${video.video_id}') class="btn">open modal</button>
</div >
        `;
        videoSection.append(videoCard);
    }
    hideLoading();
}
// search option inp-text
const searchVideoApi=(input="")=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showVideo(data.videos);
    }
    )
    showLoading();
}
const inputSarch=()=>{
    const input = document.getElementById("inp-text");
    input.addEventListener("keyup",(e)=>{
    const inputText = e.target.value;
        searchVideoApi(inputText);
    })
}
inputSarch();
// loder
const hideLoading = ()=>{
    document.getElementById("loader").classList.add("hidden")
    document.getElementById("video-section").classList.remove("hidden")
}

const showLoading = () => {
    document.getElementById("loader").classList.remove("hidden")
    document.getElementById("video-section").classList.add("hidden")
    
}


























//         <button onclick=apiForModal('${video.video_id}') class="btn" > open modal</button >
// </div > `;

// `< div class="modal-box" >
//     <div class="card bg-base-100 image-full w-auto shadow-sm">
//         <figure>
//             <img class="object-cover h-96 w-auto" src="${data.thumbnail}" alt="Shoes" />
//         </figure>
//         <div class="card-body">
//             <h2 class="card-title">${data.title}</h2>
//             <p>${data.description}</p>
//         </div>
//     </div>
//         </div >
//     <form method="dialog" class="modal-backdrop">
//         <button>close</button>
//     </form>`;


// const loadcatagory =()=>{
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then(res => res.json())
//         .then(data => diplayData(data.categories))
// }
// // {
// // "category_id": "1001",
// //     "category": "Music"
// // }
// const diplayData = (categorie)=>{
//     const catagoryContainer = document.getElementById("catagory-container");
//     for (const cat of categorie) {
//         const catagoryDiv = document.createElement("div");
//         catagoryDiv.innerHTML=`
//         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-[#F9F9F9]">${cat.category}</button>
        
//         `;
//         catagoryContainer.append(catagoryDiv)
//     }
// }
// loadcatagory();