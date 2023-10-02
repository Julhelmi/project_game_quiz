let button = document.getElementById('button');
let jawaban = document.getElementById('answer');
let buttonNext = document.querySelector('div.button');
let point = document.getElementById('point');
let pointAwal = 0;
let pointBenar = 10;
let jumlahPoint = pointAwal + pointBenar;

point.innerHTML += pointAwal;

let question = document.querySelector('p#question');
let randomQuestion = Math.ceil(Math.random() * 3);
let questionRandom = function () {
  if (randomQuestion == 1) {
    randomQuestion = 'Berapakah 1 + 1 ?';
    return randomQuestion;
  } else if (randomQuestion == 2) {
    randomQuestion = 'Sebutkan Nama Presiden Indonesia yang Pertama!';
    return randomQuestion;
  } else if (randomQuestion == 3) {
    randomQuestion = 'Murid yang ada di Universitas disebut ?';
    return randomQuestion;
  }
};
question.innerHTML = questionRandom();

button.addEventListener('click', function () {
  if (randomQuestion == 'Berapakah 1 + 1 ?') {
    if (jawaban.value == 2) {
      alert('benar');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Next Answer </button></a> <p id="point">My Point : ' +
        jumlahPoint;
    } else {
      alert('salah');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Refresh Web </button></a>';
    }
  } else if (
    randomQuestion == 'Sebutkan Nama Presiden Indonesia yang Pertama!'
  ) {
    if (jawaban.value == 'Soekarno' || jawaban.value == 'soekarno') {
      alert('benar');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Next Answer </button></a> <p id="point">My Point : ' +
        jumlahPoint;
    } else {
      alert('salah');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Refresh Web </button></a>';
    }
  } else if (randomQuestion == 'Murid yang ada di Universitas disebut ?') {
    if (jawaban.value == 'Mahasiswa' || jawaban.value == 'mahasiswa') {
      alert('benar');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Next Answer </button></a> <p id="point">My Point : ' +
        jumlahPoint;
    } else {
      alert('salah');
      buttonNext.innerHTML =
        '<a href="index.html"><button id="button">Refresh Web </button></a>';
    }
  }
});
