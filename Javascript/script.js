$("document").ready(function(){
	// From the previous template
	/* building menu items
	var menu = '';*/
	/*$.ajax({
		url : "Blogging/topic.json"
		,dataType : "json"
		,success : appendMenu
		,error : function(xhr,error,result){
			alert(result);
		}
	});*/
	
	
	
	/*$("#blogMenu").hover(function(){
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
	else{
		navigatePost('Blogging/home.html');
	}
	DISQUS.reset({
		reload: true,
		config: function () {  
			this.page.identifier = "newidentifier";  
			this.page.url = "http://techiespond/#!newthread";
		}
	});
	*/
	
	// accordion settings
	$("#accordion").easyAccordion({ 
			autoStart: false,
			slideNum: false	
	});
	
	// Retreive the blogs for latest year
	
	
	// blog archieve section
	initializeArchieve($("#arhieve2012"),blogDetails[0]);

});

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
			Console.log(alert(text));
		}
	})
}
