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
		"location" : "E-170, St -7, Pandav Nagar, Delhi, India"
	},
	"skills" : ["Programming","C++","JavaScript","HTML","Awesomeness"]
}

var work = {
	"employer": "Bharat Heavy Electrical Ltd",
	"title": "Summer Intern",
	"dates": "3rd Aug, 2015 - 31st Aug, 2015",
	"location": "Film City, Sector 16A, Noida, Uttar Pradesh, India",
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
 		"location" : "Sector 16C, Dwarka, New Delhi, Delhi 110078, India",
 		"degree": "Bachelor of Technology",
 		"major": "ECE",
 		"dates": "2013 - Present",
 		"url" : "http://ipu.ac.in/"
 	}, {
 		"name": "Ahlcon International School",
 		"location" : "Mayur vihar phase - 1, Delhi, India",
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
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLinkedIn = HTMLblog.replace("%data%", bio.contacts.linkedIn);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedIn);
//$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedLocation);
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
		$("#skills-h3").append(formattedSkill);
		i++;
	}
}

function displayWork()
{
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
}

displayWork();

project.display = function()
{
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	var projectImageUrl = HTMLprojectImage.replace("%data%", project.images[0]);
	$(".project-entry:last").append(projectImageUrl);
	projectImageUrl = HTMLprojectImage.replace("%data%", project.images[1]);
	$(".project-entry:last").append(projectImageUrl);	
}

project.display();

education.display = function () {
    'use strict';
    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
        $("#education").append("<div id=\"education-foldable-content\"></div>");
        for (edu in education.schools) {
            if (education.schools.hasOwnProperty(edu)) {
                $("#education-foldable-content").append(HTMLschoolStart);
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[edu].name);
                $(".education-entry:last").append(formattedHtml);
               	$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].major));
            }
        }
        // start the HTML
        $(".education-entry:last").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school));
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
            }
        }
    }
};

education.display();

$("#mapDiv").append(googleMap);
//var formattedSchooolName = HTMLschoolName.replace("%data%", education.college.collegeName);
//var formattedDegree = HTMLschoolDegree.replace("%data%", education.college.degree);
//var formattedschoolDates = HTMLschoolDates.replace("%data%", education.college.years);

//$("#main").append(formattedSchooolName);
//$("#main").append(formattedDegree);
//$("#main").append(formattedschoolDates);

