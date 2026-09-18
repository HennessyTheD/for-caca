const message = `Hiii Cacaa.. I just want u to know that..\nU really did well for todayy, not everyone can handle things like u do\n\nlet me know if u need anything to cheer u up, i'll do my bestt.\n\ni feel lucky to know you ca, ur cute hehe\n\nAnyway, stay strong pretty!`;

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
