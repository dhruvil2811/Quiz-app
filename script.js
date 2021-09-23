const Quiz_data = [
  {
    question: "where is Tajmahel?",
    a: "surat",
    b: "agra",
    c: "rajkot",
    d: "karnataka",
    ans: "b",
  },
  {
    question: "how old is dhruvil?",
    a: "5",
    b: "8",
    c: "15",
    d: "21",
    ans: "d",
  },
  {
    question: "what is the most used programming language in 2019?",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    ans: "a",
  },
  {
    question: "who is the President of US?",
    a: "patel dhruvil",
    b: "donald trump",
    c: "narendra modi",
    d: "rawal darshan",
    ans: "b",
  },
  {
    question: "who is the President of INDIA?",
    a: "patel dhruvil",
    b: "donald trump",
    c: "narendra modi",
    d: "rawal darshan",
    ans: "c",
  },
];

const quiz_container = document.getElementById("quiz_container");
const que_e1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_btn = document.getElementById("btnsubmit");
const all_answers = document.querySelectorAll(".answer");

let current_question = 0;
let score = 0;

loadquiz();

function loadquiz() {
  deselect();
  const curreent_quiz = Quiz_data[current_question];
  que_e1.innerHTML = curreent_quiz.question;
  a_text.innerHTML = curreent_quiz.a;
  b_text.innerHTML = curreent_quiz.b;
  c_text.innerHTML = curreent_quiz.c;
  d_text.innerHTML = curreent_quiz.d;
}

submit_btn.addEventListener("click", () => {
  const answer = answer_select();
  if (answer) {
    // console.log(answer);
    if (answer === Quiz_data[current_question].ans) {
      score++;
    }
    // console.log(score);
    current_question++;

    if (current_question >= Quiz_data.length) {
      quiz_container.innerHTML = `<h2>Your Score is ${score} / ${Quiz_data.length}</h2>
      <button Onclick="location.reload()">Reload</button>`;
    } else {
      loadquiz();
    }
  } else {
    alert("Please select any answer");
  }
});

function answer_select() {
  let answer_option = undefined;
  all_answers.forEach((answer) => {
    if (answer.checked) {
      answer_option = answer.id;
    }
  });

  return answer_option;
}

function deselect() {
  all_answers.forEach((answer) => {
    answer.checked = false;
  });
}
