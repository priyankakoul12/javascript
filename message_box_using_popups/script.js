const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
//const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg()
{
    //let content = messageIn.value;
    let r = confirm("Do You Want To Display Message?");
    if(r== true)
    {
        alert(messageIn.value);
    }
    else
    {
        alert("You havn't entered your message. Please Enter Your Message To Be Displayed." );
    }
}
