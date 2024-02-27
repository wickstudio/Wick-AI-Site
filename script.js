const apiUrl = "http://localhost:3000/proxy";
const questionInput = document.querySelector("#questionInput");
const responseContainer = document.querySelector("#response");

function submitQuestion() {
  setTimeout(function () {
    var titleDiv = document.querySelector(".title");
    titleDiv.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds

  const question = questionInput.value;

  try {
    // Make API request to your local server
    fetch(`${apiUrl}?question=${encodeURIComponent(question)}`)
      .then((response) => response.json())
      .then((data) => {
        const questionContainer = document.createElement("div");
        questionContainer.id = "questionDiv";

        const textContainer = document.createElement("div");
        textContainer.id = "textDiv";

        const questionImage = document.createElement("img");
        questionImage.src =
          "https://cdn.discordapp.com/attachments/1182023144844841071/1212009857637421066/logo4.png?ex=65f04724&is=65ddd224&hm=0893cd7fa24dc7c86721fdedeb29c57476e57909a66521cec553094df85cc170&"; //صورة الي رح يسأل السؤال
        questionImage.alt = "Question Image";
        questionContainer.appendChild(questionImage);

        const humanName = document.createElement("h1");
        humanName.innerHTML = `You <br>`; //اسمك
        textContainer.appendChild(humanName);

        const questionParagraph = document.createElement("p");
        questionParagraph.innerHTML = `${question}`;
        textContainer.appendChild(questionParagraph);

        questionContainer.appendChild(textContainer);

        responseContainer.appendChild(questionContainer);

        /********************************************/

        const answerContainer = document.createElement("div");
        answerContainer.id = "questionDiv";

        const answerTextContainer = document.createElement("div");
        answerTextContainer.id = "textDiv";

        const answerImage = document.createElement("img");
        answerImage.src =
          "https://cdn.discordapp.com/attachments/1182023144844841071/1212010020795973652/1.png?ex=65f0474b&is=65ddd24b&hm=dffd270642ad8516ae91394161b70d8e57057abfe3d347800fdbe89a9a2715f4&"; //صورة البوت لما يرد عليك
        answerImage.alt = "Question Image";
        answerContainer.appendChild(answerImage);

        const botName = document.createElement("h1");
        botName.innerHTML = `Wick Ai <br>`; // اسم البوت
        answerTextContainer.appendChild(botName);

        const answerParagraph = document.createElement("p");
        answerParagraph.classList.add("writing-animation");
        answerParagraph.innerHTML = `${data.reply}`;
        answerTextContainer.appendChild(answerParagraph);

        answerContainer.appendChild(answerTextContainer);

        responseContainer.appendChild(answerContainer);

        questionInput.value = "";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const errorAnswer = document.createElement("p");
        errorAnswer.classList.add("writing-animation");
        errorAnswer.innerHTML = "An error occurred while fetching the answer.";

        responseContainer.appendChild(errorAnswer);
      });
  } catch (error) {
    console.error("Error submitting question:", error);
  }
}
