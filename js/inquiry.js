document.addEventListener("DOMContentLoaded", function () {

    const inquiryForm = document.getElementById("inquiryForm");

    /*
     * 문의하기 제출
     */
    inquiryForm.addEventListener("submit", function (event) {

        // 실제 페이지 이동 및 새로고침 방지
        event.preventDefault();

        const category = document.getElementById("category").value;
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
        const email = document.getElementById("email").value.trim();

        /*
         * 모든 항목 입력 확인
         */
        if (category === "") {
            alert("문의 유형을 선택해주세요.");
            document.getElementById("category").focus();
            return;
        }

        if (title === "") {
            alert("문의 제목을 입력해주세요.");
            document.getElementById("title").focus();
            return;
        }

        if (content === "") {
            alert("문의 내용을 입력해주세요.");
            document.getElementById("content").focus();
            return;
        }

        if (email === "") {
            alert("답변 받을 이메일을 입력해주세요.");
            document.getElementById("email").focus();
            return;
        }

        /*
         * 이메일 형식 확인
         */
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("올바른 이메일 주소를 입력해주세요.");
            document.getElementById("email").focus();
            return;
        }

        /*
         * 현재는 실제 서버로 전송하지 않고
         * 문의 접수 완료 안내만 표시
         */
        alert("문의가 정상적으로 접수되었습니다.");

        // 입력 내용 초기화
        inquiryForm.reset();
    });

});


/*
 * 뒤로가기 버튼
 */
function goBack() {
    history.back();
}