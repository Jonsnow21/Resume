var bio = {
	"name" : "Neeraj Kumar Jha",
	"role" : "Developer In Making",
	"welcomeMessage" : "hey, welcome! I am Neeraj ",
	"bioPic" : "images/fry.jpg",
	"contacts" : {
		"mobile" : 8010879484,
		"email" : "neeraj14.nj@gmail.com",
		"github" : "https://github.com/Jonsnow21",
		"twitter" : "neeraj_1994",
		"linkedIn" : "https://in.linkedin.com/in/neeraj-jha-9525a5b8",
		"location" : "Delhi, India"
	},
	"skills" : ["Programming","C++","JavaScript","HTML","Awesomeness"]
}

var work = {
	"employer": "Bharat Heavy Electrical Ltd",
	"title": "Summer Intern",
	"dates": "3rd Aug, 2015 - 31st Aug, 2015",
	"location": "Noida, India",
	"description": "Industrial training at BHEL-PEM, Noida in Control & Instrumentation department"
}

var project = {
	"title" : "Breakout Game",
	"dates" : "Feb 2016",
	"description" : "An online version of Breakout game was created using HTML5 and JavaScript",
	"images" : ["images/proj1.png", "images/proj2.png"]
}

var education = {
 	"schools": [{
 		"name": "University School of Information and Communication Technology, GGSIPU",
 		"location" : "Delhi, India",
 		"degree": "Bachelor of Technology",
 		"major": "ECE",
 		"dates": "2013 - Present",
 		"url" : "http://ipu.ac.in/"
 	}, {
 		"schoolName": "Ahlcon International School",
 		"location" : "Delhi, India",
 		"degree" : "12th",
 		"major" : "Science",
 		"dates": "2008 - 2012",
 		"url" : "http://www.ahlconinternational.com/"
 	}],
 	"onlineCourses": [{
 		"title" : "Introduction to Computer Science",
 		"school" : "Harvard University",
 		"dates" : "fall 2015",
 		"url" : "https://cs50.harvard.edu/"
 	},{
 		"title" : "Introduction to Linux",
 		"school" : "LinuxFoundationX",
 		"dates" : "Jan 2016",
 		"url" : "https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x.2+1T2015/info"
 	}]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedtwitter);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedBiopic);

if (bio.skills.length > 0) 
{
	$("#header").append(HTMLskillsStart);
	var i = 0;
	var formattedSkill;
	while( i < bio.skills.length )
	{
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		i++;
	}
}

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title );
var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);
$(".work-entry:last").append(formattedEmployerTitle);
$(".work-entry:last").append(formattedWorkDates);
$(".work-entry:last").append(formattedWorkLocation);
$(".work-entry:last").append(formattedWorkDescription);










/*
$("#main").append(work["jobPosition"]);*/



//var formattedSchooolName = HTMLschoolName.replace("%data%", education.college.collegeName);
//var formattedDegree = HTMLschoolDegree.replace("%data%", education.college.degree);
//var formattedschoolDates = HTMLschoolDates.replace("%data%", education.college.years);

//$("#main").append(formattedSchooolName);
//$("#main").append(formattedDegree);
//$("#main").append(formattedschoolDates);

