const mobile = document.querySelector(".mobile");
const submit_btn = document.querySelector(".submit_btn");
const form = document.querySelector(".form-try");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    formInput();
});

function formInput() {
    const mobileValue = mobile.value.trim();

    if (mobileValue == "") {
        showErrorMsg(mobile, "Mobile Number cannot be blank");
    } else if (mobileValue.length < 10 || mobileValue.length > 10) {
        showErrorMsg(mobile, "Mobile number should be relevant");
    } else {
        showSuccessMsg(mobile);
    }

    //  FUNCTIONS
    function showSuccessMsg(input) {
        const inp = input.parentElement;
        const msg = inp.querySelector(".msg");
        input.classList.add("success");
        msg.innerHTML = "";
        return true;
    }

    function showErrorMsg(input, message) {
        const inp = input.parentElement;
        const msg = inp.querySelector(".msg");
        msg.innerHTML = message;
        input.classList.add("error");
        return false;
    }
}