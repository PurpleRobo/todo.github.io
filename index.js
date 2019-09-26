// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//Below line will stop the event from triggering to any parent element except span
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.key == "Enter") {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");	
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})