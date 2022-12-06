const audio = new Audio();

document.getElementById("volume-range").value = 75;
audio.volume = document.getElementById("volume-range").value / 100;

const mk_audio_1 = [
  "src/key01.mp3",
  "src/key02.mp3",
  "src/key03.mp3",
  "src/key04.mp3",
  "src/key05.mp3",
  "src/key06.mp3",
  "src/key07.mp3",
  "src/key08.mp3",
  "src/key09.mp3",
  "src/key10.mp3",
  "src/key11.mp3",
  "src/key12.mp3",
  "src/key13.mp3",
  "src/key14.mp3",
  "src/key15.mp3",
  "src/key16.mp3",
  "src/key17.mp3",
];

document.getElementById("volume-range").addEventListener("change", (e) => {
  audio.volume = e.target.value / 100;
});

// for (let i in inner_key) {
//   inner_key[i].addEventListener("mouseover", () => {
//     const newAudio = new Audio(mk_audio_2[i]);
//     newAudio.volume = audio.volume;
//     newAudio.play();
//   });
// }

// for (let i in main_key) {
//   main_key[i].addEventListener("mouseover", () => {
//     const newAudio = new Audio(mk_audio_1[i]);
//     newAudio.volume = audio.volume;
//     newAudio.play();
//   });
// }
document.getElementById("main-keys-1").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[0]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-2").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[1]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-3").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[2]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-4").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[3]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-5").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[4]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-6").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[5]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-7").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[6]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-8").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[7]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-9").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[8]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("main-keys-10").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[9]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("inner-key-1").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[10]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("inner-key-2").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[11]);
  newAudio.volume = audio.volume;
  newAudio.play();
});

document.getElementById("inner-key-3").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[12]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
document.getElementById("inner-key-4").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[13]);
  newAudio.volume = audio.volume;
  newAudio.play();
});

document.getElementById("inner-key-5").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[14]);
  newAudio.volume = audio.volume;
  newAudio.play();
});

document.getElementById("inner-key-6").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[15]);
  newAudio.volume = audio.volume;
  newAudio.play();
});

document.getElementById("inner-key-7").addEventListener("mouseover", () => {
  const newAudio = new Audio(mk_audio_1[16]);
  newAudio.volume = audio.volume;
  newAudio.play();
});
