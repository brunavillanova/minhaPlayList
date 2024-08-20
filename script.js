// Seletores de elementos HTML
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const likeButton = document.getElementById('like');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');

// Playlist de músicas

const newSong1 = {
  songName: 'Popular',
  artist: 'Falling in Reverse',
  file: 'popular',
  liked: false,
};
const watchTheWord = {
    songName: 'Watch the Word',
    artist: 'Falling in Reverse',
    file: 'watch_the_word',
    liked: false,
  };

// Estado inicial
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;

// Configuração da playlist
const initialPlaylist = [
    newSong1,
    watchTheWord,  // Adicione esta linha
  ];

// Limpeza do localStorage e configuração da playlist
localStorage.clear();
localStorage.setItem('playlist', JSON.stringify(initialPlaylist));

let sortedPlaylist = [...initialPlaylist];
let index = 0;

// Função para tocar a música
function playSong() {
  play.querySelector('.bi').classList.remove('bi-play-circle-fill');
  play.querySelector('.bi').classList.add('bi-pause-circle-fill');
  song.play();
  isPlaying = true;
}

// Função para pausar a música
function pauseSong() {
  play.querySelector('.bi').classList.add('bi-play-circle-fill');
  play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
  song.pause();
  isPlaying = false;
}

// Função para decidir entre tocar ou pausar
function playPauseDecider() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

// Função para renderizar o botão de curtidas
function likeButtonRender() {
  if (sortedPlaylist[index].liked) {
    likeButton.querySelector('.bi').classList.remove('bi-heart');
    likeButton.querySelector('.bi').classList.add('bi-heart-fill');
    likeButton.classList.add('button-active');
  } else {
    likeButton.querySelector('.bi').classList.add('bi-heart');
    likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
    likeButton.classList.remove('button-active');
  }
}

// Função para inicializar a música
function initializeSong() {
  if (sortedPlaylist.length === 0) {
    console.error('Playlist está vazia');
    return;
  }

  const currentSong = sortedPlaylist[index];
  console.log('Inicializando música:', currentSong);

  cover.src = `images/${currentSong.file}.jpg`;
  song.src = `songs/${currentSong.file}.mp3`;
  songName.innerText = currentSong.songName;
  bandName.innerText = currentSong.artist;
  likeButtonRender();
}

// Função para tocar a música anterior
function previousSong() {
  index = (index === 0) ? sortedPlaylist.length - 1 : index - 1;
  initializeSong();
  playSong();
}

// Função para tocar a próxima música
function nextSong() {
  index = (index === sortedPlaylist.length - 1) ? 0 : index + 1;
  initializeSong();
  playSong();
}

// Função para atualizar a barra de progresso
function updateProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty('--progress', `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);
}

// Função para pular para um ponto específico na música
function jumpTo(event) {
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

// Função para embaralhar a playlist
function shuffleArray(preShuffleArray) {
  const size = preShuffleArray.length;
  let currentIndex = size - 1;
  while (currentIndex > 0) {
    let randomIndex = Math.floor(Math.random() * size);
    [preShuffleArray[currentIndex], preShuffleArray[randomIndex]] = [preShuffleArray[randomIndex], preShuffleArray[currentIndex]];
    currentIndex -= 1;
  }
}

// Função para ativar/desativar o botão de embaralhamento
function shuffleButtonClicked() {
  if (!isShuffled) {
    isShuffled = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add('button-active');
  } else {
    isShuffled = false;
    sortedPlaylist = [...initialPlaylist];
    shuffleButton.classList.remove('button-active');
  }
}

// Função para ativar/desativar o botão de repetição
function repeatButtonClicked() {
  repeatOn = !repeatOn;
  repeatButton.classList.toggle('button-active', repeatOn);
}

// Função para decidir o que fazer quando a música terminar
function nextOrRepeat() {
  if (repeatOn) {
    playSong();
  } else {
    nextSong();
  }
}

// Função para converter o tempo para o formato HH:MM:SS
function toHHMMSS(originalNumber) {
  let hours = Math.floor(originalNumber / 3600);
  let min = Math.floor((originalNumber - hours * 3600) / 60);
  let secs = Math.floor(originalNumber - hours * 3600 - min * 60);
  return `${hours ? hours.toString().padStart(2, '0') + ':' : ''}${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Função para atualizar o tempo total da música
function updateTotalTime() {
  totalTime.innerText = toHHMMSS(song.duration);
}

// Função para gerenciar a ação do botão de curtir
function likeButtonClicked() {
  sortedPlaylist[index].liked = !sortedPlaylist[index].liked;
  likeButtonRender();
  localStorage.setItem('playlist', JSON.stringify(sortedPlaylist));
}

// Inicializa a primeira música
initializeSong();

// Adiciona os ouvintes de eventos
play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likeButton.addEventListener('click', likeButtonClicked);
