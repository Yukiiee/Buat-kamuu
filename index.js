const title = document.querySelector('.title')
const text = 'Just For Youu!'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});


const targetDate = new Date('2024-12-11T00:00:00').getTime();

// Element countdown
const countdownElement = document.querySelector('.countdown');

// menghitung sisa waktu
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "<span>🎉 Time's Up! 🎉</span>";
    document.querySelector('.btn').style.pointerEvents = 'auto'; // Aktifkan tombol
    document.querySelector('.btn').style.opacity = '1';
    clearInterval(countdownInterval); // Hentikan interval
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Tampilkan countdown di halaman
    countdownElement.innerHTML = `
      <span>${days}d<span style='margin-right:20px;'></span></span>
      <span>${hours}h<span style='margin-right:20px;'></span></span>
      <span>${minutes}m<span style='margin-right:20px;'></span></span>
      <span>${seconds}s</span>`;
  }
}

// Jalankan countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Inisialisasi tombol dalam keadaan dinonaktifkan
document.querySelector('.btn').style.pointerEvents = 'none';
document.querySelector('.btn').style.opacity = '0.5';

const remainingTimeElement = document.querySelector('.remaining-time');

// Function untuk menghitung dan menampilkan waktu tersisa
function updateRemainingTime() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // waktu tersisa
    remainingTimeElement.innerHTML = `countdown
      <span>${days}H,</span> 
      <span>${hours}J,</span> 
      <span>${minutes}M,</span> 
      <span>${seconds}D</span>`;
  } else {
    remainingTimeElement.innerHTML = "<span>🎉 It's your birthday cutiee! 🎉</span>";
  }
}

// updateRemainingTime setiap detik
setInterval(updateRemainingTime, 1000);
updateRemainingTime(); // Jalankan sekali saat halaman pertama kali dimuat
