/* =========================================
   Moodly FAQ
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       Lucide 아이콘
    ===================================== */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =====================================
       FAQ 요소
    ===================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    const categoryButtons =
        document.querySelectorAll(".category-button");

    const searchInput =
        document.getElementById("faqSearch");

    const faqEmpty =
        document.getElementById("faqEmpty");


    let currentCategory = "all";


    /* =====================================
       FAQ 열고 닫기
    ===================================== */

    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");


        question.addEventListener("click", function () {

            const isOpen =
                item.classList.contains("open");


            /*
             * 다른 질문 닫기
             */
            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {

                    otherItem.classList.remove("open");

                }

            });


            /*
             * 현재 질문 열기 / 닫기
             */

            if (isOpen) {

                item.classList.remove("open");

            } else {

                item.classList.add("open");

            }

        });

    });


    /* =====================================
       카테고리 필터
    ===================================== */

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /*
             * 선택된 버튼 표시
             */

            categoryButtons.forEach(function (otherButton) {

                otherButton.classList.remove("active");

            });

            button.classList.add("active");


            /*
             * 현재 카테고리 저장
             */

            currentCategory =
                button.dataset.category;


            /*
             * FAQ 필터 적용
             */

            filterFAQ();

        });

    });


    /* =====================================
       검색
    ===================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                filterFAQ();

            }
        );

    }


    /* =====================================
       FAQ 필터 함수
    ===================================== */

    function filterFAQ() {

        const keyword =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        let visibleCount = 0;


        faqItems.forEach(function (item) {

            const category =
                item.dataset.category;


            const questionText =
                item
                    .querySelector(".question-text")
                    .textContent
                    .toLowerCase();


            const answerText =
                item
                    .querySelector(".faq-answer")
                    .textContent
                    .toLowerCase();


            /*
             * 카테고리 확인
             */

            const categoryMatch =
                currentCategory === "all" ||
                category === currentCategory;


            /*
             * 검색어 확인
             */

            const searchMatch =
                keyword === "" ||
                questionText.includes(keyword) ||
                answerText.includes(keyword);


            /*
             * 최종 표시 여부
             */

            if (categoryMatch && searchMatch) {

                item.style.display = "";

                visibleCount++;

            } else {

                item.style.display = "none";

                item.classList.remove("open");

            }

        });


        /*
         * 검색 결과가 없을 때
         */

        if (faqEmpty) {

            if (visibleCount === 0) {

                faqEmpty.style.display = "block";

            } else {

                faqEmpty.style.display = "none";

            }

        }

    }


    /* =====================================
       문의하기
    ===================================== */

    const contactButton =
        document.querySelector(".contact-button");


    if (contactButton) {

        contactButton.addEventListener(
            "click",
            function () {

                alert(
                    "문의하기 기능은 준비 중입니다. 🤎"
                );

            }
        );

    }

});