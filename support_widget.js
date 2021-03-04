//  Import CSS
var supportWidgetCss = document.createElement("link");
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

// var html = `
    
// `;
// document.getElementById("batworld").innerHTML = html;

//Functions
 function imotionClick(){
    document.querySelector('#rate-your-exp').hidden = true;
    document.querySelector('#thank-you').hidden = false;
    setTimeout(function(){ 
        document.querySelector('#thank-you').hidden = true;
        document.querySelector('#tell-us-more').hidden = false;
     }, 1000);
 }//imotionClick
 function closeTellUs(){
    document.querySelector('#tell-us-more').hidden = true;
 }//closeTellUs
 function rateYourExp(){
    document.querySelector('#rate-your-exp').hidden = true;
 }//rateYourExp

//addEventListener
document.querySelector('#main-icon').addEventListener("mouseenter", function() {
    document.querySelector('#main-icon img').hidden = true;
});
document.querySelector('#main-icon').addEventListener("mouseleave", function() {
    document.querySelector('#main-icon img').hidden = false;
});
document.querySelector('#main-icon').addEventListener("click", function() {
    document.querySelector('#rate-your-exp').hidden = false;
});
