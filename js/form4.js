if (localStorage.getItem("frequency-desc")) {
    document.querySelector(".frequency-desc").textContent = "your description about the pain " + localStorage.getItem("frequency-desc")
}

document.querySelector(".medicine").textContent = "your answer about taking any medicien is " + localStorage.getItem("Medicine")[0].toUpperCase() +
    localStorage.getItem("Medicine").slice(1);

document.querySelector(".burden").textContent = "days of work you missed " + localStorage.getItem("days") + " Days";


document.querySelector(".radioBtn").textContent = "The Rate Of Your Pain Intensity " + localStorage.getItem("radioBtn") + " From 10";

switch (localStorage.getItem("frequency")) {
    case 'Month':
        document.querySelector(".frequency").textContent = "your pain frequency is : Once Every Month";
        break;
    case 'Week':
        document.querySelector(".frequency").textContent = "your pain frequency is : Once Every Week";
        break;
    case 'Daily':
        document.querySelector(".frequency").textContent = "your pain frequency is : Once Daily";
        break;
    case 'OtherMonth':
        document.querySelector(".frequency").textContent = "your pain frequency is : Once Every Other Month";
        break;
}