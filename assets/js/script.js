const elMusicBoxPosts = document.querySelectorAll(".music-box-post");

const musicUrlLists = [
  {
    id: 1,
    dataPost: "22 เมษายน 2024",
    caption: "Real like up  you and me",
    music: "1.mp3",
    like: "love.png",
    likeText: "รักเลย",
    likeColor: "#F14A62",
    allLike: ["love.png", "care.png", "like.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 1,515 คน",
  },
  {
    id: 2,
    dataPost: "22 เมษายน 2024",
    caption: "รับหน่อยมั้ยคนดี?",
    music: "2.mp3",
    like: "care.png",
    likeText: "ห่วงใย",
    likeColor: "#F7B125",
    allLike: ["care.png", "haha.png", "love.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 1,125 คน",
  },
  {
    id: 3,
    dataPost: "22 เมษายน 2024",
    caption: "เธออยู่บนนั้นหรือป่าว? 💫",
    music: "3.mp3",
    like: "love.png",
    likeText: "รักเลย",
    likeColor: "#F14A62",
    allLike: ["love.png", "care.png", "wow.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 1,325 คน",
  },
  {
    id: 4,
    dataPost: "22 เมษายน 2024",
    caption: "Girl, You super sexy🫣",
    music: "4.mp3",
    like: "wow.png",
    likeText: "ว้าว",
    likeColor: "#F7B125",
    allLike: ["care.png", "wow.png", "love.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 925 คน",
  },
  {
    id: 5,
    dataPost: "22 เมษายน 2024",
    caption: "ซามีคำซอ🫡",
    music: "5.mp3",
    like: "love.png",
    likeText: "รักเลย",
    likeColor: "#F14A62",
    allLike: ["love.png", "haha.png", "care.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 725 คน",
  },
  {
    id: 6,
    dataPost: "17 กรกฎาคม 2024",
    caption: "3^o7",
    music: "6.mp3",
    like: "care.png",
    likeText: "ห่วงใย",
    likeColor: "#F7B125",
    allLike: ["care.png", "love.png", "wow.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 115 คน",
  },
  {
    id: 7,
    dataPost: "17 กรกฎาคม 2024",
    caption: "ในคืนที่ดาวอยู่เต็มฟ้า✨✨",
    music: "7.mp3",
    like: "care.png",
    likeText: "ห่วงใย",
    likeColor: "#F7B125",
    allLike: ["care.png", "love.png", "wow.png"],
    userLikeText: "คุณ, Minee และคนอื่นๆ อีก 95 คน",
  },
];

musicUrlLists.reverse();

for (let i = 0; i < elMusicBoxPosts.length; i++) {

  // สร้าง Array มาเก็บรูปไว้ชั่วคราวเพื่อนำไปใช้ต่อ
  let img = [];
  let elTemporary;
  musicUrlLists[i].allLike.forEach((i) => {
    img.push(`<img src="assets/images/${i}" alt=""></img>`); 
  });

  elMusicBoxPosts[i].innerHTML = `
        <div class="header-post">
            <div class="avatar-post">
                <img src="assets/images/avatar.jpg" alt="">
            </div>
            <div class="info-header-post">
                <div class="username-post">
                    <h4>Thaksin</h4>
                </div>
                <div class="date-post">
                    <p>${musicUrlLists[i].dataPost} · <i class="fa-solid fa-earth-americas"></i></p>
                </div>
            </div>
        </div>
        <div class="post-content">
            <div class="post-caption">
                <p>${musicUrlLists[i].caption}</p>
            </div>
            <div class="box-post-image">
                <div class="post-image">
                    <!-- <img src="assets/images/photos1.jpg" alt=""> -->
                    <div class="box-music" id="boxmusic${i}">
                        <div class="box-cd">
                            <div class="card-cd">
                                <img src="assets/images/java-logo.png" alt="">
                            </div>
                            <div class="cd" id="music${i}">
                                <img id="musicp${i}" src="assets/images/cd.png" alt="">
                            </div>
                        </div>
                        <div class="control-music">
                            <audio id="audio${i}" controls style="display: none;">
                                <source src="assets/musics/${musicUrlLists[i].music}" type="audio/mpeg">
                                เบราว์เซอร์ของคุณไม่รองรับอิลิเมนต์เสียง
                            </audio>
                            <button class="play-btn" onclick="togglePlayPause(${i})">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="like-post">
                <div class="number-of-likes">
                    <div class="like-icon">
                      ${img}
                    </div>
                    <div class="user-like-post">
                        <a>&nbsp;${musicUrlLists[i].userLikeText}</a>
                    </div>
                </div>
                <hr>
                <div class="box-like-share-comment">
                    <button class="like">
                        <img src="assets/images/${musicUrlLists[i].like}" alt="">
                        <p style="color: ${musicUrlLists[i].likeColor}">&nbsp; ${musicUrlLists[i].likeText}</p>
                    </button>
                    <button class="comment">
                        <i class="fa-regular fa-message"></i>
                        <p>&nbsp; แสดงความคิดเห็น</p>
                    </button>
                    <button class="share">
                        <i class="fa-solid fa-share"></i>
                        <p>&nbsp; แชร์</p>
                    </button>
                </div>
                <hr>
            </div>
        </div>
    `;
}

function togglePlayPause(index) {
  const audio = document.getElementById(`audio${index}`);
  const playBtn = document.querySelector(`#boxmusic${index} .play-btn i`);
  const rgbMusic = document.querySelector(`#boxmusic${index} .cd`);
  const cd = document.querySelector(`#boxmusic${index} .cd img`);

  if (audio.paused) {
    audio.play();
    playBtn.className = "fas fa-pause";
    cd.classList.toggle("rotate");
    rgbMusic.classList.toggle("rgb-music");
  } else {
    audio.pause();
    playBtn.className = "fas fa-play";
    cd.classList.toggle("rotate");
    rgbMusic.classList.toggle("rgb-music");
  }

  audio.addEventListener("ended", function () {
    pauseMusic(index);
  });
}

function pauseMusic(index) {
  const audio = document.getElementById(`audio${index}`);
  const playBtn = document.querySelector(`#boxmusic${index} .play-btn i`);
  const rgbMusic = document.querySelector(`#boxmusic${index} .cd`);
  const cd = document.querySelector(`#boxmusic${index} .cd img`);

  audio.pause();
  playBtn.className = "fas fa-play";
  cd.classList.remove("rotate");
  rgbMusic.classList.remove("rgb-music");
}
