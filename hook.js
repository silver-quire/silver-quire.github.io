$(document).ready(function() {
  extract('test');

  function extract(data) {
    $.ajax({
      url: "http://requestb.in/15xjx2w1",
      method: "post",
      data: { data: data }
    });
  }
});
