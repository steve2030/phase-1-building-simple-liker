// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartSpans = document.querySelectorAll('.like-glyph');



heartSpans.forEach(heartSpan => {
  const countSpan = document.createElement('span');
  countSpan.style.color = 'black';
  countSpan.style.fontWeight = 'bold';

  heartSpan.addEventListener('click', (e) => {
    e.preventDefault();
    mimicServerCall().then((res) => {
      let count = 0;
      if (heartSpan.classList[1] === 'activated-heart') {
        heartSpan.innerText = EMPTY_HEART;
        heartSpan.classList.remove('activated-heart');
        count -= 1
      } else {
        heartSpan.innerText = FULL_HEART;
        heartSpan.classList.add('activated-heart');
        count += 1;

      }
      alert(res);
      countSpan.innerText = count;
      heartSpan.appendChild(countSpan);

    }).catch((error) => {
      const divError = document.querySelector('.hidden');
      divError.classList.remove('hidden');
      divError.textContent = error;
      setTimeout(() => divError.classList.add('hidden'), 3000);
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
