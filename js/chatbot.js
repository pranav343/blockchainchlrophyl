function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hello Myself BlockEd, How can I help you?" ;
    res_elm.setAttribute("class","left");

    document.getElementById('msg').appendChild(res_elm);
}
document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();

    var req = document.getElementById('msg_send').value ;

    if (req == undefined || req== "") {

    }
    else{

        let res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response)
        })

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        let con1 = document.createElement('div');
        let con2 = document.createElement('div');

        con1.setAttribute("class","msgcon1");
        con2.setAttribute("class","msgcon2");

        msg_req.innerHTML = req ;
        msg_res.innerHTML = res ;


        msg_req.setAttribute("class","right");
        msg_res.setAttribute("class","left");

        let message = document.getElementById('msg');


        message.appendChild(con1);
        message.appendChild(con2);

        con1.appendChild(msg_req);
        con2.appendChild(msg_res);

        document.getElementById('msg_send').value = "";

    function scroll() {
        var scrollMsg = document.getElementById('msg')
        scrollMsg.scrollTop = scrollMsg.scrollHeight ;
    }
    scroll();

    }


    });
