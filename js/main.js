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
/* =========================================================
05. TEST DATA
8가지 공간 스타일 진단
========================================================= */

const questions = [

    {
        question: "주말에 집에서 가장 많이 하는 활동은?",
        answers: [
            {
                text: "푹 쉬며 편안하게 휴식을 취한다.",
                type: "cozy"
            },
            {
                text: "방을 정리하거나 계획을 세운다.",
                type: "minimal"
            },
            {
                text: "식물을 돌보거나 요리를 한다.",
                type: "natural"
            },
            {
                text: "새로운 취미나 작업을 한다.",
                type: "creative"
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
                text: "깔끔하고 효율적으로 생활하는 공간",
                type: "minimal"
            },
            {
                text: "자연과 가까워질 수 있는 공간",
                type: "natural"
            },
            {
                text: "나의 개성을 표현하는 공간",
                type: "creative"
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
                text: "독특하고 개성 있는 디자인",
                type: "creative"
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
                text: "공간을 효율적으로 사용할 수 있는지",
                type: "smart"
            },
            {
                text: "소재와 질감",
                type: "natural"
            },
            {
                text: "디자인과 형태",
                type: "modern"
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
                type: "emotional"
            },
            {
                text: "조금 복잡해 보여서 줄이고 싶다.",
                type: "minimal"
            },
            {
                text: "자연스럽게 배치되어 있다면 괜찮다.",
                type: "natural"
            },
            {
                text: "독특한 소품이라면 오히려 좋다.",
                type: "creative"
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
                type: "smart"
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
                text: "침실이나 편안한 휴식 공간",
                type: "cozy"
            },
            {
                text: "깔끔한 작업 공간",
                type: "smart"
            },
            {
                text: "햇빛이 들어오는 거실이나 베란다",
                type: "natural"
            },
            {
                text: "친구들과 함께 모일 수 있는 거실",
                type: "social"
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
                text: "독특한 질감이나 아트 소재",
                type: "creative"
            }
        ]
    },

    {
        question: "집이 어수선해졌을 때 나는?",
        answers: [
            {
                text: "일단 쉬고 나중에 천천히 정리한다.",
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
                text: "효율적인 방법을 찾아 빠르게 정리한다.",
                type: "smart"
            }
        ]
    },

    {
        question: "인테리어 사진을 볼 때 가장 눈에 들어오는 것은?",
        answers: [
            {
                text: "편안하고 따뜻한 분위기",
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
                text: "오래 사용할 수 있는 편안한 제품을 산다.",
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
                type: "creative"
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
                type: "social"
            },
            {
                text: "예쁘게 꾸민 공간을 보여준다.",
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
                text: "기능이 다양한 스마트 가구",
                type: "smart"
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
                text: "감성적으로 꾸민 나만의 공간",
                type: "emotional"
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
                text: "독특한 조명이나 예술 작품",
                type: "creative"
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
                type: "smart"
            },
            {
                text: "자연을 느낄 수 있는 요소",
                type: "natural"
            },
            {
                text: "사람들과 함께할 수 있는 공간",
                type: "social"
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
                text: "분위기 있고 감성적으로",
                type: "emotional"
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
                type: "creative"
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
                text: "작은 화분 몇 개를 둔다.",
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
                text: "독특한 화분이나 화병을 고른다.",
                type: "creative"
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
                type: "smart"
            },
            {
                text: "집에서 요리하고 사람들과 보내기",
                type: "social"
            },
            {
                text: "취미와 나만의 시간을 즐기기",
                type: "emotional"
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
                text: "따뜻한 베이지톤의 포근한 공간",
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
                text: "개성 있는 소품과 작품이 있는 공간",
                type: "creative"
            }
        ]
    }

];
/* =========================================================
06. RESULT DATA
========================================================= */

const resultData = {

    /* =====================================================
       01. 코지 힐링
    ===================================================== */

    cozy: {

        title: "코지 힐링형",
        subtitle: "따뜻하고 편안한 공간을 좋아하는 당신",

        description:
            "포근하고 편안한 분위기 속에서 안정감을 느끼는 타입이에요. " +
            "부드러운 패브릭과 따뜻한 조명, 베이지와 아이보리 계열의 색감을 활용하면 " +
            "나만의 편안한 휴식 공간을 만들 수 있어요.",

        tags: [
            "안정감",
            "편안함",
            "따뜻함"
        ],

        lifestyle:
            "여유롭고 안정적인 생활",

        keywords:
            "패브릭 / 우드 / 따뜻한 조명",

        image:
            "images/style-cozy.jpg",

        color: [
            "#F7F1E8",
            "#E3CFB2",
            "#B59B80",
            "#8D7460",
            "#C1BDB8"
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
            },
            {
                name: "감성 아틀리에",
                description: "감성적인 분위기의 공간",
                image: "images/style-emotional.jpg"
            }
        ]

    },


    /* =====================================================
       02. 미니멀 라이프
    ===================================================== */

    minimal: {

        title: "미니멀 라이프형",
        subtitle: "깔끔하고 정돈된 공간을 좋아하는 당신",

        description:
            "불필요한 것을 줄이고 필요한 것에 집중하는 타입이에요. " +
            "화이트와 그레이 같은 뉴트럴 컬러와 간결한 가구를 활용하면 " +
            "더욱 편안하고 효율적인 공간을 만들 수 있어요.",

        tags: [
            "깔끔함",
            "정돈",
            "심플함"
        ],

        lifestyle:
            "효율적이고 정돈된 생활",

        keywords:
            "화이트 / 수납 / 심플한 가구",

        image:
            "images/style-minimal.jpg",

        color: [
            "#F7F7F5",
            "#E8E6E1",
            "#D1CEC7",
            "#9D9A93",
            "#55534F"
        ],

        styles: [
            {
                name: "미니멀 라이프",
                description: "깔끔하고 정돈된 공간",
                image: "images/style-minimal.jpg"
            },
            {
                name: "스마트 라이프",
                description: "효율적이고 기능적인 공간",
                image: "images/style-smart.jpg"
            },
            {
                name: "모던 무드",
                description: "세련되고 간결한 공간",
                image: "images/style-modern.jpg"
            }
        ]

    },


    /* =====================================================
       03. 내추럴 리빙
    ===================================================== */

    natural: {

        title: "내추럴 리빙형",
        subtitle: "자연스럽고 편안한 공간을 좋아하는 당신",

        description:
            "자연과 가까운 분위기를 좋아하고 편안한 공간에서 에너지를 얻는 타입이에요. " +
            "우드와 라탄, 식물 등의 자연 소재를 활용하면 취향을 더욱 잘 표현할 수 있어요.",

        tags: [
            "자연",
            "우드",
            "그린"
        ],

        lifestyle:
            "자연과 함께하는 편안한 생활",

        keywords:
            "우드 / 라탄 / 식물",

        image:
            "images/style-natural.jpg",

        color: [
            "#E7E0CF",
            "#C6B994",
            "#A99B77",
            "#687256",
            "#445A41"
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
            },
            {
                name: "소셜 리빙",
                description: "사람들과 함께하는 공간",
                image: "images/style-social.jpg"
            }
        ]

    },


    /* =====================================================
       04. 모던 무드
    ===================================================== */

    modern: {

        title: "모던 무드형",
        subtitle: "세련되고 감각적인 공간을 좋아하는 당신",

        description:
            "자신만의 개성을 공간에 표현하고 싶어 하는 타입이에요. " +
            "감각적인 조명과 디자인 가구, 뉴트럴 컬러를 활용하면 " +
            "세련된 분위기를 완성할 수 있어요.",

        tags: [
            "세련됨",
            "감각",
            "개성"
        ],

        lifestyle:
            "트렌드와 개성을 중요하게 생각하는 생활",

        keywords:
            "메탈 / 뉴트럴 / 디자인 가구",

        image:
            "images/style-modern.jpg",

        color: [
            "#ECEAE6",
            "#C8C4BD",
            "#8C8378",
            "#5C5750",
            "#3F3A35"
        ],

        styles: [
            {
                name: "모던 무드",
                description: "세련되고 감각적인 공간",
                image: "images/style-modern.jpg"
            },
            {
                name: "크리에이티브 스튜디오",
                description: "개성과 아이디어가 살아있는 공간",
                image: "images/style-creative.jpg"
            },
            {
                name: "미니멀 라이프",
                description: "깔끔하고 정돈된 공간",
                image: "images/style-minimal.jpg"
            }
        ]

    },


    /* =====================================================
       05. 크리에이티브 스튜디오
    ===================================================== */

    creative: {

        title: "크리에이티브 스튜디오형",
        subtitle: "개성과 아이디어를 자유롭게 표현하는 당신",

        description:
            "정해진 스타일보다 나만의 취향과 개성을 중요하게 생각하는 타입이에요. " +
            "독특한 오브제와 컬러, 아트 포스터 등을 활용해 개성 있는 공간을 만들어보세요.",

        tags: [
            "창의성",
            "개성",
            "자유로움"
        ],

        lifestyle:
            "새로운 것을 시도하고 자유롭게 표현하는 생활",

        keywords:
            "아트 / 컬러 / 오브제",

        image:
            "images/style-creative.jpg",

        color: [
            "#F1E5D7",
            "#D6B5A5",
            "#B78372",
            "#756A85",
            "#41404A"
        ],

        styles: [
            {
                name: "크리에이티브 스튜디오",
                description: "개성과 아이디어가 살아있는 공간",
                image: "images/style-creative.jpg"
            },
            {
                name: "모던 무드",
                description: "감각적이고 세련된 공간",
                image: "images/style-modern.jpg"
            },
            {
                name: "감성 아틀리에",
                description: "취향과 감성이 담긴 공간",
                image: "images/style-emotional.jpg"
            }
        ]

    },


    /* =====================================================
       06. 소셜 리빙
    ===================================================== */

    social: {

        title: "소셜 리빙형",
        subtitle: "사람들과 함께하는 공간을 좋아하는 당신",

        description:
            "혼자만의 공간보다 가족이나 친구와 함께 시간을 보내는 것을 중요하게 생각하는 타입이에요. " +
            "넓은 소파와 큰 테이블처럼 함께 사용할 수 있는 가구를 활용하면 좋아요.",

        tags: [
            "소통",
            "공유",
            "활기"
        ],

        lifestyle:
            "사람들과 함께하며 즐거움을 나누는 생활",

        keywords:
            "소파 / 테이블 / 넓은 거실",

        image:
            "images/style-social.jpg",

        color: [
            "#F4E8D8",
            "#E4C8A8",
            "#C69A6B",
            "#8C735A",
            "#5B5047"
        ],

        styles: [
            {
                name: "소셜 리빙",
                description: "사람들과 함께하는 공간",
                image: "images/style-social.jpg"
            },
            {
                name: "내추럴 리빙",
                description: "편안하고 자연스러운 공간",
                image: "images/style-natural.jpg"
            },
            {
                name: "코지 힐링",
                description: "편하게 쉬어갈 수 있는 공간",
                image: "images/style-cozy.jpg"
            }
        ]

    },


    /* =====================================================
       07. 스마트 라이프
    ===================================================== */

    smart: {

        title: "스마트 라이프형",
        subtitle: "편리함과 효율적인 공간을 중요하게 생각하는 당신",

        description:
            "공간의 아름다움뿐만 아니라 기능과 효율을 중요하게 생각하는 타입이에요. " +
            "스마트 기기와 효율적인 수납, 다기능 가구를 활용하면 생활이 더욱 편리해져요.",

        tags: [
            "효율성",
            "기능성",
            "편리함"
        ],

        lifestyle:
            "효율적이고 편리한 생활",

        keywords:
            "스마트기기 / 수납 / 다기능 가구",

        image:
            "images/style-smart.jpg",

        color: [
            "#F2F3F3",
            "#D8DDDF",
            "#A8B0B5",
            "#68737B",
            "#39434A"
        ],

        styles: [
            {
                name: "스마트 라이프",
                description: "효율적이고 기능적인 공간",
                image: "images/style-smart.jpg"
            },
            {
                name: "미니멀 라이프",
                description: "불필요한 것을 줄인 공간",
                image: "images/style-minimal.jpg"
            },
            {
                name: "모던 무드",
                description: "세련되고 기능적인 공간",
                image: "images/style-modern.jpg"
            }
        ]

    },


    /* =====================================================
       08. 감성 아틀리에
    ===================================================== */

    emotional: {

        title: "감성 아틀리에형",
        subtitle: "분위기와 감성을 중요하게 생각하는 당신",

        description:
            "공간에서 느껴지는 분위기와 감정을 중요하게 생각하는 타입이에요. " +
            "은은한 조명과 향, 패브릭, 좋아하는 소품을 활용하면 " +
            "나만의 감성적인 공간을 만들 수 있어요.",

        tags: [
            "감성",
            "분위기",
            "취향"
        ],

        lifestyle:
            "나만의 취향과 분위기를 즐기는 생활",

        keywords:
            "조명 / 향 / 패브릭",

        image:
            "images/style-emotional.jpg",

        color: [
            "#F1E5DF",
            "#D8C0B8",
            "#B4938D",
            "#806A6A",
            "#51464A"
        ],

        styles: [
            {
                name: "감성 아틀리에",
                description: "취향과 감성이 담긴 공간",
                image: "images/style-emotional.jpg"
            },
            {
                name: "코지 힐링",
                description: "따뜻하고 포근한 공간",
                image: "images/style-cozy.jpg"
            },
            {
                name: "크리에이티브 스튜디오",
                description: "개성을 자유롭게 표현하는 공간",
                image: "images/style-creative.jpg"
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


/* =========================================================
질문 렌더링
========================================================= */

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

    const question =
        questions[currentQuestion];

    questionTitle.textContent =
        question.question;

    if (questionCount) {

        questionCount.textContent =
            `${currentQuestion + 1} / ${questions.length}`;

    }

    if (progressValue) {

        const progress =
            ((currentQuestion + 1) / questions.length) * 100;

        progressValue.style.width =
            `${progress}%`;

    }

    answerList.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const label =
            document.createElement("label");

        label.className =
            "answer-item";

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

    updatePreviousButton();

    initQuestionNavigation();

}


/* =========================================================
답변 저장
========================================================= */

function saveAnswer(
    questionIndex,
    answerType
) {

    const answers =
        getSavedAnswers();

    answers[questionIndex] =
        answerType;

    localStorage.setItem(
        "moodlyAnswers",
        JSON.stringify(answers)
    );

}


/* =========================================================
답변 불러오기
========================================================= */

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


/* =========================================================
다음 버튼
========================================================= */

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

    nextButton.disabled =
        !selected;

}


/* =========================================================
이전 버튼
========================================================= */

function updatePreviousButton() {

    const previousButton =
        document.querySelector(
            ".prev-button, .previous-button"
        );

    if (!previousButton) {
        return;
    }

    previousButton.disabled =
        currentQuestion === 0;

}


/* =========================================================
질문 이동
========================================================= */

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

                window.location.href =
                    "test.html";

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

    window.location.href =
        "result.html";

}


/* =========================================================
10. CALCULATE RESULT
========================================================= */

function calculateResult(answers) {

    const scores = {

        cozy: 0,
        minimal: 0,
        natural: 0,
        modern: 0,
        creative: 0,
        social: 0,
        smart: 0,
        emotional: 0

    };


    /*
        기존 질문의 답변 유형을 그대로 사용하면서
        8가지 스타일로 확장하기 위한 보정 점수

        cozy      → 안정감 / 휴식
        minimal   → 정돈 / 실용
        natural   → 자연 / 편안함
        modern    → 세련 / 개성

        위 기본 성향을 바탕으로
        creative / social / smart / emotional도
        함께 점수를 계산한다.
    */

    answers.forEach(answer => {

        if (!answer) {
            return;
        }


        if (scores.hasOwnProperty(answer)) {

            scores[answer]++;

        }


        if (answer === "cozy") {

            scores.emotional++;
            scores.natural++;

        }


        if (answer === "minimal") {

            scores.smart++;
            scores.modern++;

        }


        if (answer === "natural") {

            scores.social++;
            scores.cozy++;

        }


        if (answer === "modern") {

            scores.creative++;
            scores.smart++;

        }

    });


    /*
        가장 높은 점수의 유형을 결과로 선택
    */

    let resultType =
        "cozy";

    let highestScore =
        -1;


    Object.keys(scores).forEach(type => {

        if (
            scores[type] >
            highestScore
        ) {

            highestScore =
                scores[type];

            resultType =
                type;

        }

    });


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

    setText(
        ".result-title",
        result.title
    );

    setText(
        ".result-eyebrow",
        result.subtitle
    );

    setText(
        ".result-description",
        result.description
    );

    const resultImage =
        document.querySelector(
            ".result-hero-image img"
        );

    if (resultImage) {

        resultImage.src = result.image;
        resultImage.alt = result.title;

    }

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

        event.preventDefault();

    }
);