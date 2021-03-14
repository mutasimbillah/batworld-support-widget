//  Import CSS
var supportWidgetCss = document.createElement('link');
supportWidgetCss.setAttribute('rel', 'stylesheet');
supportWidgetCss.setAttribute('href', './support_widget.css');
document.head.appendChild(supportWidgetCss);

//html variable
// var batworldhtml = `
 
// `;
// document.getElementById('batworld').innerHTML = batworldhtml;

/*-----------------------batworld-call------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-call').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-call img').hidden = true;
});
document.querySelector('#batworld-call').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-call img').hidden = false;
});

/*-----------------------batworld-skype end------------------------------------*/

/*-----------------------batworld-email------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-email').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-email img').hidden = true;
});
document.querySelector('#batworld-email').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-email img').hidden = false;
});

/*-----------------------batworld-skype end------------------------------------*/

/*-----------------------batworld-skype------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-skype').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-skype img').hidden = true;
});
document.querySelector('#batworld-skype').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-skype img').hidden = false;
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

/*-----------------------batworld-whatsapp end------------------------------------*/
/*-----------------------batworld-messenger------------------------------------*/
 //Hover Effect
 document.querySelector('#batworld-messenger').addEventListener('mouseenter', function() {
    document.querySelector('#batworld-messenger img').hidden = true;
});
document.querySelector('#batworld-messenger').addEventListener('mouseleave', function() {
    document.querySelector('#batworld-messenger img').hidden = false;
});

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
    var win = window.open('https://support.batworld.com/', '_blank');
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