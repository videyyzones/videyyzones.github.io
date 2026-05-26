const videos = [
  {
    title: "Video 1",
    views: "12K views",
    thumb: "",
    src: "https://cdn.videy.co/m8uOvANC1.mp4"
  },
  {
    title: "Video 2",
    views: "15K views",
    thumb: "https://picsum.photos/300/500?random=2",
    src: "https://cdn.videy.co/6DUw3c751.mp4"
  },
  {
    title: "Video 3",
    views: "22K views",
    thumb: "https://picsum.photos/300/500?random=3",
    src: "https://cdn2.videy.co/wgcbibEN1.mp4"
  },
  {
    title: "Video 4",
    views: "11K views",
    thumb: "https://picsum.photos/300/500?random=4",
    src: "https://cdn.videy.co/AwB9LIc31.mp4"
  },
  {
    title: "Video 5",
    views: "18K views",
    thumb: "https://picsum.photos/300/500?random=5",
    src: "https://cdn.videy.co/TyfRr7yF1.mp4"
  },
  {
    title: "Video 6",
    views: "25K views",
    thumb: "https://picsum.photos/300/500?random=6",
    src: "https://cdn2.videy.co/W8RlSSpg1.mp4"
  },
  {
    title: "Video 7",
    views: "19K views",
    thumb: "https://picsum.photos/300/500?random=7",
    src: "https://cdn2.videy.co/Mz1Riufx1.mp4"
  },
  {
    title: "Video 8",
    views: "33K views",
    thumb: "https://picsum.photos/300/500?random=8",
    src: "https://cdn2.videy.co/ssd4keuh1.mp4"
  },
  {
    title: "Video 9",
    views: "42K views",
    thumb: "https://picsum.photos/300/500?random=9",
    src: "https://cdn.videy.co/YMAJEwJp1.mp4"
  },
  {
    title: "Video 10",
    views: "17K views",
    thumb: "https://picsum.photos/300/500?random=10",
    src: "https://cdn2.videy.co/sE0VwbcS1.mp4"
  },
  {
    title: "Video 11",
    views: "29K views",
    thumb: "https://picsum.photos/300/500?random=11",
    src: "https://cdn.videy.co/TWRLKbDF1.mp4"
  },
  {
    title: "Video 12",
    views: "31K views",
    thumb: "https://picsum.photos/300/500?random=12",
    src: "https://cdn2.videy.co/I7EQ9hYZ1.mp4"
  },
  {
    title: "Video 13",
    views: "27K views",
    thumb: "https://picsum.photos/300/500?random=13",
    src: "https://cdn2.videy.co/yDYlzheT1.mp4"
  },
  {
    title: "Video 14",
    views: "16K views",
    thumb: "https://picsum.photos/300/500?random=14",
    src: "https://cdn2.videy.co/dRJ1Cxop1.mp4"
  },
  {
    title: "Video 15",
    views: "20K views",
    thumb: "https://picsum.photos/300/500?random=15",
    src: "https://cdn2.videy.co/MMGu7GTQ1.mp4"
  },
  {
    title: "Video 16",
    views: "41K views",
    thumb: "https://picsum.photos/300/500?random=16",
    src: "https://cdn2.videy.co/pVV9cnwD1.mp4"
  },
  {
    title: "Video 17",
    views: "36K views",
    thumb: "https://picsum.photos/300/500?random=17",
    src: "https://cdn2.videy.co/CdJHmdYC1.mp4"
  },
  {
    title: "Video 18",
    views: "52K views",
    thumb: "https://picsum.photos/300/500?random=18",
    src: "https://cdn2.videy.co/zQUqynC31.mp4"
  },
  {
    title: "Video 19",
    views: "47K views",
    thumb: "https://picsum.photos/300/500?random=19",
    src: "https://cdn2.videy.co/EOqU681P1.mp4"
  },
  {
    title: "Video 20",
    views: "58K views",
    thumb: "https://picsum.photos/300/500?random=20",
    src: "https://cdn2.videy.co/5IWtY8SQ1.mp4"
  }
];

const videoGrid = document.getElementById('videoGrid');

videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'video-card';

  card.innerHTML = `
    <video src="${video.src}" muted autoplay loop playsinline preload="metadata"></video>
    <div class="video-info">
      <h3>${video.title}</h3>
      <p>${video.views}</p>
    </div>
  `;

  card.onclick = () => {
    openVideo(video.src);
  };

  videoGrid.appendChild(card);
});

function openVideo(src){
  document.body.innerHTML = `
    <div class="player-page">
      <video controls autoplay>
        <source src="${src}" type="video/mp4">
      </video>
    </div>
  `;
  }
