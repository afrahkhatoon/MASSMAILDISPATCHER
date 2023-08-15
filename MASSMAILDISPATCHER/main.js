let upload = document.getElementById('upload'); //for uploading the emails
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        window.valNo = 0;
        let invalNo = 0;
        window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em != "") {
                if (em.charAt(em.length - 4) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    window.valMail.push(em);
                    window.valNo = window.valNo + 1;
                    return false;
                }
                else if (em.charAt(em.length - 3) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    window.valMail.push(em);
                    window.valNo = window.valNo + 1;
                    return false;
                }
                else {
                    document.querySelector("table#inval").appendChild(creEle);
                    invalNo = invalNo + 1;
                    return false;
                }
                //for sorting the emails
                //if the mails are valid according to the above condition then they are listed below valid emails otherwise under invalid emails
            }
        });
        document.querySelector('#valCount').innerHTML = window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
    };
});


//here we are sending emails
      //sending Emails
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "afrahkhatoon2003@gmail.com",
        Password: "9059429836",
        To: "afrahkhatoon2003@gmail.com",
        From: "afrahkhatoon2003@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(
        Message => alert(window.valNo + "mails has been sent successfully")
    );
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);
}
window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset || this.document.documentElement.scrollTop;
    var scrollButton = document.getElementById("scroll-top-btn");

    if (scrollPosition > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});
document.getElementById("scroll-top-btn").addEventListener("click", function (e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
        //for scrolling the page
    });
});