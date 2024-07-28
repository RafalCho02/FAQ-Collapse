const $toggles = $(".faq-toggle");

$toggles.each(function () {
  $(this).on("click", function () {
    $(this).parent().toggleClass("active");
  });
});
