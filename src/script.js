var wl = window.location;
var input_box = document.querySelector("#input-box");
input_box.setAttribute("oninput", "encode();");

// https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                  return pair[1];
            }
      }
      return (false);
}

function encode() {
      var input = input_box.value;
      var path = wl.pathname + "?content=" + encodeURI(input);
      window.history.pushState("", "HTMLURL", path);
      document.querySelector("#content-div").innerHTML = decodeURI(getQueryVariable("content"));
}

var content = getQueryVariable("content");
if (content == undefined || content == "") {
      input_box.value = def;
      encode();
} else {
      input_box.value = decodeURI(content);
}