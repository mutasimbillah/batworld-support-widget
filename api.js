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
        data = {
          relaod: false,
        };
        data = JSON.parse(data);
        console.log(typeof(data.reload));
        if (data.relaod === true) {
          requestServerForJS();
        }
      });
  }
 
setInterval(batworldCheckApi, 15000);