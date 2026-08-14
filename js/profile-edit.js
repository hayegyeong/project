// =====================================
// 기존 프로필 불러오기
// =====================================

const savedProfile = localStorage.getItem("moodlyUser");

let profile = savedProfile
    ? JSON.parse(savedProfile)
    : {};


// =====================================
// 요소 가져오기
// =====================================

const nicknameInput = document.getElementById("nickname");
const nicknameLength = document.getElementById("nicknameLength");

const ageSelect = document.getElementById("age");
const residenceSelect = document.getElementById("residence");

const introductionInput = document.getElementById("introduction");
const introLength = document.getElementById("introLength");

const profileImage = document.getElementById("profileImage");
const defaultProfile = document.getElementById("defaultProfile");

const photoInput = document.getElementById("photoInput");
const saveBtn = document.getElementById("saveBtn");


// =====================================
// 기존 정보 표시
// =====================================

// 닉네임
nicknameInput.value = profile.name || "";

nicknameLength.textContent =
    nicknameInput.value.length;


// 나이
if (profile.age) {
    ageSelect.value = profile.age;
}


// 거주 형태
if (profile.residence) {
    residenceSelect.value = profile.residence;
}


// 한 줄 소개
introductionInput.value =
    profile.introduction || "";

introLength.textContent =
    introductionInput.value.length;


// =====================================
// 성별 표시
// =====================================

const genderButtons =
    document.querySelectorAll(".gender-btn");

genderButtons.forEach(button => {

    // 기존 성별 표시
    if (button.dataset.gender === profile.gender) {
        button.classList.add("active");
    }

    // 성별 선택
    button.addEventListener("click", () => {

        genderButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// =====================================
// 관심사 표시
// =====================================

const interestButtons =
    document.querySelectorAll(".interest-btn");

const savedInterests =
    profile.interests || [];

interestButtons.forEach(button => {

    const interest =
        button.dataset.interest;

    // 기존 관심사 표시
    if (savedInterests.includes(interest)) {
        button.classList.add("active");
    }


    // 관심사 선택
    button.addEventListener("click", () => {

        const selected =
            document.querySelectorAll(
                ".interest-btn.active"
            );


        // 최대 3개
        if (
            !button.classList.contains("active") &&
            selected.length >= 3
        ) {

            alert(
                "관심사는 최대 3개까지 선택할 수 있어요."
            );

            return;
        }


        button.classList.toggle("active");

    });

});


// =====================================
// 닉네임 글자 수
// =====================================

nicknameInput.addEventListener("input", () => {

    nicknameLength.textContent =
        nicknameInput.value.length;

});


// =====================================
// 한 줄 소개 글자 수
// =====================================

introductionInput.addEventListener("input", () => {

    introLength.textContent =
        introductionInput.value.length;

});


// =====================================
// 기존 프로필 사진 불러오기
// =====================================

if (profile.profileImage) {

    profileImage.src =
        profile.profileImage;

    profileImage.style.display =
        "block";

    defaultProfile.style.display =
        "none";

}


// =====================================
// 프로필 사진 변경
// =====================================

photoInput.addEventListener("change", (event) => {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    // 이미지인지 확인
    if (!file.type.startsWith("image/")) {

        alert(
            "이미지 파일만 선택해주세요."
        );

        return;
    }


    const reader =
        new FileReader();


    reader.onload = () => {

        profileImage.src =
            reader.result;

        profileImage.style.display =
            "block";

        defaultProfile.style.display =
            "none";


        // 저장할 프로필 사진
        profile.profileImage =
            reader.result;

    };


    reader.readAsDataURL(file);

});


// =====================================
// 저장하기
// =====================================

saveBtn.addEventListener("click", () => {

    // =================================
    // 닉네임
    // =================================

    const nickname =
        nicknameInput.value.trim();


    if (nickname === "") {

        alert(
            "닉네임을 입력해주세요."
        );

        nicknameInput.focus();

        return;
    }


    if (nickname.length > 15) {

        alert(
            "닉네임은 최대 15자까지 입력할 수 있어요."
        );

        nicknameInput.focus();

        return;
    }


    // =================================
    // 성별
    // =================================

    let selectedGender =
        profile.gender || "";


    const activeGender =
        document.querySelector(
            ".gender-btn.active"
        );


    if (activeGender) {

        selectedGender =
            activeGender.dataset.gender;

    }


    // =================================
    // 관심사
    // =================================

    const interests = [];


    document
        .querySelectorAll(".interest-btn.active")
        .forEach(button => {

            interests.push(
                button.dataset.interest
            );

        });


    // =================================
    // 프로필 정보 업데이트
    // =================================

    profile.name =
        nickname;

    profile.gender =
        selectedGender;

    profile.age =
        ageSelect.value;

    profile.residence =
        residenceSelect.value;

    profile.interests =
        interests;

    profile.introduction =
        introductionInput.value.trim();


    // =================================
    // localStorage 저장
    // =================================

    localStorage.setItem(
        "moodlyUser",
        JSON.stringify(profile)
    );


    // =================================
    // 저장 완료
    // =================================

    alert("프로필이 저장되었습니다.");

    // 마이페이지로 이동
    window.location.href = "mypage.html";

});