//  Import CSS
var supportWidgetCss = document.createElement('link');
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

//html variable
var batworldhtml = `
<div id="batworld">
<!--All html inject here-->
<!-- Support -->
<div id="support-icon" style="left: 50px; bottom: 25px">
  <img src="icon/u25.png" alt="help" />
  <p>সাহায্য</p>
</div>
<!-- minimize -->
<div
  id="batworld-minimize"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 520px"
>
  <img src="icon/minimize-2.png" alt="minimize" />
  <p>মিনিমাইজ</p>
</div>
<!-- কল -->
<div
  id="batworld-call"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 460px"
>
  <img src="icon/u25.png" alt="call" />
  <p>কল</p>
</div>
<!-- ইমেল -->
<div
  id="batworld-email"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 400px"
>
  <img src="icon/u19.png" alt="email" />
  <p>ইমেল</p>
</div>
<!-- স্কাইপ -->
<div
  id="batworld-skype"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 340px"
>
  <img src="icon/u16.png" alt="skype" />
  <p>স্কাইপ</p>
</div>
<!-- WhatsApp -->
<div
  id="batworld-whatsapp"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 280px"
>
  <img src="icon/u13.png" alt="WhatsApp" />
  <p>হোয়াটসঅ্যাপ</p>
</div>
<!-- মেসেঞ্জার -->
<div
  id="batworld-messenger"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 220px"
>
  <img src="icon/u7.png" alt="messenger" />
  <p>মেসেঞ্জার</p>
</div>
<!-- টিকেট  -->
<div
  id="batworld-ticket"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 160px"
>
  <img src="icon/u37.png" alt="help us" />
  <p>টিকেট</p>
</div>
<!-- Help us improve -->
<div
  id="batworld-feedback"
  class="batworld-round-icon batworld-hide"
  style="left: 50px; bottom: 100px"
>
  <img src="icon/smile.png" alt="feedback" />
  <p>ফিডব্যাক</p>
</div>

<!-- Rate Your Experience -->
<div hidden id="rate-your-exp">
  <div class="batworld-flex-container">
    <div style="flex-grow: 2">
      <h3>Rate Your Experience</h3>
    </div>
    <div style="flex-grow: 1; text-align: right" onclick="rateYourExp()">
      <img
        src="icon/cancel_black.png"
        class="batworld-cancel"
        alt="Cancel"
      />
    </div>
  </div>
  <div id="imotion">
    <img
      src="icon/horrible.png"
      alt="horrible"
      onclick="imotionClick(1)"
    />
    <img src="icon/poor.png" alt="poor" onclick="imotionClick(2)" />
    <img src="icon/avg.png" alt="average" onclick="imotionClick(3)" />
    <img src="icon/good.png" alt="good" onclick="imotionClick(4)" />
    <img
      src="icon/excellent.png"
      alt="excellent"
      onclick="imotionClick(5)"
    />
  </div>
  <div class="batworld-flex-container">
    <div
      style="flex-grow: 2; text-align: left"
      class="batworld-satisfied"
    >
      NOT SATISFIED
    </div>
    <div
      style="flex-grow: 1; text-align: right"
      class="batworld-satisfied"
    >
      VERY SATISFIED
    </div>
  </div>
</div>
<!--Thank you-->
<div hidden id="thank-you">
  <div class="batworld-flex-container">
    <div style="flex-grow: 1; text-align: left">
      <img src="icon/smile.png" width="55px" height="55px" alt="" />
    </div>
    <div style="flex-grow: 3; text-align: left">
      <h3>Thank You!! Tell us more</h3>
    </div>
  </div>
</div>
<!--Tell us more-->
<div hidden id="tell-us-more">
  <div id="tell-us-more-header">
    <div class="batworld-flex-container">
      <div style="flex-grow: 2; text-align: right">
        <h3>Tell us more</h3>
      </div>
      <div
        style="flex-grow: 1; text-align: right"
        onclick="closeTellUs()"
      >
        <img src="icon/cancel.png" class="batworld-cancel" alt="Cancel" />
      </div>
    </div>
  </div>
  <!--tell-us-more-header -->
  <form action="" id="tell-us-more-form">
    <div id="form-inject"></div>
    <label for="email"
      >Your Email<b><span style="color: red">*</span></b></label
    >
    <input
      name="email"
      type="email"
      placeholder="Your email address (Required)"
      required=""
      class="batworld-form-field"
      required
    />
    <label for="mobile"
      >Mobile No<b><span style="color: red">*</span></b></label
    >
    <input
      name="mobile"
      type="mobile"
      placeholder="Your Mobile No (Required)"
      class="batworld-form-field"
      required
    />
    <button type="button" id="batworld-submit-btn" style="float: right">
      Submit
    </button>
  </form>
</div>
</div>
`;
document.body.innerHTML = document.body.innerHTML + batworldhtml; 

/*---------------------API------------------------*/

var userUrl = 'https://uat-crm.oss.net.bd';
var referUrl = 'https://uat-crm.oss.net.bd';
var apiUrl = 'https://uat-insightdb.oss.net.bd/gateway';
var appID = 'bcf8ddf0-f088-465b-b1bc-c9410ba2e35b';
var accessToken = '77a108a98946b8c9de3755ec3bd70c59';

var questions;

async function  getAccessToken(){
    var atoken = '';
    await fetch(apiUrl+'/api/feedback-service/clients/'+appID,{
        method: 'GET',
        //body: '',
        headers: {
        'referer' : referUrl,
        'access-token': accessToken
        }
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response;
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        data = {
            "status": 200,
            "message": null,
            "fieldErrors": null,
            "generalErrors": null,
            "data": {
              "id": "bcf8ddf0-f088-465b-b1bc-c9410ba2e35b",
              "clientName": "CRM-UAT",
              "domainName": "https://uat-crm.oss.net.bd",
              "accessToken": "77a108a98946b8c9de3755ec3bd70c59",
              "expiryDate": "2020-09-21T04:59:02.000+0000",
              "status": 1
            },
            "options": null,
            "timestamp": "2021-03-17T16:08:33.430+0000"
          }
        //console.log(data.data.accessToken);
        accessToken = data.data.accessToken;
    }).catch(function (err) {
        // There was an error
        console.log(err);
    });
}//getAccessToken
(async()=>{
    console.log(accessToken);
})();
async function imotionPost(imoId){
    await fetch(apiUrl+'/api/feedback-service/feedbacks/feedback',{
        method: 'POST',
        body: {
            "clientId": appID,
            "ratingPoint":imoId,
            "email":"",
            "mobileNo":"",
            "feedbackURL": userUrl
        },
        headers: {
        'referer' : referUrl,
        'access-token': accessToken,
        'Content-Type' : 'application/json'
        }
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response;
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        data = {
            "status": 200,
            "message": null,
            "fieldErrors": null,
            "generalErrors": null,
            "data": {
              "id": "bcf8ddf0-f088-465b-b1bc-c9410ba2e35b",
              "clientName": "CRM-UAT",
              "domainName": "https://uat-crm.oss.net.bd",
              "accessToken": "77a108a98946b8c9de3755ec3bd70c59",
              "expiryDate": "2020-09-21T04:59:02.000+0000",
              "status": 1
            },
            "options": null,
            "timestamp": "2021-03-17T16:08:33.430+0000"
          }
         console.log(data.data.id)
    }).catch(function (err) {
        // There was an error
        console.log(err);
    });

}//imotionPost
async function getQuestions(){
    await fetch(apiUrl+'/api/feedback-service/feedbacks/feedback',{
        method: 'POST',
        body: {
            "id": appID,
            "clientName": "CRM-UAT",
            "domainName": "https://uat-crm.oss.net.bd",
            "accessToken": accessToken,
            "expiryDate": "2020-09-21T04:59:02.000+0000",
            "status": 1
        },
        headers: {
        'referer' : referUrl,
        'access-token': accessToken,
        'Content-Type' : 'application/json'
        }
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response;
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        data = {
            "status": 200,
            "message": null,
            "fieldErrors": null,
            "generalErrors": null,
            "data": {
                "content": [
                    {
                        "id": "e585c608-d935-4118-bbbe-5158e9d8d775",
                        "question": "What did you like most?",
                        "status": 1,
                        "questionBn": "কোন অংশটি আপনার পছন্দ হয়েছে?"
                    },
                    {
                        "id": "e8523230-0f10-4872-b395-da63e19949b6",
                        "question": "What did you like least?",
                        "status": 1,
                        "questionBn": "কোন অংশটি আপনার পছন্দ হয়নি?"
                    },
                    {
                        "id": "e8523230-0f10-4872-b395-da63e19949b6",
                        "question": "Extra Question for test...",
                        "status": 1,
                        "questionBn": "কোন অংশটি আপনার পছন্দ হয়নি?"
                    }
                ],
                "pageable": {
                    "sort": {
                        "unsorted": true,
                        "sorted": false,
                        "empty": true
                    },
                    "pageSize": 20,
                    "pageNumber": 0,
                    "offset": 0,
                    "paged": true,
                    "unpaged": false
                },
                "totalPages": 1,
                "totalElements": 2,
                "last": true,
                "sort": {
                    "unsorted": true,
                    "sorted": false,
                    "empty": true
                },
                "numberOfElements": 2,
                "first": true,
                "size": 20,
                "number": 0,
                "empty": false
            },
            "options": null,
            "timestamp": "2021-03-17T16:13:38.773+0000"
        }
         questions = data.data.content;
         console.log(questions);
    }).catch(function (err) {
        // There was an error
        console.log(err);
    });
}//getQuestions

function displayQuestion(q){
    var qhtml = document.getElementById('form-inject');
    qhtml.innerHTML = '';
    for(let i=0;i<q.length;i++){
        //console.log(q[i].question);
        qhtml.innerHTML += '<label>'+ q[i].question +'</label>';
        qhtml.innerHTML += `<textarea
        name="text_field"
        rows="3"
        placeholder="(optional)"
        class="batworld-form-field"></textarea>
      `;
    }
}//displayQuestion
/*-----------------------API End--------------------*/
/*-----------------------batworld-call------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-call').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-call img').hidden = true;
});
document.querySelector('#batworld-call').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-call img').hidden = false;
});
document.querySelector('#batworld-call').addEventListener('click', function() {
    let win = window.open('tel:+8801755676727', '_blank');
    win.focus();
});
/*-----------------------batworld-call end------------------------------------*/

/*-----------------------batworld-email------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-email').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-email img').hidden = true;
});
document.querySelector('#batworld-email').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-email img').hidden = false;
});
document.querySelector('#batworld-email').addEventListener('click', function() {
    let win = window.open('mailto:anamul@batworld.com', '_blank');
    win.focus();
});
/*-----------------------batworld-email end------------------------------------*/

/*-----------------------batworld-skype------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-skype').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-skype img').hidden = true;
});
document.querySelector('#batworld-skype').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-skype img').hidden = false;
});
document.querySelector('#batworld-skype').addEventListener('click', function() {
    let win = window.open('skype:jehadkhan89?chat', '_blank');
    win.focus();
});
/*-----------------------batworld-skype end------------------------------------*/
/*-----------------------batworld-whatsapp------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-whatsapp').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-whatsapp img').hidden = true;
});
document.querySelector('#batworld-whatsapp').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-whatsapp img').hidden = false;
});
document.querySelector('#batworld-whatsapp').addEventListener('click', function() {
    let win = window.open('https://api.whatsapp.com/send?phone=+8801755676727', '_blank');
    win.focus();
});
/*-----------------------batworld-whatsapp end------------------------------------*/
/*-----------------------batworld-messenger------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-messenger').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-messenger img').hidden = true;
});
document.querySelector('#batworld-messenger').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-messenger img').hidden = false;
});
document.querySelector('#batworld-messenger').addEventListener('click', function() {
    let win = window.open('https://m.me/lensorbitZ', '_blank');
    win.focus();
});
//window.open('fb-messenger://share?link=' + encodeURIComponent(link) + '&app_id=' + encodeURIComponent(app_id));
/*-----------------------batworld-messenger end------------------------------------*/

/*-----------------------batworld-feedback------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-feedback').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-feedback img').hidden = true;
});
document.querySelector('#batworld-feedback').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-feedback img').hidden = false;
});

//Functions
 async function imotionClick(imoId){
    //console.log(imoId);
    await imotionPost(imoId);
    document.querySelector('#rate-your-exp').hidden = true;
    document.querySelector('#thank-you').hidden = false;
    await getQuestions();
    //console.log(questions);
    displayQuestion(questions);
    setTimeout(function(){ 
        document.querySelector('#thank-you').hidden = true;
        document.querySelector('#tell-us-more').hidden = false;
     }, 1200);
 }//imotionClick


 function closeTellUs(){
    document.querySelector('#tell-us-more').hidden = true;
 }//closeTellUs

 function rateYourExp(){
    document.querySelector('#rate-your-exp').hidden = true;
 }//rateYourExp

document.querySelector('#batworld-feedback').addEventListener('click', function() {
    document.querySelector('#rate-your-exp').hidden = false;
});
/*-----------------------batworld-feedback end------------------------------------*/
/*-----------------------batworld-ticket----------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-ticket').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-ticket img').hidden = true;
});
document.querySelector('#batworld-ticket').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-ticket img').hidden = false;
});
document.querySelector('#batworld-ticket').addEventListener('click', function() {
    let win = window.open('https://support.batworld.com/', '_blank');
    win.focus();
});
/*-----------------------batworld-ticket end----------------------------------*/
/*-----------------------Support------------------------------------*/
 //Hover Effect
 document.querySelector('#support-icon').addEventListener('mouseenter', function() {
    document.querySelector('#support-icon img').hidden = true;
});
document.querySelector('#support-icon').addEventListener('mouseleave', function() {
    document.querySelector('#support-icon img').hidden = false;
});

document.querySelector('#support-icon').addEventListener('click', function() {
    let elements = document.getElementsByClassName("batworld-round-icon");
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('batworld-hide');
        }
});

/*-----------------------Support End------------------------------------*/
/*-----------------------batworld-minimize------------------------------------*/
//Hover Effect
document.querySelector('#batworld-minimize').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-minimize img').hidden = true;
});
document.querySelector('#batworld-minimize').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-minimize img').hidden = false;
});
//Minimize Module
document.querySelector('#batworld-minimize').addEventListener('click', function() {
    let elements = document.getElementsByClassName("batworld-round-icon");
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('batworld-hide');
        }
});
/*-----------------------batworld-minimize End------------------------------------*/


function adjustPosition(myElement){
    //console.log(parseInt(myElement.style.bottom,10));
    myElement.style.bottom = parseInt(myElement.style.bottom,10)-60+"px";
    //console.log(myElement.style.bottom);
}

var batworldMinimize = document.querySelector('#batworld-minimize');
var batworldCall = document.querySelector('#batworld-call');
var batworldEmail = document.querySelector('#batworld-email');
var batworldSkype = document.querySelector('#batworld-skype');
var batworldWhatsapp = document.querySelector('#batworld-whatsapp');
var batworldMessenger = document.querySelector('#batworld-messenger');
var batworldTicket = document.querySelector('#batworld-ticket');
var batworldFeedback = document.querySelector('#batworld-feedback');

//hide call
if(false){
    batworldCall.hidden = true;
    adjustPosition(batworldMinimize);
}
//hide email
if(false){
    batworldEmail.hidden = true;
    adjustPosition(batworldMinimize);
    adjustPosition(batworldCall);
}
//hide skype
if(false){
    batworldSkype.hidden = true;
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
    adjustPosition(batworldMinimize);
}
//hide whatsapp
if(false){
    batworldWhatsapp.hidden = true;
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
    adjustPosition(batworldMinimize);
}
//hide messenger
if(false){
    batworldMessenger.hidden = true;
    adjustPosition(batworldWhatsapp);
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
    adjustPosition(batworldMinimize);
}
//hide ticket
if(false){
    batworldTicket.hidden = true;
    adjustPosition(batworldMessenger);
    adjustPosition(batworldWhatsapp);
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
    adjustPosition(batworldMinimize);
}
//hide feedback
if(false){
    batworldFeedback.hidden = true;
    adjustPosition(batworldTicket);
    adjustPosition(batworldMessenger);
    adjustPosition(batworldWhatsapp);
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
    adjustPosition(batworldMinimize);
}
