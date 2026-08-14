const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const residence = document.getElementById("residence").value;
    const agree = document.getElementById("agree").checked;

    // 이름 확인
    if (!name) {
        alert("이름을 입력해주세요.");
        return;
    }

    // 나이 확인
    if (!age) {
        alert("나이를 선택해주세요.");
        return;
    }

    // 거주 형태 확인
    if (!residence) {
        alert("거주 형태를 선택해주세요.");
        return;
    }

    // 약관 동의 확인
    if (!agree) {
        alert("개인정보 처리방침 및 이용약관에 동의해주세요.");
        return;
    }

    // 성별
    const gender =
        document.querySelector(".gender-btn.active")?.dataset.gender || "";

    // 관심사
    const interests = [
        ...document.querySelectorAll(
            ".interest-item input:checked"
        )
    ].map(input => input.value);

    // 인테리어 관심도
    const interiorLevel =
        document.querySelector(".interior-btn.active")?.dataset.value || "3";


    // 회원정보 저장
    const user = {
        name: name,
        gender: gender,
        age: age,
        residence: residence,
        interests: interests,
        interiorLevel: interiorLevel
    };

    localStorage.setItem(
        "moodlyUser",
        JSON.stringify(user)
    );

    // 회원정보 입력 완료 표시
localStorage.setItem("moodlyProfileCompleted", "true");

    // 메인 화면으로 이동
    window.location.href = "index.html";
});
const interestInputs = document.querySelectorAll(
    '.interest-item input[type="checkbox"]'
);

interestInputs.forEach(input => {

    input.addEventListener("change", () => {

        const checked = document.querySelectorAll(
            '.interest-item input[type="checkbox"]:checked'
        );

        if (checked.length > 3) {

            input.checked = false;

            alert("관심사는 최대 3개까지 선택할 수 있어요.");
        }

    });

});

// =====================================
// 성별 선택
// =====================================

const genderButtons = document.querySelectorAll(".gender-btn");

genderButtons.forEach(button => {

    button.addEventListener("click", () => {

        // 기존 선택 해제
        genderButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // 현재 버튼 선택
        button.classList.add("active");

    });

});

// =====================================
// 인테리어 관심도 선택
// =====================================

const interiorButtons =
    document.querySelectorAll(".interior-btn");

interiorButtons.forEach(button => {

    button.addEventListener("click", () => {

        // 기존 선택 해제
        interiorButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // 현재 버튼 선택
        button.classList.add("active");

    });

});
// =====================================
// 개인정보 처리방침 / 이용약관 팝업
// =====================================

const termsBtn =
    document.getElementById("termsBtn");

const termsOverlay =
    document.getElementById("termsOverlay");

const termsClose =
    document.getElementById("termsClose");


// 약관 열기
termsBtn.addEventListener("click", () => {

    termsOverlay.classList.add("show");

});


// X 버튼으로 닫기
termsClose.addEventListener("click", () => {

    termsOverlay.classList.remove("show");

});


// 팝업 바깥쪽을 눌러도 닫기
termsOverlay.addEventListener("click", (event) => {

    if (event.target === termsOverlay) {

        termsOverlay.classList.remove("show");

    }

});