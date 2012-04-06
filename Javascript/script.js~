$("document").ready(function(){
	/* building menu items */
	var menu = '';
	$.ajax({
		url : "Blogging/topic.json"
		,dataType : "json"
		,success : appendMenu
		,error : function(xhr,error,result){
		}
	});
	
	$("#blogMenu").hover(function(){
			$("#blogSubMenu").slideDown(200);
		}
		,function(){
			$("#blogSubMenu").slideUp(200);
		});
		
	$(".subMenuLi a").live("click",navigatePost);
});

function appendMenu(data){
	$("#blogMenu").append(getMenu(data));
	$("#blogSubMenu").hide();
	$("#blogSubMenu li").addClass("subMenuLi");
	$("#blogSubMenu").addClass("subMenu");
	$(".subMenuLi a").addClass("subMenuA");
}

function navigatePost(url){
	var inputElement = $(this).parent().children()[1];
	var value = $(inputElement).attr('value');
	var dynamicURL = "Blogging/"+value;
	
	$.ajax({
		url : dynamicURL
		,dataType : "html"
		,success : function(data){
			$("#maincontent").empty();
			$("#maincontent").append(data).hide();
			$("#maincontent").fadeIn(500);
			}	
		,error : function(xhr, error, text){
			/*alert(text);*/
		}
	})
}

function getMenu(data){
	var menu = '<ul id="blogSubMenu">';
	for(var i =0; i<data.length;i++){
		menu += '<li><a href="#">'+data[i].topic+'</a>';
		menu += '<input type="hidden" value = "'+data[i].filename+'" />';
	}
	menu+='</li></ul></div>';
	return menu;
}
