//Test purpose only
/*var blogDetails = [
	{
		"year":2012,
		"months":[
			{	"month":3,
				"blogs":[
					{"blogId":1,"title":"ABC"},
					{"blogId":2,"title":"DEF"},
					{"blogId":3,"title":"GHI"},
					{"blogId":4,"title":"GHI"},
					{"blogId":1,"title":"ABC"},
					{"blogId":2,"title":"DEF"},
					{"blogId":3,"title":"GHI"},
					{"blogId":4,"title":"GHI"},
					{"blogId":1,"title":"ABC"},
					{"blogId":2,"title":"DEF"},
					{"blogId":3,"title":"GHI"},
					{"blogId":4,"title":"GHI"}
				]
			},
			{	"month":2,
				"blogs":[
					{"blogId":4,"title":"ABC DEF GHI"}
				]
			}
		]
	},
	{
		"year":2011,
		"months":[
			{	"month":12,
				"blogs":[
					{"blogId":1,"title":"ABC"},
					{"blogId":2,"title":"DEF"},
					{"blogId":3,"title":"GHI"}
				]
			},
		]
	}
];*/

function initializeArchieve(divDetails, objblogDetail){
	var txtHTML = generateStructure(objblogDetail);
	divDetails.addClass('archieveClass');
	divDetails.append(txtHTML);
	$('.month', divDetails).height(divDetails.height()-20);
	
	// Handling click events of the blog links
	$('.month span ul li a', divDetails).click(function (){
		alert($(":hidden",$(this).parent()).val());
	});
}

// Generate structure will create the structure for the particular year
function generateStructure(objBlogDetails){
	var txtStructure = ''
	for(monthCount = 0; monthCount < objBlogDetails.months.length; monthCount++){ 
		txtStructure += addMonths(objBlogDetails.months[monthCount], objBlogDetails.year);
	}
	return txtStructure;
}

// Add months will generate the structure for a particular month
function addMonths(objMonth, intYear){
	var txtMonth = '';
	if(objMonth.month != 'undefined' && objMonth.month > 0 && objMonth.month <= 12){
		var txtMonth = getMonthName(objMonth.month, intYear);
		txtMonthDiv = '<div class="month">';
		txtMonthDiv += '<div class="monthDisplay">'+txtMonth+'</div>'
		txtMonthDiv += '<span>';
		txtMonthDiv += getBlogLinks(objMonth.blogs);
		txtMonthDiv += '</span>';
		txtMonthDiv += '</div>';
	}
	return txtMonthDiv;
}

// Function to return the name of the month based on the month number
function getMonthName(intMonth, intYear){
	var monthName = "";
	switch (intMonth){
		case 1: {
			monthName = "January, ";
			break;
		}
		case 2: {
			monthName = "February, ";
			break;
		}
		case 3: {
			monthName = "March, ";
			break;
		}
		case 4: {
			monthName = "April, ";
			break;
		}
		case 5: {
			monthName = "May, ";
			break;
		}
		case 6: {
			monthName = "June, ";
			break;
		}
		case 7: {
			monthName = "July, ";
			break;
		}
		case 8: {
			monthName = "August, ";
			break;
		}
		case 9: {
			monthName = "September, ";
			break;
		}
		case 10: {
			monthName = "October, ";
			break;
		}
		case 11: {
			monthName = "November, ";
			break;
		}
		case 12: {
			monthName = "December, ";
			break;
		}
	}
	monthName += intYear;
	return monthName;
}

// Function to create blog lists
function getBlogLinks(objBlogs){
	var txtBlogs = '';
	if(objBlogs != 'undefined'){
		for(blogCount = 0; blogCount < objBlogs.length; blogCount++){
			if(blogCount%3 == 0){
				if((objBlogs.length - blogCount) <= 3){
					txtBlogs += '<ul class="noRightBorder">';
				}
				else{
					txtBlogs += '<ul>';
				}
			}
			if((blogCount+1)%3 == 0){
				txtBlogs += '<li class="noBottomBorder">';
			}
			else{
				txtBlogs += '<li>';
			}
			txtBlogs += '<input type="hidden" value="';
			txtBlogs += objBlogs[blogCount].blogId;
			txtBlogs += '"/><a href="#">';
			txtBlogs += objBlogs[blogCount].title;
			txtBlogs += '</a></li>';
			if((blogCount+1)%3 == 0){
				txtBlogs += '</ul>';
			}
		}
	}
	return txtBlogs;
}