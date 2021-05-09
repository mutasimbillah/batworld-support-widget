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
<div hidden id="batworld-popup">
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
function batworldPopup(msg){
  var popup = document.querySelector('#batworld-popup');
  popHtml = "<p>" + msg + "!</p>";
  popup.innerHTML = popHtml;
  popup.hidden = false;
   setTimeout(function(){ 
       document.querySelector('#batworld-popup').hidden = true;
    }, 2000);
}

/*-----------------------batworld-call------------------------------------*/
function isDesktop() {
  let check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
    check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
 //Hover Effect
 document.querySelector('#batworld-call').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-call img').hidden = true;
});
document.querySelector('#batworld-call').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-call img').hidden = false;
});
document.querySelector('#batworld-call').addEventListener('click', function() {
    if(!isDesktop()){
        window.alert("Call +8801755676727");
    }else{
      let win = window.open('tel:+8801755676727', '_blank');
      win.focus();
    }
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
  batworldPopup("From 10 am to 5pm only");
  setTimeout(function(){ 
    let batworldWhatsAppNumber = +8801765951292;
    let batworldWhatsAppMsg = "Hello World";
    let batworldWhatsAppSrc = 'http://localhost/';
  
    let win = window.open('https://api.whatsapp.com/send?phone='+batworldWhatsAppNumber+
                        '&text=%20'+batworldWhatsAppMsg+
                        ' Source: ' + batworldWhatsAppSrc , '_blank');
    win.focus();
 }, 2000);
  
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
