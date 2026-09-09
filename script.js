document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    if (!likeBtn) return;

const likeCountSpan = likeBtn.querySelector(".likes-count");
const bookmarkBtn = document.querySelector(".bookmark-btn");

let isLiked = false;
let baseLikes = 0;

//texto inicial 

if(likesCountSpan){
 likeCountSpan.textContent ="0";
}
//numeros acima do 1mil

function formatlikes (num){
    if (num >=1000){
        return (num/1000).toFixed(1)+"K";
    }
    return num.toString();

}


})