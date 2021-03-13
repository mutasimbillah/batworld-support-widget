//  Import CSS
var supportWidgetCss = document.createElement('link');
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

//html variable
// var batworldhtml = `
 
// `;
// document.getElementById('batworld').innerHTML = batworldhtml;

/*-----------------------Rate US------------------------------------*/

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

document.querySelector('#help-us-improve').addEventListener('click', function() {
    document.querySelector('#rate-your-exp').hidden = false;
});
/*-----------------------Rate US End------------------------------------*/
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