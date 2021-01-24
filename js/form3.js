function showModal() {
    document.querySelector('.modal').style.display = 'block';
}

function goToResults() {
    closeModal();
    window.location.href = "form4.html";
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}