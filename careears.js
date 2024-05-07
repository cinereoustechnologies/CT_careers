function sendOTP(){
    const email = document.getElementById("email");
    const _otp1 = document.getElementsByClassName("_otp1")[0];

    let otp_val = Math.floor(Math.random() * 100000);

    let emailbody = `<h2> Your OTP is</h2>${otp_val}`;


    Email.send({
        SecureToken :"5474873c-44a6-431e-a53c-264d704e777b",
        Host : "smtp.elasticemail.com",
        Username : "cinereoustechnologies3@gmail.com",
        Password : "245E956A78CF8DB3130894FBBAD495C92B42",
        To : email.value,
        From : "cinereoustechnologies3@gmail.com",
        Subject : "Student Email Verifecation",
        Body : emailbody,
    }).then(
        message => {
            if (message === "OK"){
                alert("OTP sent your email "  +  email.value);

                _otp1.style.display = "flex";
                const otp_inp = document.getElementById("otp_inp");
                const btn00 = document.getElementsByClassName("btn00");

                btn00.addEventListener('click', () => {
                    if (otp_inp.value == otp_val){
                        alert("Email address Verified...");
                    }
                    else{
                        alert("Invalied OTP");
                    }
                })
            }
        }
    );
}
