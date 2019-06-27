//Check Off Specific Todos By clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><i class="fa fa-trash"></i> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});