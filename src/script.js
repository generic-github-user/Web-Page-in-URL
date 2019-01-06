var wl = window.location;
var input_box = document.querySelector("#input-box");
input_box.setAttribute("oninput", "encode();");

function getUrlVariable(variable) {
      var path = wl.origin + wl.pathname + "?content=";
      var length = path.length;
      return wl.href.slice(length);
}

function encode() {
      var input = input_box.value;
      var path = wl.pathname + "?content=" + escape(input);
      window.history.pushState("", "HTMLURL", path);
      document.querySelector("#content-div").innerHTML = unescape(getUrlVariable("content"));
}

var content = getUrlVariable("content");
if (content == undefined || content == "") {
      input_box.value = def;
      encode();
} else {
      input_box.value = unescape(content);
}