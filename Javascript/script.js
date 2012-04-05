$("document").ready(function(){
	/* building menu items */
	var menu = '';
	$.ajax({
		url : "Blogging/topic.json"
		,dataType : "json"
		,success : appendMenu
		,error : function(xhr,error,result){
			alert(result);
		}
	});
	
	$("#blogMenu").hover(function(){
			$("#blogSubMenu").slideDown(200);
		}
		,function(){
			$("#blogSubMenu").slideUp(200);
		});
		
	var url = location.href;
	var queryString = url.split("?");
	if(queryString[1] != undefined){
		var blogValue = queryString[1].split("=");
		var blogId = blogValue[1];
		var navURL = 'Blogging/'+blogId+'.html';
		navigatePost(navURL);
	}
});

function appendMenu(data){
	$("#blogMenu").append(getMenu(data));
	$("#blogSubMenu").hide();
	$("#blogSubMenu li").addClass("subMenuLi");
	$("#blogSubMenu").addClass("subMenu");
	$(".subMenuLi a").addClass("subMenuA");
}

function navigatePost(postURL){
	/*var inputElement = $(this).parent().children()[1];
	var value = $(inputElement).attr('value');
	var dynamicURL = "Blogging/"+value;*/
	$.ajax({
		url : postURL
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
		menu += '<li><a href="?blogId='+data[i].filename.split('.')[0]+'">'+data[i].topic+'</a>';
		menu += '<input type="hidden" value = "'+data[i].filename+'" />';
	}
	menu+='</li></ul></div>';
	return menu;
}
