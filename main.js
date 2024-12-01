onload = () => {
  
  const audio = new Audio("audio.mp3");
  audio.loop = true;
  audio.play();
  
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

function showNotification(message, delay = 3000) {
  const notificationsContainer = document.getElementById('notifications');

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notificationsContainer.appendChild(notification);

  // Show animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  // Hide animation and remove after delay
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, delay);
}

onload = () => {
  const audio = new Audio("audio.mp3");
  audio.loop = true;
  audio.play();

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    // Notifikasi berurutan
    const notifMessages = ["Haii", "ini hari ultah mu lohhh", "aku bangga kamu bisa bertahan sejauh ini!", "setelah apa yg telah kamu jalani", "kamu memutuskan untuk bertahan", "i know you're strong", "stronger than you know", "don't ever let anyone bring you down!", "I love youu<3", "Happy birthday!"];
    let notifIndex = 0;

    function showNextNotification() {
      if (notifIndex < notifMessages.length) {
        showNotification(notifMessages[notifIndex], 4000);
        notifIndex++;
        setTimeout(showNextNotification, 5000); // Interval antar notifikasi
      }
    }

    showNextNotification();

    clearTimeout(c);
  }, 1000);
};