// check off spec, todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//  click on x to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();	
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		// grabs new todo from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});