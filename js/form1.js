let form1 = document.forms["form1"];
if (form1) {

    form1.addEventListener("change", () => {
        if (form1.checkValidity()) {
            console.log("form1");
            document.querySelector("#continueBtn").removeAttribute("disabled");
        }
    });

    form1.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("radioBtn", form1["radioBtn"].value);
        localStorage.setItem("frequency", form1["frequency"].value);
        localStorage.setItem("frequency-desc", form1["frequency-desc"].value);
        window.location.href = "form2.html"
    });
}