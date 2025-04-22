function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const id = document.getElementById("id").value;

    alert(`Entered Details:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nAddress: ${address}\nID: ${id}`);
}