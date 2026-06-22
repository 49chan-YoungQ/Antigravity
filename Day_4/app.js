// 1. Question Pools (4 questions per dimension, total 16 questions)
const questionPools = {
  EI: [
    {
      text: "주말에 약속이 없다면?",
      choices: ["집에 있는다", "밖에 나가서 사람들을 만난다"],
      types: ["I", "E"]
    },
    {
      text: "새로운 사람들과 처음 만났을 때 나는?",
      choices: ["조용히 경청하며 말을 아낀다", "먼저 말을 걸며 대화를 주도한다"],
      types: ["I", "E"]
    },
    {
      text: "스트레스를 많이 받았을 때 풀 수 있는 방법은?",
      choices: ["혼자만의 시간을 가지며 에너지를 충전한다", "친구들과 수다를 떨거나 모임에 참석한다"],
      types: ["I", "E"]
    },
    {
      text: "오랜만에 온 휴가날, 나는 어디로 향할까?",
      choices: ["조용하고 아늑한 독채 펜션이나 집", "축제나 핫플레이스 등 활기찬 장소"],
      types: ["I", "E"]
    }
  ],
  SN: [
    {
      text: "영화를 보거나 소설을 읽을 때 나의 생각은?",
      choices: ["스토리 라인과 현실적 묘사에 집중한다", "주인공이나 결말 이후 등 엉뚱한 상상을 펼친다"],
      types: ["S", "N"]
    },
    {
      text: "“하늘을 나는 생각을 가끔 해” 라는 말을 들으면?",
      choices: ["“그게 무슨 소리야? 불가능하잖아” 라고 생각한다", "“오, 날아다니면 무슨 기분일까?” 같이 공상에 빠진다"],
      types: ["S", "N"]
    },
    {
      text: "새로운 요리 레시피를 보고 만들 때 나는?",
      choices: ["레시피의 계량과 순서를 정확하게 지키며 요리한다", "대충 눈대중으로 보고 내 느낌대로 변형해서 요리한다"],
      types: ["S", "N"]
    },
    {
      text: "만약 아무 일도 일어나지 않는 조용한 숲속을 걷는다면?",
      choices: ["풀 냄새, 바람 소리, 나무의 질감 등 감각을 고스란히 느낀다", "숲속에 요정이 살지 않을까? 혹은 미래에 대해 생각한다"],
      types: ["S", "N"]
    }
  ],
  TF: [
    {
      text: "일이 뜻대로 되지 않아 고민하는 친구에게 나는?",
      choices: ["무엇이 문제인지 현실적인 해결책을 제시해 준다", "친구의 속상한 마음에 깊이 공ံ하고 위로해 준다"],
      types: ["T", "F"]
    },
    {
      text: "친구와 다툼이 생겼을 때 나는?",
      choices: ["왜 갈등이 생겼는지 논리적으로 따지고 분석한다", "갈등으로 상처받은 마음과 감정을 먼저 풀고 싶다"],
      types: ["T", "F"]
    },
    {
      text: "친구가 “나 힘들어서 화분 샀어” 라고 말했을 때 나의 반응은?",
      choices: ["“무슨 화분 샀어? 기르기 쉬운 거야?” 물어본다", "“많이 힘들었구나... 무슨 일 있었어?” 위로한다"],
      types: ["T", "F"]
    },
    {
      text: "어떤 중요한 선택을 해야 할 때, 나에게 더 와닿는 기준은?",
      choices: ["인과관계가 확실하고 객관적으로 타당한 사실", "관계되는 사람들의 감정과 내면의 가치관"],
      types: ["T", "F"]
    }
  ],
  JP: [
    {
      text: "여행 계획을 세울 때 나의 스타일은?",
      choices: ["시간 단위로 일정을 꼼꼼하게 다 계획해 둔다", "대략적인 목적지만 정하고 상황에 따라 자유롭게 다닌다"],
      types: ["J", "P"]
    },
    {
      text: "주말 과제를 할 때 나의 행동은?",
      choices: ["미리미리 계획적으로 나누어 끝내 둔다", "미루다가 마감 직전에 한꺼번에 집중해서 한다"],
      types: ["J", "P"]
    },
    {
      text: "약속 당일 갑자기 계획이 취소된다면?",
      choices: ["할 일이 붕 떠버려서 아쉽고 조금 스트레스를 받는다", "“오히려 좋아!” 하며 다른 하고 싶었던 일을 즉흥적으로 한다"],
      types: ["J", "P"]
    },
    {
      text: "방 정리를 하거나 물건을 정돈할 때 나는?",
      choices: ["제자리가 딱 정해져 있고 체계적으로 정돈되어야 편안하다", "대충 편리한 곳에 두고 필요할 때 찾아서 쓴다"],
      types: ["J", "P"]
    }
  ]
};

// 2. MBTI Result Profiles
const mbtiProfiles = {
  ISTJ: {
    name: "청렴결백한 논리주의자",
    desc: "매사에 신중하고 철저하며 책임감이 매우 강합니다. 현실적이고 실용적인 면을 중시하며, 약속을 잘 지키고 정직한 태도로 주위의 신뢰를 한몸에 받습니다. 체계적이고 안정적인 환경을 선호합니다."
  },
  ISFJ: {
    name: "용감한 수호자",
    desc: "조용하고 차분하며 타인에게 헌신적이고 따뜻한 마음을 가지고 있습니다. 주변 사람들의 필요를 세심하게 살피며 질서와 조화를 중요하게 여깁니다. 전통을 존중하고 타인을 돕는 일에 앞장섭니다."
  },
  INFJ: {
    name: "선의의 옹호자",
    desc: "깊은 통찰력과 강한 신념을 지닌 이상주의자입니다. 조용하면서도 타인에게 영감을 주는 따뜻한 리더십을 발휘하며, 자신만의 뚜렷한 도덕적 잣대와 원칙을 지켜나갑니다."
  },
  INTJ: {
    name: "용의주도한 전략가",
    desc: "논리적이고 독립적이며 문제 해결 능력이 뛰어난 전략가입니다. 높은 기준을 가지고 체계적으로 비전을 제시하며, 효율성과 분석적인 사고를 극대화해 복잡한 구조를 해결하는 것을 즐깁니다."
  },
  ISTP: {
    name: "만능 재주꾼",
    desc: "상황 적응력이 뛰어나고 객관적이며 합리적인 태도를 취합니다. 도구나 기계를 다루는 것에 흥미가 많으며, 불필요한 노력을 아끼고 필요할 때 최고의 집중력을 발휘하는 실용주의자입니다."
  },
  ISFP: {
    name: "호기심 많은 예술가",
    desc: "말이 적고 온화하며 감수성이 풍부하고 미적 감각이 매우 뛰어납니다. 현재를 편안하게 즐기며 조용히 타인을 배려하고 조화를 이루는 따뜻한 마음씨와 유연한 태도를 지니고 있습니다."
  },
  INFP: {
    name: "열정적인 중재자",
    desc: "이해심이 깊고 관대하며, 개인의 가치관과 이상을 매우 중요하게 생각합니다. 내면의 가치를 추구하고 비전을 향해 묵묵히 나아가며, 공감 능력이 뛰어나 타인의 아픔을 깊이 위로할 수 있습니다."
  },
  INTP: {
    name: "논리적인 사색가",
    desc: "분석적이고 비판적이며 지적 호기심이 대단히 높습니다. 독창적인 사고와 아이디어를 중시하며, 복잡한 이론이나 문제에 직면했을 때 남들이 보지 못하는 해결책을 구상해 내는 지혜가 있습니다."
  },
  ESTP: {
    name: "모험을 즐기는 사업가",
    desc: "활동적이고 현실적이며 센스가 넘치는 실용주의자입니다. 에너지가 넘치고 다이내믹한 상황을 즐기며, 즉각적으로 행동에 나서 문제를 빠르게 해결하는 실행력이 독보적으로 뛰어납니다."
  },
  ESFP: {
    name: "자유로운 영혼의 연예인",
    desc: "친절하고 사교적이며 주위 분위기를 늘 유쾌하게 만드는 에너지를 가지고 있습니다. 삶 자체를 즐기며 새로운 경험을 좋아하고, 타인과의 정서적 교감과 현실적인 즐거움을 중시합니다."
  },
  ENFP: {
    name: "재기발랄한 활동가",
    desc: "상상력이 아주 풍부하고 열정적이며 사람들과 어울려 소통하는 것을 좋아합니다. 긍정적이고 자유로운 마음을 가졌으며, 가능성을 발견하고 열정을 확산시키는 재치 있는 분위기 메이커입니다."
  },
  ENTP: {
    name: "뜨거운 논쟁을 즐기는 변론가",
    desc: "독창적이고 창의적이며 늘 도전을 두려워하지 않습니다. 지적인 모험심이 강하며 기발한 통찰력으로 토론을 즐기고, 다방면에 혁신적인 발명과 유연한 아이디어를 제시하는 브레인입니다."
  },
  ESTJ: {
    name: "엄격한 관리자",
    desc: "체계적이고 논리적이며 일의 성과를 내기 위해 주변을 효율적으로 관리하는 지도자입니다. 결단력이 돋보이며 현실적인 성과를 최우선으로 추구하고, 약속과 규율을 정직하게 수호합니다."
  },
  ESFJ: {
    name: "사교적인 외교관",
    desc: "주변 사람들에게 항상 다정하고 배려심 넘치며, 동료애가 대단히 끈끈합니다. 협동을 장려하고 친절하며, 가족이나 동료들이 모인 집단에서 부드러운 화합과 안정감을 주는 지지대 역할을 수행합니다."
  },
  ENFJ: {
    name: "정의로운 사회운동가",
    desc: "타인의 성장을 이끌어주고 동기를 부여해 주는 따뜻하고 헌신적인 리더입니다. 사교적이며 탁월한 공감 능력을 바탕으로 협력을 추진하며, 긍정적인 가치를 위해 집단을 올바른 길로 이끕니다."
  },
  ENTJ: {
    name: "대담한 지도자",
    desc: "비전을 명확히 수립하고 목표 성취를 위해 조직을 체계적으로 이끄는 카리스마 넘치는 통솔자입니다. 논리적이고 결단력이 뛰어나며, 장기적인 안목으로 복잡한 난관을 끈기 있게 돌파해 냅니다."
  }
};

// 3. Quiz State Variables
let activeQuestions = [];
let currentQuestionIndex = 0;
let scores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

// 4. Dom Elements
let cardStart, cardQuestion, cardResult;
let btnStart, btnChoice1, btnChoice2, btnRestart;
let qNum, qText, qProgressText, progressBar;
let resultLoading, resultContent;
let resultCharImg, resultMbti, resultName, resultDescription;

// 5. Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Bind Elements
  cardStart = document.getElementById('card-start');
  cardQuestion = document.getElementById('card-question');
  cardResult = document.getElementById('card-result');

  btnStart = document.getElementById('btn-start');
  btnChoice1 = document.getElementById('btn-choice-1');
  btnChoice2 = document.getElementById('btn-choice-2');
  btnRestart = document.getElementById('btn-restart');

  qNum = document.getElementById('question-number');
  qText = document.getElementById('question-text');
  qProgressText = document.getElementById('progress-text');
  progressBar = document.getElementById('progress-bar');

  resultLoading = document.getElementById('result-loading');
  resultContent = document.getElementById('result-content');
  resultCharImg = document.getElementById('result-char-img');

  resultMbti = document.getElementById('result-mbti');
  resultName = document.getElementById('result-name');
  resultDescription = document.getElementById('result-description');

  // Event Listeners
  if (btnStart) btnStart.addEventListener('click', startTest);
  if (btnChoice1) btnChoice1.addEventListener('click', () => selectChoice(0));
  if (btnChoice2) btnChoice2.addEventListener('click', () => selectChoice(1));
  if (btnRestart) btnRestart.addEventListener('click', restartTest);
});

// 6. Shuffling and Selection Helpers
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuiz() {
  activeQuestions = [];
  
  // Pick 2 random questions from each of the 4 dimension pools
  const poolKeys = ["EI", "SN", "TF", "JP"];
  poolKeys.forEach(key => {
    const shuffledPool = shuffleArray(questionPools[key]);
    const selected = shuffledPool.slice(0, 2);
    activeQuestions.push(...selected);
  });
  
  // Randomize the order of the final 8 selected questions
  activeQuestions = shuffleArray(activeQuestions);
  
  // Shuffle the choice order inside each selected question
  activeQuestions = activeQuestions.map(q => {
    const indices = [0, 1];
    const shuffledIndices = shuffleArray(indices);
    return {
      text: q.text,
      choices: [q.choices[shuffledIndices[0]], q.choices[shuffledIndices[1]]],
      types: [q.types[shuffledIndices[0]], q.types[shuffledIndices[1]]]
    };
  });
}

// 7. Transition Utilities
function switchScreen(fromScreen, toScreen) {
  fromScreen.classList.add('fade-out');
  fromScreen.classList.remove('fade-in');
  
  setTimeout(() => {
    fromScreen.style.display = 'none';
    fromScreen.classList.remove('fade-out');
    
    toScreen.style.display = 'block';
    toScreen.classList.add('fade-in');
  }, 350);
}

// 8. Core Quiz Functions
function startTest() {
  currentQuestionIndex = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  // Setup randomized questions and choices
  prepareQuiz();
  
  loadQuestion(0);
  switchScreen(cardStart, cardQuestion);
}

function loadQuestion(index) {
  if (index >= activeQuestions.length) return;
  
  const q = activeQuestions[index];
  
  // Update Question Content
  qNum.textContent = `Q${index + 1}`;
  qText.textContent = q.text;
  qProgressText.textContent = `${index + 1} / ${activeQuestions.length}`;
  
  btnChoice1.textContent = q.choices[0];
  btnChoice2.textContent = q.choices[1];
  
  // Update Progress Bar
  const progressPercent = ((index + 1) / activeQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function selectChoice(choiceIndex) {
  // Add Score
  const currentQ = activeQuestions[currentQuestionIndex];
  const selectedType = currentQ.types[choiceIndex];
  scores[selectedType]++;
  
  currentQuestionIndex++;
  
  // Check if test complete
  if (currentQuestionIndex < activeQuestions.length) {
    cardQuestion.classList.add('fade-out');
    setTimeout(() => {
      loadQuestion(currentQuestionIndex);
      cardQuestion.classList.remove('fade-out');
      cardQuestion.classList.add('fade-in');
      setTimeout(() => {
        cardQuestion.classList.remove('fade-in');
      }, 500);
    }, 350);
  } else {
    showResults();
  }
}

// 9. Result Calculation and View
function calculateMBTI() {
  let mbti = "";
  mbti += (scores.E >= scores.I) ? "E" : "I";
  mbti += (scores.S >= scores.N) ? "S" : "N";
  mbti += (scores.T >= scores.F) ? "T" : "F";
  mbti += (scores.J >= scores.P) ? "J" : "P";
  return mbti;
}

function showResults() {
  // Move to result card
  switchScreen(cardQuestion, cardResult);
  
  // Show spinner, hide content
  resultLoading.style.display = 'flex';
  resultContent.style.display = 'none';
  
  // Calculate result
  const resultType = calculateMBTI();
  const profile = mbtiProfiles[resultType] || mbtiProfiles.INFP;
  
  // Load Result Content
  resultMbti.textContent = resultType;
  resultName.textContent = profile.name;
  resultDescription.textContent = profile.desc;
  
  // Connect character image path
  resultCharImg.src = `images/${resultType.toLowerCase()}.png`;
  
  // Hold loading screen for a premium experience (1.8s)
  setTimeout(() => {
    resultLoading.classList.add('fade-out');
    
    setTimeout(() => {
      resultLoading.style.display = 'none';
      resultLoading.classList.remove('fade-out');
      
      resultContent.style.display = 'block';
      resultContent.classList.add('fade-in');
      
      setTimeout(() => {
        resultContent.classList.remove('fade-in');
      }, 500);
    }, 350);
  }, 1800);
}

function restartTest() {
  switchScreen(cardResult, cardStart);
}
