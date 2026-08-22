const message = `Hiii Taraa.. i just want u to know that..\nI like u very muchh, I always think about you all the times.\n\nThere's some words that even i couldn't describe it, but... if you're Juliet, then i wanna be your Romeo. I hope u understand what i just type. hehe\n\nI wanna say Thank You Sooo MUCHHH for accepted my friend request raa. You're very cutee, idk how to describe how cute and pretty you are.. im so lucky to know you\n\nAnyway, i cant wait to hangout with u.. just the two of us.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
