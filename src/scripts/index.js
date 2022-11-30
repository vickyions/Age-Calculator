let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let result = document.querySelector("#result-wrapper");

let subBtn = document.querySelector("#sub-btn");
let form = document.querySelector("#dob-form");
//console.log(date, year, month, result, form, subBtn)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let d = date.value;
    let m = month.value;
    let y = year.value;
    let res = "";
    if (
        d === "" ||
        y === "" ||
        m === "" ||
        isNaN(Number(d)) ||
        isNaN(Number(m)) ||
        isNaN(Number(y))
    ) {
        res += "Please input valid data for";
        if (d === "" || isNaN(Number(d))) {
            res += " Date Field,";
        }
        if (m === "" || isNaN(Number(m))) {
            res += " Month Field,";
        }
        if (y === "" || isNaN(Number(y))) {
            res += " Year Field,";
        }
        result.innerHTML = res.substring(0, res.length - 1);
    } else {
        let currDate = new Date();
        let currY = currDate.getFullYear();
        let currM = currDate.getMonth() + 1;
        let currD = currDate.getDate();

        d = parseInt(d);
        m = parseInt(m);
        y = parseInt(y);

        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (d > currD) {
            currD = currD + month[m - 1];
            currM = currM - 1;
        }

        if (m > currM) {
            currY = currY - 1;
            currM = currM + 12;
        }

        let ageD = currD - d;
        let ageM = currM - m;
        let ageY = currY - y;

        result.innerHTML = `Your Age is ${ageY} Years ${ageM} Months ${ageD} Days`;
    }
});
