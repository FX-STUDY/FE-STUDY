window.onload = function () {

    // 요소 값 불러오기 
    let batteryLevel = 100;   // 배터리 초기값 100 설정 
    const battery = document.querySelector(".charge");
    const nowDateTime = document.querySelector("#nowDateText");
    const shutdownButton = document.querySelector(".shutdown");
    const allDeleteButton = document.querySelector(".allDelete");
    const addAlarmButton = document.querySelector(".add");
    const deleteButtons = document.querySelectorAll(".deleteButton");

    // 배터리 감소 함수
    function decreaseBattery() {
        batteryLevel -= 1;
        battery.textContent = ` ${batteryLevel}%`;

        if (batteryLevel === 0) {
            nowDateTime.style.display = "none";
            const nowDateDiv = document.querySelector(".nowDate");
            nowDateDiv.style.backgroundColor = "#111";
            clearInterval(timer);
        }
    }

    // 현재 시각 업데이트 함수
    function updateNowDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formatDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        nowDateTime.textContent = formatDateTime;
    }

    // 알람 추가 함수
    function addAlarm() {
        const hourInput = document.querySelector("input[placeholder='시 (Hour)']");
        const minuteInput = document.querySelector("input[placeholder='분 (Minute)']");
        const secondInput = document.querySelector("input[placeholder='초 (Second)']");

        const hour = parseInt(hourInput.value);
        const minute = parseInt(minuteInput.value);
        const second = parseInt(secondInput.value);

        if (isNaN(hour) || hour < 0 || hour > 23 || isNaN(minute) || minute < 0 || minute > 59 || isNaN(second) || second < 0 || second > 59) {
            alert("올바른 시간을 입력해주세요.");
            return;
        }

        const period = hour < 12 ? "오전" : "오후";
        const formattedTime = `${hour % 12}:${minute}:${second}`;

        const alarmElement = document.createElement("div");
        alarmElement.classList.add("alarm1");
        alarmElement.innerHTML = `
        <p class="formatDateTime">${period}</p>
        <p class="setTime">${formattedTime}</p>
        <div class="deleteButton"><p class="delete">삭제</p></div>`;

        document.querySelector(".setAlarm").appendChild(alarmElement);
        const deleteButton = alarmElement.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            alarmElement.remove();
        });

    }

    // 전체 삭제 함수
    function deleteAllAlarms() {
        const setAlarmElements = document.querySelectorAll(".alarm1");
        setAlarmElements.forEach((element) => {
            element.remove();
        });
    }

    // 전원 끄기 함수
    function shutdown() {
        nowDateTime.style.display = "none";
        const nowDateDiv = document.querySelector(".nowDate");
        const inputAlarmDiv = document.querySelector(".inputAlarm");
        const setAlarmDiv = document.querySelector(".setAlarm");
        nowDateDiv.style.backgroundColor = "#111";
        inputAlarmDiv.style.backgroundColor = "#111";
        setAlarmDiv.style.backgroundColor = "#111";
    }

    // 배터리 1초에 1씩 감소
    const timer = setInterval(decreaseBattery, 1000);

    // 현재 시각 초기화
    updateNowDateTime();

    // 1초마다 현재 시각 업데이트
    setInterval(updateNowDateTime, 1000);

    // 전원 끄기 버튼 클릭 이벤트
    shutdownButton.addEventListener("click", shutdown);

    //기존 알람 삭제 버튼 클릭 이벤트
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener("click", function (e) {
            const clickedDiv = e.target;
            const parentAlarm = clickedDiv.closest('.alarm1');
            parentAlarm.remove();
        });
    });

    // 전체 삭제 버튼 클릭 이벤트
    allDeleteButton.addEventListener("click", deleteAllAlarms);

    // 알람 추가 버튼 클릭 이벤트
    addAlarmButton.addEventListener("click", addAlarm);
};