$("document").ready(function(){
	/* building menu items */
	var menu = '';
	$.ajax({
		url : "Blogging/topic.json"
		,dataType : "json"
		,success : function(data){
			$("#blogMenu").append(getMenu(data));
			$("#blogSubMenu").hide();
			$("#blogSubMenu li").addClass("subMenuLi");
			$("#blogSubMenu").addClass("subMenu");
		}
		,error : function(xhr,error,text){
			alert(error);
		}
	});
	
	$("#blogMenu").hover(function(){
			$("#blogSubMenu").slideDown(200);
		}
		,function(){
			$("#blogSubMenu").slideUp(200);
		});
	
	
});

/*function navigatePost(){
	$("#maincontent").empty();
	$.ajax({
		url : 
		,dataType : "html"
		,success : function(data){
		}
	})
}*/


function getMenu(data){
	var menu = '<ul id="blogSubMenu">';
	for(var i =0; i<data.length;i++){
		menu += '<li>'+data[i].topic+'</li>';
	}
	menu+='</ul></div>';
	return menu;
}
