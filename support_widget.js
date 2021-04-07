//  Import CSS
var supportWidgetCss = document.createElement('link');
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

//html variable
var batworldhtml = `
<!-- Support -->
<div id="support-icon" style="left: 20px; bottom: 25px">
  <img id="change-img" src="icon/u25.png" alt="Help" />
  <p>সাহায্য</p>
</div>
<!-- Hide -->
<div id="support-hide" style="left: 80px; bottom: 70px">
  <img src="icon/cancel_black.png" alt="Hide" />
</div>
<!-- minimize -->
<div
  id="batworld-minimize"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 25px"
>
  <img src="icon/minimize-2.png" alt="minimize" />
  <p>মিনিমাইজ</p>
</div>
<!-- কল -->
<div
  id="batworld-call"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 460px"
>
  <img src="icon/u25.png" alt="call" />
  <p>কল</p>
</div>
<!-- ইমেল -->
<div
  id="batworld-email"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 400px"
>
  <img src="icon/u19.png" alt="email" />
  <p>ইমেল</p>
</div>
<!-- স্কাইপ -->
<div
  id="batworld-skype"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 340px"
>
  <img src="icon/u16.png" alt="skype" />
  <p>স্কাইপ</p>
</div>
<!-- WhatsApp -->
<div
  id="batworld-whatsapp"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 280px"
>
  <img src="icon/u13.png" alt="WhatsApp" />
  <p>হোয়াটসঅ্যাপ</p>
</div>
<!-- মেসেঞ্জার -->
<div
  id="batworld-messenger"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 220px"
>
  <img src="icon/u7.png" alt="messenger" />
  <p>মেসেঞ্জার</p>
</div>
<!-- টিকেট  -->
<div
  id="batworld-ticket"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 160px"
>
  <img src="icon/u37.png" alt="help us" />
  <p>টিকেট</p>
</div>
<!-- Help us improve -->
<div
  id="batworld-feedback"
  class="batworld-round-icon batworld-hide"
  style="left: 20px; bottom: 100px"
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
      onclick="imotionClick('1')"
    />
    <img src="icon/poor.png" alt="poor" onclick="imotionClick('2')" />
    <img src="icon/avg.png" alt="average" onclick="imotionClick('3')" />
    <img src="icon/good.png" alt="good" onclick="imotionClick('4')" />
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
      id="batworld-email-field"
      placeholder="Your email address (Required)"
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
    <button
      type="button"
      onclick="formSubmit()"
      id="batworld-submit-btn"
      style="float: right"
    >
      Submit
    </button>
  </form>
</div>
`;
document.querySelector('#batworld').innerHTML =  batworldhtml;

/*---------------------API------------------------*/
function formSubmit (){
  var batEmailinput = document.getElementById("batworld-email-field").value.toLowerCase();
  console.log(batEmailinput);
  const batEmailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (batEmailValidate.test(batEmailinput)){
    console.log("valid email submit form");
  }else{
    alert("You have entered an invalid email address!");
  }
}
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
  let batworldWhatsAppNumber = +8801765951292;
  let batworldWhatsAppMsg = "Hello World";
  let batworldWhatsAppSrc = 'http://localhost/';
  
  
  let win = window.open('https://api.whatsapp.com/send?phone='+batworldWhatsAppNumber+
                        '&text=%20'+batworldWhatsAppMsg+
                        ' Source: ' + batworldWhatsAppSrc , '_blank');
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
    console.log(imoId);
    document.querySelector('#rate-your-exp').hidden = true;
    document.querySelector('#thank-you').hidden = false;
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
    document.querySelector('#support-icon').classList.toggle('batworld-hide');
    document.querySelector('#support-hide').style.display = "none";
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
    document.querySelector('#support-icon').classList.toggle('batworld-hide');
    if(window.screen.width < 700){
      document.querySelector('#support-hide').style.display = "inline";
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
    
}
//hide email
if(false){
    batworldEmail.hidden = true;
    adjustPosition(batworldCall);
}
//hide skype
if(false){
    batworldSkype.hidden = true;
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
}
//hide whatsapp
if(false){
    batworldWhatsapp.hidden = true;
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
}
//hide messenger
if(false){
    batworldMessenger.hidden = true;
    adjustPosition(batworldWhatsapp);
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
}
//hide ticket
if(false){
    batworldTicket.hidden = true;
    adjustPosition(batworldMessenger);
    adjustPosition(batworldWhatsapp);
    adjustPosition(batworldSkype);
    adjustPosition(batworldEmail);
    adjustPosition(batworldCall);
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
}
/*------------------------------Hide in mobile view--------------------------------------------*/
//Minimize Module
document.querySelector('#support-hide').addEventListener('click', function() {
  document.querySelector('#support-icon').style.display = "none";
  document.querySelector('#support-hide').style.display = "none";
});

/*------------------------------End Hide in mobile view------------------------------------------------------*/
/*---------------------------- Change image animation -------------------------------------*/
var icon_arr = ["icon/u7.png","icon/u13.png","icon/u16.png","icon/u19.png","icon/u22.png"];
var iconIndex=0;

function changeImage(){
  document.getElementById("change-img").setAttribute("src", icon_arr[iconIndex]);
  iconIndex++;
  if(iconIndex >= icon_arr.length){
    iconIndex=0;
  }
}

setInterval(changeImage, 1500);
/*--------------------------------end of change image animation --------------------------------*/
function requestServerForJS() {
  var s1 = document.createElement("script");
  var url =
    "https://testapi-k8s.oss.net.bd/api/feedback-service/contact-widget/get-js?clientId=b54aa8cb-b96e-43e6-bbd0-59f26cdf4f67";
  s1.setAttribute("src", url);
  document.body.appendChild(s1);
}

function batworldCheckApi() {
  var checkUrl =
    "https://testapi-k8s.oss.net.bd/api/feedback-service/contact-widget/reload-js";
  var apiOptions = {
    method: "GET",
    headers: {
      "client-id": "b54aa8cb-b96e-43e6-bbd0-59f26cdf4f67",
    },
    referer: "https://clo-stage.land.gov.bd",
  };
  fetch(checkUrl, apiOptions)
    .then((response) => response)
    .then((data) => {
      if (data.relaod === true) {
        requestServerForJS();
      }
    });
}

setInterval(batworldCheckApi, 5000);