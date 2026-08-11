/* =========================================================
   MOODLY
   Main JavaScript
   Vanilla JavaScript
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLucide();
    initPage();

});


/* =========================================================
   02. LUCIDE ICON
========================================================= */

function initLucide() {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

}


/* =========================================================
   03. PAGE INITIALIZATION
========================================================= */

function initPage() {

    const page = getCurrentPage();

    switch (page) {

        case "test":
            initTestPage();
            break;

        case "question":
            initQuestionPage();
            break;

        case "result":
            initResultPage();
            break;

        case "mypage":
            initMyPage();
            break;

        case "shopping":
            initShoppingPage();
            break;

        case "index":
        default:
            initHomePage();
            break;
    }

}


/* =========================================================
   04. CURRENT PAGE
========================================================= */

function getCurrentPage() {

    const path = window.location.pathname;
    const fileName = path.split("/").pop();

    if (!fileName || fileName === "") {
        return "index";
    }

    return fileName.replace(".html", "");

}


/* =========================================================
   05. TEST DATA
========================================================= */

/*
    공간 스타일 진단 질문

    A / B / C / D 선택에 따라
    각각의 공간 성향 점수를 계산한다.
*/

const questions = [

    {
        question: "주말에 집에서 가장 많이 하는 활동은?",
        answers: [
            {
                text: "푹 쉬며 휴식을 취한다.",
                type: "cozy"
            },
            {
                text: "취미나 자기계발을 한다.",
                type: "minimal"
            },
            {
                text: "친구나 가족과 시간을 보낸다.",
                type: "natural"
            },
            {
                text: "외출 준비만 하고 집에는 거의 없다.",
                type: "modern"
            }
        ]
    },

    {
        question: "집은 나에게 어떤 의미인가요?",
        answers: [
            {
                text: "편하게 쉴 수 있는 나만의 공간",
                type: "cozy"
            },
            {
                text: "나의 취향을 표현하는 공간",
                type: "modern"
            },
            {
                text: "사람들과 함께하는 공간",
                type: "natural"
            },
            {
                text: "깔끔하게 정리된 생활 공간",
                type: "minimal"
            }
        ]
    },

    {
        question: "집을 꾸밀 때 가장 중요하게 생각하는 것은?",
        answers: [
            {
                text: "따뜻하고 편안한 분위기",
                type: "cozy"
            },
            {
                text: "깔끔하고 정돈된 느낌",
                type: "minimal"
            },
            {
                text: "자연스럽고 편안한 느낌",
                type: "natural"
            },
            {
                text: "세련되고 감각적인 디자인",
                type: "modern"
            }
        ]
    },

    {
        question: "가구를 고를 때 가장 먼저 보는 것은?",
        answers: [
            {
                text: "편안함과 사용감",
                type: "cozy"
            },
            {
                text: "디자인과 형태",
                type: "modern"
            },
            {
                text: "소재와 질감",
                type: "natural"
            },
            {
                text: "공간을 많이 차지하지 않는지",
                type: "minimal"
            }
        ]
    },

    {
        question: "가장 좋아하는 공간의 색감은?",
        answers: [
            {
                text: "아이보리와 베이지",
                type: "cozy"
            },
            {
                text: "화이트와 그레이",
                type: "minimal"
            },
            {
                text: "그린과 브라운",
                type: "natural"
            },
            {
                text: "블랙과 뉴트럴 컬러",
                type: "modern"
            }
        ]
    },

    {
        question: "방 안에 소품이 많다면 어떤 느낌이 드나요?",
        answers: [
            {
                text: "아기자기해서 좋다.",
                type: "cozy"
            },
            {
                text: "조금 복잡해 보인다.",
                type: "minimal"
            },
            {
                text: "자연스럽게 배치되어 있다면 괜찮다.",
                type: "natural"
            },
            {
                text: "포인트가 된다면 좋다.",
                type: "modern"
            }
        ]
    },

    {
        question: "조명을 고른다면 어떤 분위기를 원하나요?",
        answers: [
            {
                text: "따뜻하고 은은한 조명",
                type: "cozy"
            },
            {
                text: "밝고 깔끔한 조명",
                type: "minimal"
            },
            {
                text: "자연광과 비슷한 조명",
                type: "natural"
            },
            {
                text: "디자인이 돋보이는 조명",
                type: "modern"
            }
        ]
    },

    {
        question: "집에서 가장 좋아하는 공간은?",
        answers: [
            {
                text: "침실",
                type: "cozy"
            },
            {
                text: "작업 공간",
                type: "minimal"
            },
            {
                text: "거실",
                type: "natural"
            },
            {
                text: "나만의 취미 공간",
                type: "modern"
            }
        ]
    },

    {
        question: "어떤 소재를 가장 좋아하나요?",
        answers: [
            {
                text: "부드러운 패브릭",
                type: "cozy"
            },
            {
                text: "유리와 메탈",
                type: "modern"
            },
            {
                text: "우드와 라탄",
                type: "natural"
            },
            {
                text: "심플한 플라스틱이나 가죽",
                type: "minimal"
            }
        ]
    },

    {
        question: "집이 어수선해졌을 때 나는?",
        answers: [
            {
                text: "일단 쉬고 나중에 정리한다.",
                type: "cozy"
            },
            {
                text: "바로 정리한다.",
                type: "minimal"
            },
            {
                text: "필요한 것부터 천천히 정리한다.",
                type: "natural"
            },
            {
                text: "눈에 보이는 것부터 빠르게 치운다.",
                type: "modern"
            }
        ]
    },

    {
        question: "인테리어 사진을 볼 때 가장 눈에 들어오는 것은?",
        answers: [
            {
                text: "편안한 분위기",
                type: "cozy"
            },
            {
                text: "정돈된 레이아웃",
                type: "minimal"
            },
            {
                text: "식물과 자연 소재",
                type: "natural"
            },
            {
                text: "감각적인 가구와 디자인",
                type: "modern"
            }
        ]
    },

    {
        question: "나의 소비 스타일과 가장 가까운 것은?",
        answers: [
            {
                text: "오래 사용할 수 있는 편안한 제품",
                type: "cozy"
            },
            {
                text: "꼭 필요한 것만 구매한다.",
                type: "minimal"
            },
            {
                text: "자연 소재 제품을 선호한다.",
                type: "natural"
            },
            {
                text: "새롭고 독특한 제품을 좋아한다.",
                type: "modern"
            }
        ]
    },

    {
        question: "친구가 집에 놀러 온다면?",
        answers: [
            {
                text: "편하게 쉬도록 해준다.",
                type: "cozy"
            },
            {
                text: "깔끔하게 정리해 둔다.",
                type: "minimal"
            },
            {
                text: "함께 이야기하며 시간을 보낸다.",
                type: "natural"
            },
            {
                text: "예쁜 공간을 보여준다.",
                type: "modern"
            }
        ]
    },

    {
        question: "가장 갖고 싶은 가구는?",
        answers: [
            {
                text: "푹신한 소파",
                type: "cozy"
            },
            {
                text: "깔끔한 수납장",
                type: "minimal"
            },
            {
                text: "원목 테이블",
                type: "natural"
            },
            {
                text: "디자인 체어",
                type: "modern"
            }
        ]
    },

    {
        question: "집에서 음악을 듣는다면 어떤 공간에서 듣고 싶나요?",
        answers: [
            {
                text: "편안한 침대 위",
                type: "cozy"
            },
            {
                text: "깔끔한 책상 앞",
                type: "minimal"
            },
            {
                text: "햇빛이 들어오는 거실",
                type: "natural"
            },
            {
                text: "감각적으로 꾸민 나만의 공간",
                type: "modern"
            }
        ]
    },

    {
        question: "인테리어에서 포인트를 준다면?",
        answers: [
            {
                text: "쿠션이나 패브릭",
                type: "cozy"
            },
            {
                text: "심플한 오브제",
                type: "minimal"
            },
            {
                text: "식물",
                type: "natural"
            },
            {
                text: "독특한 조명이나 가구",
                type: "modern"
            }
        ]
    },

    {
        question: "집에서 가장 필요한 것은?",
        answers: [
            {
                text: "휴식할 수 있는 공간",
                type: "cozy"
            },
            {
                text: "효율적인 수납",
                type: "minimal"
            },
            {
                text: "자연을 느낄 수 있는 요소",
                type: "natural"
            },
            {
                text: "나만의 개성을 표현할 요소",
                type: "modern"
            }
        ]
    },

    {
        question: "침실을 꾸민다면 어떤 느낌이 좋나요?",
        answers: [
            {
                text: "따뜻하고 포근하게",
                type: "cozy"
            },
            {
                text: "깔끔하고 단정하게",
                type: "minimal"
            },
            {
                text: "자연스럽고 편안하게",
                type: "natural"
            },
            {
                text: "세련되고 분위기 있게",
                type: "modern"
            }
        ]
    },

    {
        question: "집을 볼 때 가장 신경 쓰이는 것은?",
        answers: [
            {
                text: "너무 차갑고 딱딱한 분위기",
                type: "cozy"
            },
            {
                text: "정리가 안 된 모습",
                type: "minimal"
            },
            {
                text: "자연적인 요소가 없는 것",
                type: "natural"
            },
            {
                text: "개성이 없는 공간",
                type: "modern"
            }
        ]
    },

    {
        question: "나에게 가장 잘 어울리는 인테리어는?",
        answers: [
            {
                text: "따뜻하고 포근한 인테리어",
                type: "cozy"
            },
            {
                text: "깔끔하고 미니멀한 인테리어",
                type: "minimal"
            },
            {
                text: "자연스럽고 편안한 인테리어",
                type: "natural"
            },
            {
                text: "세련되고 감각적인 인테리어",
                type: "modern"
            }
        ]
    },

    {
        question: "집에 식물을 둔다면?",
        answers: [
            {
                text: "작은 화분 몇 개",
                type: "cozy"
            },
            {
                text: "최소한으로 하나만 둔다.",
                type: "minimal"
            },
            {
                text: "식물을 많이 두고 싶다.",
                type: "natural"
            },
            {
                text: "독특한 화분을 고른다.",
                type: "modern"
            }
        ]
    },

    {
        question: "가장 좋아하는 주말의 모습은?",
        answers: [
            {
                text: "집에서 편안하게 쉬기",
                type: "cozy"
            },
            {
                text: "방을 정리하고 계획 세우기",
                type: "minimal"
            },
            {
                text: "집에서 요리하고 사람들과 보내기",
                type: "natural"
            },
            {
                text: "취미와 나만의 시간을 즐기기",
                type: "modern"
            }
        ]
    },

    {
        question: "나의 공간을 한 단어로 표현한다면?",
        answers: [
            {
                text: "포근함",
                type: "cozy"
            },
            {
                text: "정돈",
                type: "minimal"
            },
            {
                text: "자연",
                type: "natural"
            },
            {
                text: "감각",
                type: "modern"
            }
        ]
    },

    {
        question: "마지막으로 가장 끌리는 공간은?",
        answers: [
            {
                text: "따뜻한 베이지톤의 공간",
                type: "cozy"
            },
            {
                text: "화이트톤의 깔끔한 공간",
                type: "minimal"
            },
            {
                text: "우드와 식물이 있는 공간",
                type: "natural"
            },
            {
                text: "모던하고 세련된 공간",
                type: "modern"
            }
        ]
    }

];


/* =========================================================
   06. RESULT DATA
========================================================= */

const resultData = {

    cozy: {

        title: "코지 힐링",
        subtitle: "따뜻하고 편안한 공간을 좋아하는 당신",

        description:
            "포근하고 편안한 분위기 속에서 안정감을 느끼는 타입이에요. " +
            "부드러운 소재와 따뜻한 색감을 활용하면 나만의 편안한 공간을 만들 수 있어요.",

        tags: [
            "따뜻함",
            "편안함",
            "포근함"
        ],

        image: "images/style-cozy.jpg",

        color: [
            "#E9DED0",
            "#C9B29B",
            "#8D7460"
        ],

        styles: [
            {
                name: "코지 힐링",
                description: "따뜻하고 포근한 공간",
                image: "images/style-cozy.jpg"
            },
            {
                name: "내추럴 리빙",
                description: "자연스럽고 편안한 공간",
                image: "images/style-natural.jpg"
            }
        ]

    },


    minimal: {

        title: "미니멀 라이프",
        subtitle: "깔끔하고 정돈된 공간을 좋아하는 당신",

        description:
            "불필요한 것을 줄이고 필요한 것에 집중하는 타입이에요. " +
            "화이트와 뉴트럴 컬러, 간결한 가구를 활용하면 더욱 편안한 공간을 만들 수 있어요.",

        tags: [
            "깔끔함",
            "정돈",
            "심플함"
        ],

        image: "images/style-minimal.jpg",

        color: [
            "#F4F2ED",
            "#D7D3CB",
            "#77736C"
        ],

        styles: [
            {
                name: "미니멀 라이프",
                description: "깔끔하고 정돈된 공간",
                image: "images/style-minimal.jpg"
            },
            {
                name: "모던 무드",
                description: "세련되고 간결한 공간",
                image: "images/style-modern.jpg"
            }
        ]

    },


    natural: {

        title: "내추럴 리빙",
        subtitle: "자연스럽고 편안한 공간을 좋아하는 당신",

        description:
            "자연과 가까운 분위기를 좋아하고 편안한 공간에서 에너지를 얻는 타입이에요. " +
            "우드, 라탄, 식물 등의 소재를 활용하면 취향을 잘 표현할 수 있어요.",

        tags: [
            "자연",
            "우드",
            "그린"
        ],

        image: "images/style-natural.jpg",

        color: [
            "#DDD7C5",
            "#A99B77",
            "#687256"
        ],

        styles: [
            {
                name: "내추럴 리빙",
                description: "자연스럽고 편안한 공간",
                image: "images/style-natural.jpg"
            },
            {
                name: "코지 힐링",
                description: "따뜻하고 편안한 공간",
                image: "images/style-cozy.jpg"
            }
        ]

    },


    modern: {

        title: "모던 무드",
        subtitle: "세련되고 감각적인 공간을 좋아하는 당신",

        description:
            "자신만의 개성을 공간에 표현하고 싶어 하는 타입이에요. " +
            "감각적인 조명과 디자인 가구, 포인트 컬러를 활용하면 더욱 매력적인 공간이 완성돼요.",

        tags: [
            "세련됨",
            "감각",
            "개성"
        ],

        image: "images/style-modern.jpg",

        color: [
            "#E4E0D9",
            "#8C8378",
            "#3F3A35"
        ],

        styles: [
            {
                name: "모던 무드",
                description: "세련되고 감각적인 공간",
                image: "images/style-modern.jpg"
            },
            {
                name: "미니멀 라이프",
                description: "깔끔하고 정돈된 공간",
                image: "images/style-minimal.jpg"
            }
        ]

    }

};


/* =========================================================
   07. TEST PAGE
========================================================= */

function initTestPage() {

    const startButtons = document.querySelectorAll(
        ".test-start-button, .start-button, [href='question.html']"
    );

    startButtons.forEach(button => {

        button.addEventListener("click", event => {

            /*
                실제 링크가 있는 경우에는
                기본 이동을 그대로 사용한다.
            */

            if (
                button.tagName.toLowerCase() === "a" &&
                button.getAttribute("href") === "question.html"
            ) {
                clearTestData();
                return;
            }

            event.preventDefault();

            clearTestData();

            window.location.href = "question.html";

        });

    });

}


/* =========================================================
   08. QUESTION PAGE
========================================================= */

let currentQuestion = 0;

function initQuestionPage() {

    /*
        저장되어 있는 진행 상태가 있다면 불러온다.
    */

    const savedQuestion =
        Number(localStorage.getItem("moodlyCurrentQuestion"));

    if (
        Number.isInteger(savedQuestion) &&
        savedQuestion >= 0 &&
        savedQuestion < questions.length
    ) {
        currentQuestion = savedQuestion;
    }

    renderQuestion();

}


/* ---------------------------------------------------------
   질문 렌더링
--------------------------------------------------------- */

function renderQuestion() {

    const questionTitle =
        document.querySelector(".question-title");

    const answerList =
        document.querySelector(".answer-list");

    const questionCount =
        document.querySelector(".question-count");

    const progressValue =
        document.querySelector(".progress-value");


    if (!questionTitle || !answerList) {
        return;
    }


    const question = questions[currentQuestion];


    /* 질문 */

    questionTitle.textContent = question.question;


    /* 번호 */

    if (questionCount) {

        questionCount.textContent =
            `${currentQuestion + 1} / ${questions.length}`;

    }


    /* 진행률 */

    if (progressValue) {

        const progress =
            ((currentQuestion + 1) / questions.length) * 100;

        progressValue.style.width = `${progress}%`;

    }


    /* 답변 */

    answerList.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const label = document.createElement("label");

        label.className = "answer-item";


        label.innerHTML = `
            <input
                type="radio"
                name="answer"
                value="${answer.type}"
                data-index="${index}"
            >

            <span class="answer-text">
                ${answer.text}
            </span>
        `;


        const input =
            label.querySelector("input");


        input.addEventListener("change", () => {

            saveAnswer(
                currentQuestion,
                answer.type
            );

            updateNextButton();

        });


        answerList.appendChild(label);

    });


    /* 이전에 선택한 답변 복원 */

    const savedAnswers =
        getSavedAnswers();

    if (savedAnswers[currentQuestion]) {

        const previousAnswer =
            answerList.querySelector(
                `input[value="${savedAnswers[currentQuestion]}"]`
            );

        if (previousAnswer) {
            previousAnswer.checked = true;
        }

    }


    updateNextButton();

    initQuestionNavigation();

    initLucide();

}


/* ---------------------------------------------------------
   답변 저장
--------------------------------------------------------- */

function saveAnswer(questionIndex, answerType) {

    const answers = getSavedAnswers();

    answers[questionIndex] = answerType;

    localStorage.setItem(
        "moodlyAnswers",
        JSON.stringify(answers)
    );

}


/* ---------------------------------------------------------
   답변 불러오기
--------------------------------------------------------- */

function getSavedAnswers() {

    try {

        const saved =
            localStorage.getItem("moodlyAnswers");

        return saved
            ? JSON.parse(saved)
            : [];

    } catch (error) {

        return [];

    }

}


/* ---------------------------------------------------------
   다음 버튼 활성화
--------------------------------------------------------- */

function updateNextButton() {

    const nextButton =
        document.querySelector(
            ".next-button, .question-next-button"
        );

    if (!nextButton) {
        return;
    }


    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    nextButton.disabled = !selected;

}


/* ---------------------------------------------------------
   질문 이동
--------------------------------------------------------- */

function initQuestionNavigation() {

    const nextButton =
        document.querySelector(
            ".next-button, .question-next-button"
        );

    const previousButton =
        document.querySelector(
            ".prev-button, .previous-button"
        );


    if (nextButton) {

        nextButton.onclick = () => {

            const selected =
                document.querySelector(
                    'input[name="answer"]:checked'
                );


            if (!selected) {
                return;
            }


            saveAnswer(
                currentQuestion,
                selected.value
            );


            if (
                currentQuestion <
                questions.length - 1
            ) {

                currentQuestion++;

                localStorage.setItem(
                    "moodlyCurrentQuestion",
                    currentQuestion
                );

                renderQuestion();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {

                finishTest();

            }

        };

    }


    if (previousButton) {

        previousButton.onclick = () => {

            if (currentQuestion <= 0) {

                window.location.href = "test.html";

                return;
            }


            currentQuestion--;

            localStorage.setItem(
                "moodlyCurrentQuestion",
                currentQuestion
            );

            renderQuestion();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

    }

}


/* =========================================================
   09. FINISH TEST
========================================================= */

function finishTest() {

    const answers =
        getSavedAnswers();


    const result =
        calculateResult(answers);


    localStorage.setItem(
        "moodlyResult",
        result
    );


    localStorage.removeItem(
        "moodlyCurrentQuestion"
    );


    window.location.href = "result.html";

}


/* =========================================================
   10. CALCULATE RESULT
========================================================= */

function calculateResult(answers) {

    const scores = {

        cozy: 0,
        minimal: 0,
        natural: 0,
        modern: 0

    };


    answers.forEach(answer => {

        if (scores.hasOwnProperty(answer)) {
            scores[answer]++;
        }

    });


    let resultType = "cozy";
    let highestScore = -1;


    Object.keys(scores).forEach(type => {

        if (scores[type] > highestScore) {

            highestScore = scores[type];
            resultType = type;

        }

    });


    /*
        결과 점수도 저장
    */

    localStorage.setItem(
        "moodlyScores",
        JSON.stringify(scores)
    );


    return resultType;

}


/* =========================================================
   11. RESULT PAGE
========================================================= */

function initResultPage() {

    const resultType =
        localStorage.getItem("moodlyResult") || "cozy";


    const result =
        resultData[resultType];


    if (!result) {
        return;
    }


    renderResult(result);


    initResultButtons();

}


/* ---------------------------------------------------------
   결과 화면 출력
--------------------------------------------------------- */

function renderResult(result) {

    /*
        제목
    */

    setText(
        ".result-title",
        result.title
    );


    /*
        설명
    */

    setText(
        ".result-eyebrow",
        result.subtitle
    );


    setText(
        ".result-description",
        result.description
    );


    /*
        이미지
    */

    const resultImage =
        document.querySelector(
            ".result-hero-image img"
        );


    if (resultImage) {

        resultImage.src = result.image;
        resultImage.alt = result.title;

    }


    /*
        태그
    */

    const tagContainer =
        document.querySelector(".result-tags");


    if (tagContainer) {

        tagContainer.innerHTML = "";

        result.tags.forEach(tag => {

            const span =
                document.createElement("span");

            span.className = "result-tag";
            span.textContent = tag;

            tagContainer.appendChild(span);

        });

    }


    /*
        추천 스타일
    */

    const styleContainer =
        document.querySelector(
            ".recommend-style-list"
        );


    if (styleContainer) {

        styleContainer.innerHTML = "";

        result.styles.forEach(style => {

            const card =
                document.createElement("article");

            card.className =
                "recommend-style-card";


            card.innerHTML = `
                <div class="recommend-style-image">
                    <img
                        src="${style.image}"
                        alt="${style.name}"
                    >
                </div>

                <div class="recommend-style-text">
                    <strong>
                        ${style.name}
                    </strong>

                    <span>
                        ${style.description}
                    </span>
                </div>
            `;


            styleContainer.appendChild(card);

        });

    }


    /*
        컬러 팔레트
    */

    const paletteContainer =
        document.querySelector(
            ".color-palette-list"
        );


    if (paletteContainer) {

        paletteContainer.innerHTML = "";

        result.color.forEach(color => {

            const card =
                document.createElement("div");

            card.className =
                "palette-card";


            card.innerHTML = `
                <div
                    class="palette-color"
                    style="background:${color}"
                ></div>

                <span>
                    ${color}
                </span>
            `;


            paletteContainer.appendChild(card);

        });

    }


    /*
        점수
    */

    renderScore();


    initLucide();

}


/* ---------------------------------------------------------
   점수 렌더링
--------------------------------------------------------- */

function renderScore() {

    const scoreContainer =
        document.querySelector(".score-list");


    if (!scoreContainer) {
        return;
    }


    const scores =
        JSON.parse(
            localStorage.getItem("moodlyScores") || "{}"
        );


    const names = {

        cozy: "코지",
        minimal: "미니멀",
        natural: "내추럴",
        modern: "모던"

    };


    scoreContainer.innerHTML = "";


    Object.keys(names).forEach(type => {

        const score =
            scores[type] || 0;


        const item =
            document.createElement("div");

        item.className = "score-item";


        let dots = "";


        for (let i = 0; i < 5; i++) {

            const active =
                i < Math.round(
                    score / questions.length * 20
                );


            dots += `
                <span
                    class="score-dot ${
                        active ? "active" : ""
                    }"
                ></span>
            `;

        }


        item.innerHTML = `
            <span class="score-name">
                ${names[type]}
            </span>

            <div class="score-dots">
                ${dots}
            </div>
        `;


        scoreContainer.appendChild(item);

    });

}


/* ---------------------------------------------------------
   결과 버튼
--------------------------------------------------------- */

function initResultButtons() {

    const restartButtons =
        document.querySelectorAll(
            ".restart-button, .retry-button"
        );


    restartButtons.forEach(button => {

        button.addEventListener("click", () => {

            clearTestData();

            window.location.href =
                "test.html";

        });

    });


    /*
        쇼핑으로 이동
    */

    const shoppingButtons =
        document.querySelectorAll(
            ".result-shopping-button"
        );


    shoppingButtons.forEach(button => {

        button.addEventListener("click", () => {

            window.location.href =
                "shopping.html";

        });

    });

}


/* =========================================================
   12. SHOPPING PAGE
========================================================= */

function initShoppingPage() {

    initCategoryFilter();

    initProductSearch();

    initFavoriteButtons();

}


/* ---------------------------------------------------------
   카테고리 필터
--------------------------------------------------------- */

function initCategoryFilter() {

    const buttons =
        document.querySelectorAll(
            ".category-button"
        );


    const products =
        document.querySelectorAll(
            ".shopping-product-card"
        );


    if (!buttons.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(item => {

                item.classList.remove("active");

            });


            button.classList.add("active");


            const category =
                button.dataset.category;


            products.forEach(product => {

                const productCategory =
                    product.dataset.category;


                if (
                    category === "all" ||
                    category === productCategory
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });

}


/* ---------------------------------------------------------
   상품 검색
--------------------------------------------------------- */

function initProductSearch() {

    const searchInput =
        document.querySelector(
            ".shopping-search-input"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        () => {

            const keyword =
                searchInput.value
                    .trim()
                    .toLowerCase();


            const products =
                document.querySelectorAll(
                    ".shopping-product-card"
                );


            products.forEach(product => {

                const title =
                    product.querySelector("h3");


                const text =
                    title
                        ? title.textContent.toLowerCase()
                        : "";


                if (
                    !keyword ||
                    text.includes(keyword)
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        }
    );

}


/* ---------------------------------------------------------
   찜 버튼
--------------------------------------------------------- */

function initFavoriteButtons() {

    const buttons =
        document.querySelectorAll(
            ".favorite-button, .wishlist-heart"
        );


    const favorites =
        getFavorites();


    buttons.forEach(button => {

        const productCard =
            button.closest(
                ".shopping-product-card, .wishlist-card"
            );


        const productName =
            getProductName(productCard);


        if (
            productName &&
            favorites.includes(productName)
        ) {

            button.classList.add("active");

        }


        button.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();


                if (!productName) {
                    return;
                }


                toggleFavorite(
                    productName,
                    button
                );

            }
        );

    });


    initLucide();

}


/* ---------------------------------------------------------
   상품명
--------------------------------------------------------- */

function getProductName(card) {

    if (!card) {
        return null;
    }


    const title =
        card.querySelector("h3");


    return title
        ? title.textContent.trim()
        : null;

}


/* ---------------------------------------------------------
   찜 목록 가져오기
--------------------------------------------------------- */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "moodlyFavorites"
            ) || "[]"
        );

    } catch (error) {

        return [];

    }

}


/* ---------------------------------------------------------
   찜 토글
--------------------------------------------------------- */

function toggleFavorite(
    productName,
    button
) {

    let favorites =
        getFavorites();


    const index =
        favorites.indexOf(productName);


    if (index === -1) {

        favorites.push(productName);

        button.classList.add("active");

    } else {

        favorites.splice(index, 1);

        button.classList.remove("active");

    }


    localStorage.setItem(
        "moodlyFavorites",
        JSON.stringify(favorites)
    );


    /*
        하트 아이콘 다시 생성
    */

    initLucide();

}


/* =========================================================
   13. MY PAGE
========================================================= */

function initMyPage() {

    renderMyResult();

    renderFavoriteCount();

    initMyPageButtons();

}


/* ---------------------------------------------------------
   나의 결과
--------------------------------------------------------- */

function renderMyResult() {

    const resultType =
        localStorage.getItem(
            "moodlyResult"
        );


    if (!resultType) {
        return;
    }


    const result =
        resultData[resultType];


    if (!result) {
        return;
    }


    /*
        마이페이지의 결과 카드
    */

    setText(
        ".my-style-content h3",
        result.title
    );


    setText(
        ".my-style-content p",
        result.description
    );


    const image =
        document.querySelector(
            ".my-style-image img"
        );


    if (image) {

        image.src = result.image;
        image.alt = result.title;

    }


    /*
        태그
    */

    const keywords =
        document.querySelector(
            ".style-keywords"
        );


    if (keywords) {

        keywords.innerHTML = "";


        result.tags.forEach(tag => {

            const span =
                document.createElement("span");

            span.textContent = tag;

            keywords.appendChild(span);

        });

    }

}


/* ---------------------------------------------------------
   찜 개수
--------------------------------------------------------- */

function renderFavoriteCount() {

    const count =
        getFavorites().length;


    const countElements =
        document.querySelectorAll(
            ".favorite-count"
        );


    countElements.forEach(element => {

        element.textContent = count;

    });

}


/* ---------------------------------------------------------
   마이페이지 버튼
--------------------------------------------------------- */

function initMyPageButtons() {

    const resultButtons =
        document.querySelectorAll(
            ".my-result-button"
        );


    resultButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    localStorage.getItem(
                        "moodlyResult"
                    )
                ) {

                    window.location.href =
                        "result.html";

                } else {

                    window.location.href =
                        "test.html";

                }

            }
        );

    });

}


/* =========================================================
   14. HOME PAGE
========================================================= */

function initHomePage() {

    /*
        홈에서 최근 결과가 있다면
        결과 관련 UI를 업데이트할 수 있다.
    */

    const resultType =
        localStorage.getItem(
            "moodlyResult"
        );


    if (resultType) {

        const result =
            resultData[resultType];


        if (result) {

            setText(
                ".home-result-title",
                result.title
            );

        }

    }

}


/* =========================================================
   15. COMMON TEXT HELPER
========================================================= */

function setText(
    selector,
    text
) {

    const element =
        document.querySelector(selector);


    if (element) {

        element.textContent = text;

    }

}


/* =========================================================
   16. CLEAR TEST DATA
========================================================= */

function clearTestData() {

    localStorage.removeItem(
        "moodlyAnswers"
    );

    localStorage.removeItem(
        "moodlyCurrentQuestion"
    );

}


/* =========================================================
   17. PAGE LINK HANDLER
========================================================= */

/*
    HTML에서 href를 사용하지 않고
    data-page를 사용하고 싶은 경우를 위한
    공통 페이지 이동 기능
*/

document.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest(
                "[data-page]"
            );


        if (!target) {
            return;
        }


        const page =
            target.dataset.page;


        if (!page) {
            return;
        }


        event.preventDefault();


        window.location.href =
            page;

    }
);


/* =========================================================
   18. IMAGE ERROR HANDLING
========================================================= */

/*
    이미지 파일이 없을 때
    깨진 이미지 아이콘 대신
    기본 배경을 유지한다.
*/

document.addEventListener(
    "error",
    event => {

        const target =
            event.target;


        if (
            target.tagName &&
            target.tagName.toLowerCase() === "img"
        ) {

            target.style.display = "none";

            if (
                target.parentElement
            ) {

                target.parentElement.classList.add(
                    "image-error"
                );

            }

        }

    },
    true
);


/* =========================================================
   19. PREVENT FORM SUBMIT
========================================================= */

document.addEventListener(
    "submit",
    event => {

        /*
            실제 서버가 없는 프로젝트이므로
            기본 submit 동작 방지
        */

        event.preventDefault();

    }
);