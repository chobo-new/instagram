document.addEventListener("DOMContentLoaded", function(e) {
    
    // 1. 아이디 변경
    let configID = document.querySelector("#id i");
    let idText = document.querySelector("#id span");

    configID.addEventListener("click", function(e) {
        let newId = prompt("새 아이디 입력");
        if (newId) idText.textContent = newId; 
    });

    // 2. 프로필 편집 (선택자를 HTML에 맞게 #profile_info로 수정)
    let profileEditButton = document.querySelector("#profile_info button");
    let userInfo = document.querySelector("#userInfo");
    let summary = document.querySelector("#summary");
    let profileDetail = document.querySelector("#profileDetail");
    let changing = false;

    profileEditButton.addEventListener("click", function(e) {
        if(changing) {
            // 변경된 값 가져오기
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail = profileDetail.querySelector("input").value;

            // HTML 태그가 깨지지 않도록 백틱(``) 적용
            userInfo.innerHTML = `<strong>${_userInfo}</strong>`;
            summary.textContent = _summary;

            if (_profileDetail.startsWith("http")){
                profileDetail.innerHTML = `<a href="${_profileDetail}" target="_blank">${_profileDetail}</a>`;
            } else {
                profileDetail.textContent = _profileDetail;
            }

            e.target.textContent = "프로필 편집";
            changing = false;
        } else {
            // 현재 텍스트 가져오기
            let _userInfo = userInfo.textContent.trim();
            let _summary = summary.textContent.trim();
            let _profileDetail = profileDetail.textContent.trim();

            // input 창으로 변환 (따옴표 처리를 위해 백틱 사용)
            userInfo.innerHTML = `<input type="text" value="${_userInfo}">`;
            summary.innerHTML = `<input type="text" value="${_summary}">`;
            profileDetail.innerHTML = `<input type="text" value="${_profileDetail}">`;
            
            e.target.textContent = "편집 완료";
            changing = true;
        }
    });

    // 3. 프로필 사진 변경
    let profile_pic = document.querySelector("#profile_pic .circle_pic");
    
    profile_pic.addEventListener("mouseover", function(e) {
        e.target.style.filter = "grayscale(50%)";
    });

    profile_pic.addEventListener("mouseleave", function(e) {
        e.target.style.filter = "grayscale(0%)";
    });

    profile_pic.addEventListener("click", function(e) {
        let newUrl = prompt("새 프로필 사진 URL 입력");
        if (newUrl) { 
            profile_pic.setAttribute("src", newUrl);
        }
    });
});