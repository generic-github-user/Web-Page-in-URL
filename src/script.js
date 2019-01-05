var wl = window.location;

function encode(input) {
      wl.href = wl.origin + wl.pathname + "?content=" + encodeURI(input);
}