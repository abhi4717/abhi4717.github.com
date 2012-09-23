var blogDetails = new Array();
var currentYearDisplay = 0;
$("document").ready(function(){
	currentYearDisplay = 0;
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
	// Arrange blog index in ascending order
	arrangeBlogIndex();
	
	// Create blog Mapping Structure
	createBlogMappingStructure();
	
	$('.btnPrevious').hide();
	if(blogDetails.length > 5){
		$('.btnNext').show();
	}
	else{
		$('.btnNext').hide();
	}
		
	// Next button click event
	$('.btnNext').click(function(){
		$('#accordion dl').children().remove();
		currentYearDisplay = currentYearDisplay + 5;
		
		$('.btnPrevious').show();
		if(currentYearDisplay + 5 > blogDetails.length){
			$('.btnNext').hide();
		}
		else{
			$('.btnNext').show();
		}
		
		displayYears(currentYearDisplay);
	});
	
	// Previous button click event
	$('.btnPrevious').click(function(){
		$('#accordion dl').children().remove();
		currentYearDisplay = currentYearDisplay - 5;
		
		$('.btnNext').show();
		if(currentYearDisplay - 5 < 0){
			$('.btnPrevious').hide();
		}
		else{
			$('.btnPrevious').show();
		}
		
		displayYears(currentYearDisplay);
	});
	
	// Display menu for 5 year records only
	displayYears(currentYearDisplay);
	
});

// Functions will fill the menus of the accordion menus
function fillMenus(strIndex){
	for(var count = strIndex; (count < (strIndex + 5)) && (count < blogDetails.length) ; count++){
		var strDivId = '#archive'+blogDetails[count].year;
		initializeArchieve($(strDivId),blogDetails[count]);
	}
}

// Display menu for 5 year records only
function displayYears(startIndex){
	
	$("#accordion").width($('#blogNav').width()-10);
	if(!$('.btnPrevious').is(':hidden')){
		$("#accordion").width($("#accordion").width() - $('.btnPrevious').width());
	}
	if(!$('.btnNext').is(':hidden')){
		$("#accordion").width($("#accordion").width() - $('.btnNext').width());
	}
	// Generate divs for years in accordion menu
	generateDivs(startIndex);
	
	// accordion settings
	$("#accordion").easyAccordion({ 
		autoStart: false,
		slideNum: false	
	});
	
	// Fill the menus
	fillMenus(startIndex);
	
	
}

// Append dt(s) and dd(s) for the respective years in accordion menu section
function generateDivs(startIndex){
	var strArchieveTags = '';
	for(var count=startIndex; (count < (startIndex + 5)) && (count < blogDetails.length) ; count++){
		strArchieveTags += '<dt>';
		strArchieveTags += blogDetails[count].year;
		strArchieveTags += '</dt><dd><div id="';
		strArchieveTags += 'archive'+blogDetails[count].year;
		strArchieveTags += '"></div></dd>';
	}
	$('#accordion dl').append(strArchieveTags);
}

// This function generates the blogDetails structure out of blogMapping
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
		if(blogDetails !== 'null' && blogDetails.length > 0){
			var tmpYearDetails = blogDetails[blogDetails.length-1];
			if(tmpYearDetails.year == blogMapping[count].year){
				yearDetails = blogDetails.pop();
				var tmpMonthDetails = tmpYearDetails.months[tmpYearDetails.months.length-1];
				if(tmpMonthDetails.month == blogMapping[count].month){
					monthDetail = yearDetails.months.pop();
				}
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
