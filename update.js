fetch("videos.json")
.then(r=>r.json())
.then(data=>{
  data.sort(()=>Math.random()-0.5);
  console.log("Shuffle video OK");
});
