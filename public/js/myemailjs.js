(function () {
    emailjs.init("RfMOI0He-QEwSFnfh");
})();

var text = document.getElementById("btn-text");
var loading = document.getElementById("loading");
var success = document.getElementById("success");

window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //  this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_4kyuqo8', 'template_n1013y4', this)
            .then(function (response) {
                loading.style.animation = "spin 5000ms linear infinite";
                text.textContent = "Ваша заявка отправляется...";
                setTimeout(function () {
                    loading.style.display = "none";
                    success.style.display = "block";
                    text.textContent = "Ваша заявка оформлена!";
                }, 3000);

                console.log("success");

            }, function (error) {
                console.log('FAILED...', error);
            });

    });
}
