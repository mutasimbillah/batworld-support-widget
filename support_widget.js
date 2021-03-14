//  Import CSS
let supportWidgetCss = document.createElement('link');
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

//html variable
let batworldhtml = `
<!-- Support -->
<div id="support-icon" style="left: 50px; bottom: 30px;">
  <img src="icon/u25.png" alt="WhatsApp" />
  <p>সাহায্য</p>
</div>
<!-- কল -->
<div id="batworld-minimize" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 590px;">
  <img src="icon/minimize-2.png"  alt="WhatsApp" />
  <p>মিনিমাইজ</p>
</div>
<!-- কল -->
<div id="batworld-call" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 520px;">
  <img src="icon/u25.png"  alt="call" />
  <p>কল</p>
</div>
<!-- ইমেল -->
<div id="batworld-email" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 450px;">
  <img src="icon/u19.png"  alt="email" />
  <p>ইমেল</p>
</div>
<!-- স্কাইপ -->
<div id="batworld-skype" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 380px;">
  <img src="icon/u16.png"  alt="skype" />
  <p>স্কাইপ</p>
</div>
<!-- WhatsApp -->
<div id="batworld-whatsapp" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 310px;">
  <img src="icon/u13.png"  alt="WhatsApp" />
  <p>হোয়াটসঅ্যাপ</p>
</div>
<!-- মেসেঞ্জার -->
<div id="batworld-messenger" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 240px;">
  <img src="icon/u7.png"  alt="messenger" />
  <p>মেসেঞ্জার</p>
</div>
<!-- Help us improve -->
<div id="batworld-feedback" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 170px;">
  <img src="icon/smile.png"  alt="feedback" />
  <p>ফিডব্যাক</p>
</div>

<!-- Rate Your Experience -->
<div hidden id="rate-your-exp">
  <div class="batworld-flex-container">
    <div style="flex-grow: 2">
      <h3>Rate Your Experience</h3>
    </div>
    <div style="flex-grow: 1; text-align: right" onclick="rateYourExp()">
      <img src="icon/cancel_black.png" class="batworld-cancel" alt="Cancel"  />
    </div>
  </div>
  <div id="imotion">
    <img
      src="icon/horrible.png"
      alt="horrible"
      onclick="imotionClick()"
    />
    <img src="icon/poor.png" alt="poor" onclick="imotionClick()" />
    <img src="icon/avg.png" alt="average" onclick="imotionClick()" />
    <img src="icon/good.png" alt="good" onclick="imotionClick()" />
    <img
      src="icon/excellent.png"
      alt="excellent"
      onclick="imotionClick()"
    />
  </div>
  <div class="batworld-flex-container">
    <div style="flex-grow: 2; text-align: left" class="batworld-satisfied">
      NOT SATISFIED
    </div>
    <div style="flex-grow: 1; text-align: right" class="batworld-satisfied">
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
      <div style="flex-grow: 1; text-align: right" onclick="closeTellUs()">
        <img src="icon/cancel.png" class="batworld-cancel" alt="Cancel" />
      </div>
    </div>
  </div>
  <label>What did you like most?</label>
  <textarea
    name="text_field"
    rows="3"
    placeholder="Tell us your experience (optional)"
    class= "batworld-form-field"
  ></textarea>
  <label>What did you like least?</label>
  <textarea
    name="text_field"
    rows="3"
    placeholder="Tell us your experience (optional)"
    class="batworld-form-field"
  ></textarea>
  <label for="email" 
    >Your email<b><span style="color: red">*</span></b></label
  >
  <input
    name="email"
    type="email"
    placeholder="Your email address (Required)"
    required=""
    class="batworld-form-field"
  />
  <label for="mobile" 
    >Mobile No</span></b></label
  >
  <input
    name="mobile"
    type="mobile"
    placeholder="Your Mobile No (optional)"
    class="batworld-form-field"
  />
</div>
 <!-- টিকেট  -->
 <div id="batworld-ticket" class="batworld-round-icon batworld-hide" style="left: 50px; bottom: 100px;">
  <img src="icon/u37.png"  alt="help us" />
  <p>টিকেট</p>
</div>
`;
document.getElementById('batworld').innerHTML = batworldhtml;

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
 function imotionClick(){
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