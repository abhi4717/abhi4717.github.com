var blogDetails = new Array();
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
	// Arrange blog index in ascending order
	arrangeBlogIndex();
	
	// Create blog Mapping Structure
	createBlogMappingStructure();
	
	// blog archieve section
	initializeArchieve($("#arhieve2012"),blogDetails[0]);

});

function createBlogMappingStructure(){
	for(var count = blogMapping.length-1; count >= 0; count--){
		var yearDetails = {};
		yearDetails.year = '';
		yearDetails.months = new Array();
		var monthDetail = {};
		monthDetail.month = '';
		monthDetail.blogs = new Array();
		var blogs = {};
		blogs.blogId = '';
		blogs.title = '';
		var blogs = {};
		if(blogDetails == 'null' || blogDetails.length == 0){
			/*// creating year entries
		yearDetails.year = blogMapping[0].year;
		// creating month entries
		monthDetail.month = blogMapping[0].month;
		// creating blog entries
		blogs.blogId = blogMapping[0].id;
		blogs.title = blogMapping[0].topic;
		// putting the blog into month details
		monthDetail.blogs.push(blogs);
		// putting the month details into year details
		yearDetails.months.push(monthDetail)
		blogDetails.push(yearDetails);*/
		}
		else{
			var tmpYearDetails = blogDetails[blogDetails.length-1];
			if(tmpYearDetails.year == blogMapping[count].year){
				yearDetails = blogDetails.pop();
				var tmpMonthDetails = tmpYearDetails.months[tmpYearDetails.months.length-1];
				if(tmpMonthDetails.month == blogMapping[count].month){
					monthDetail = yearDetails.months.pop();
				}
			}
			else{
				yearDetails.year = blogMapping[count].year;
				blogDetails.push(yearDetails);
			}
			
		}
		// creating year entries
		yearDetails.year = blogMapping[count].year;
		// creating month entries
		monthDetail.month = blogMapping[count].month;
		// creating blog entries
		blogs.blogId = blogMapping[count].id;
		blogs.title = blogMapping[count].topic;
		// putting the blog into month details
		monthDetail.blogs.push(blogs);
		// putting the month details into year details
		yearDetails.months.push(monthDetail)
		blogDetails.push(yearDetails);
	}
}

// Arranging the blog index in ascending order
function arrangeBlogIndex(){
	for(var count=0; count < blogMapping.length-1; count++){
		for(var ascCount=count+1; ascCount < blogMapping.length; ascCount++){
			if(blogMapping[count].blogSortId > blogMapping[ascCount].blogSortId){
				temp = blogMapping[ascCount];
				blogMapping[ascCount] = blogMapping[count];
				blogMapping[count] = temp;
			}
		}
	}
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
			Console.log(alert(text));
		}
	})
}
