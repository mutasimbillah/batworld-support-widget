//  Import CSS
var supportWidgetCss = document.createElement("link");
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

var html = `
<!-- Help us improve -->
<div id="batworld-main-icon">
  <img src="icon/smile.png" class="smile" alt="help us" />
  <p>Help us improve</p>
</div>

<!-- Rate Your Experience -->
<div hidden id="rate-your-exp">
  <div class="batworld-flex-container">
    <div style="flex-grow: 2; text-align: right">
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
  <br>
  <label>What did you like most?</label>
  <br>
  <textarea
    name="text_field"
    rows="3"
    placeholder="Tell us your experience (optional)"
    class= "batworld-form-field"
  ></textarea>
  <br>
  <label>What did you like least?</label>
  <br>
  <textarea
    name="text_field"
    rows="3"
    placeholder="Tell us your experience (optional)"
    class="batworld-form-field"
  ></textarea>
  <br>
  <label for="email" 
    >Your email<b><span style="color: red">*</span></b></label
  >
  <br>
  <input
    name="email"
    type="email"
    placeholder="Your email address (Required)"
    required=""
    class="batworld-form-field"
  />
  <br>
  <label for="mobile" 
    >Mobile No</span></b></label
  >
  <br>
  <input
    name="mobile"
    type="mobile"
    placeholder="Your Mobile No (optional)"
    class="batworld-form-field"
  />
</div>
`;
document.getElementById("batworld").innerHTML = html;

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

//addEventListener
document.querySelector('#batworld-main-icon').addEventListener("mouseenter", function() {
    document.querySelector('#batworld-main-icon img').hidden = true;
});
document.querySelector('#batworld-main-icon').addEventListener("mouseleave", function() {
    document.querySelector('#batworld-main-icon img').hidden = false;
});
document.querySelector('#batworld-main-icon').addEventListener("click", function() {
    document.querySelector('#rate-your-exp').hidden = false;
});
