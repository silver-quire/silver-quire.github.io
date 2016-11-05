$(document).ready(function() {
  extract('test');

  function extract(data) {
    $.ajax({
      url: "http://mockbin.org/bin/5e85cafc-c122-4701-a431-8539d8784ef5",
      method: "post",
      data: { data: data }
    });
  }
});
