const hamburger = document.querySelector(".hamburger");

const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

$(document).ready(function () {
    $("#btnSubmit").click(function (e) {
        var jsonData = {};

        var formData = $("#myform").serializeArray();

        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }


        });
        let obj = JSON.stringify(jsonData, null, 2);
        console.log(obj);
        e.preventDefault();
    });
});