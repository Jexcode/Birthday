const img = document.querySelector('.img-con');
const imgBox = document.querySelector('.card-img');
const myBtn = document.querySelector('.btn');
let textContent = document.querySelector('.card-text');
function eight(){
  
  let eleMent = img.getBoundingClientRect();
  let eleHeight = eleMent.height;
  let newHeight = Math.floor(eleHeight - 90 );
  let sWidth = window.innerWidth;
  if (sWidth <= 750) {
    imgBox.style.height = newHeight +'px';
  } else {
    imgBox.style.height = 'auto';
  };
  
// console.log(eleHeight);
// console.log(newHeight);
// console.log(sWidth);
};

eight();

/*
let cardHeight = document.querySelector('.wish-card').getBoundingClientRect().height;

cardHeight = document.querySelector('.wish-card').clientHeight;

let wishName = document.querySelector('.wish-name');

wishName.style.width = cardHeight + 50 + 'px';

console.log(cardHeight);
*/

const overLay = document.querySelector('.overlay');

let wishText = document.querySelector('.wish-text');

myBtn.addEventListener('click', ()=>{
  overLay.classList.add('open-modal');
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', ()=>{
  overLay.classList.remove('open-modal');
});



  let newContent = [
    `<h3><span>N</span>obility</h3>
       <p>Revelation 5:10,
      And hast made us unto our God kings and priests: and we shall reign on the earth.</p>
      <p>You are Queen of the noble and the royal family of God, you are filled with the Spirit of the Lord to reign. You a good leader and a good mentor, thank you for your advices.</p>
       `,
    `<h3><span>K</span>indness</h3>
       <p>You have a kind heart towards everyone around, You really do your best to lit up everyone's mood. Your kindness makes you more of the gift you are to the world.</p>
       <p>1 John 4:7, Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.</p>
       `,
    `<h3><span>E</span>mpathy</h3>
        <p>It is with the heart that one sees rightly; what is
essential is invisible to the eye.</p>
        <p>Looks a lot like you have an in-depth understanding of people and their feelings, using the rights words and approach in every situation bringing out solutions to solve problems.</p>
        `,
    `<h3><span>C</span>heerful</h3>
       <p>1 Thessalonians 5:16-18,
          Rejoice evermore.
          Pray without ceasing.
          In every thing give thanks: for this is the will of God in Christ Jesus concerning you.</p>
       <p>A cheerful student, even with all the hardship experience in school you always find a good side in everything and I've learnt that from you.</p>
       `,
    `<h3><span>H</span>onest</h3>
       <p>Philippians 4:8a,Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report;</p>
       <p>You are honest in your communication and always give a true feedback.</p>
       `,
    `<h3><span>I</span>ntelligent</h3>
       <p>Daniel 1:17a,20
As for these four children, God gave them knowledge and skill in all learning and wisdom;
And in all matters of wisdom and understanding, that the king enquired of them, he found them ten times better than all the magicians and astrologers that were in all his realm.</p>
       <p>No doubt you are an intelligent student.</p>
       `
   ];
   
   const nextBtn = document.querySelector('.next-btn');
   const prevBtn = document.querySelector('.prev-btn');
   let currentItem = 0;
   
  console.log(prevBtn);
   
   
   window.addEventListener('DOMContentLoaded', function () {
  const item = newContent[currentItem];
  wishText.innerHTML = item;
  });
   
   
   function showCard(card) {
     const item = newContent[card];
     wishText.innerHTML = newContent[currentItem];
   }
   // show next Card
   nextBtn.addEventListener('click', function() {
     currentItem++;
     if (currentItem > newContent.length - 1) {
       currentItem = 0;
     }
     showCard(currentItem);
   });
   // show prev Card
   prevBtn.addEventListener('click', function() {
     currentItem--;
     if (currentItem < 0) {
       currentItem = newContent.length - 1;
     }
     showCard(currentItem);
   });
  // wishText.innerHTML = newContent[4];
   
