let form2 = document.forms["form2"];

if (form2) {

    form2.addEventListener("change", () => {
        if (localStorage.getItem("days") != null &&
            localStorage.getItem("Medicine") != null) {

            document.querySelector("#continueBtn").removeAttribute("disabled");
        }
    });

    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("Medicine", form2["Medicine"].value);
        localStorage.setItem("days", form2["days"].value);
        window.location.href = "form3.html"
    });
}