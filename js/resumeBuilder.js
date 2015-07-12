// create biography object
var bio = {
	"name": "Karina Zhou",
	"role": "New Graduate",
	"biopic": "images/me.jpg",
	"welcomeMSG": "Quick learner and proactive team player with very good communication, technical and analytical skills.",
	"contacts":{
		"mobile": "778-xxx-xxxx",
		"email": "lenayui@gmail.com",
		"github": "karinayuizjw",
		"location": "Burnaby, BC, Canada"
	},
	"skills":[
		"C/C++", "Computer vision libraries (OpenGL, OpenCV, ITK, VTK)", "JavaScript",
		"HTML5", "CSS", "Python", "Git", "Linux(Ubuntu)", "Matlab", "SQL",
		"Solidworks"]
}

var work = {
	"jobs": [
		{
			"employer": "Experimental Robotics Laboratory, Simon Fraser University",
			"title": "Research Assistant",
			"location": "Burnaby, BC, Canada",
			"dates": "Sep.2011 - Feb.2015",
			"description": "Expanded the methods used for marker-less surgical instrument tracking to enable more complex laparoscopic surgical scene processing.Pioneered 2D feature-based region matching (e.g. SIFT, SURF, ORB) in our lab for surgical and medical education.",
			"url":"http://www.sfu.ca/engineering.html"
		},
		{
			"employer": "School of Engineering Science, Simon Fraser University",
			"title": "Teaching Assistant",
			"location": "Burnaby, BC, Canada",
			"dates": "Sep.2012 - Apr.2014",
			"description": "Course: Mechanical Design, Computer Aided Design, Image Processing and Analysis. Helped students by holding office hours. Assisted grading homework and reports.",
			"url": "http://www.sfu.ca/engineering.html"
		},
		{
			"employer": "School of Biomedical Engineering, Shanghai Jiao Tong University",
			"title": "Research Assistant",
			"location": "Shanghai, China",
			"dates": "Sep.2008 - Mar.2011",
			"description": "Implemented breast boundary segmentation in MR image for breast volume measurement. Realized MR image registration using local anisotropic structure and joint salience map.",
			"url":"http://en.sjtu.edu.cn/"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Shanghai Jiao Tong University",
			"city": "Shanghai, China",
			"major": ["Biomedical Engineering"],
			"degree": "Bachelor of Biomedical Engineering",
			"years": "2004-2008",
			"courses": ["TBA_1", "TBA_2"]
		},
		{
			"name": "Shanghai Jiao Tong University",
			"city": "Shanghai, China",
			"major": ["Biomedical Engineering"],
			"degree": "Master of Biomedical Engineering",
			"years": "2008-2011",
			"courses": ["TBA_1", "TBA_2"]
		},
		{
			"name": "Simon Fraser University",
			"city": "Burnaby, BC, CA",
			"major": ["Engineering Science"],
			"degree": "Master of Applied Science",
			"years": "2011-2014",
			"courses": ["TBA_1", "TBA_2"]
		}
	],
	"online courses": [
		{
			"courseTitle": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1950678559/m-1936858588"
		}
	]
}

var project = {
	"projects": [
		{
			// project_1
			"title": "project_1",
			"dates": "project_1 time",
			"description": "project_1 description",
			"images": ["img1_url_1", "img1_url_2"],
			"demo video url": "youtube_url1",
			"images": [
				"images/TBAimg_p1_1.jpg",
				"images/TBAimg_p1_2.jpg",
				"images/TBAimg_p1_3.jpg"
			],
		},
		{
			// project_2
			"title": "project_2",
			"dates": "project_2 time",
			"description": "project_2 description",
			"images": ["img2_url_1", "img2_url_2"],
			"demo video url": "youtube_url2",
			"images": [
				"images/TBAimg_p2_1.jpg",
				"images/TBAimg_p2_2.jpg",
				"images/TBAimg_p2_2.jpg"
			],
		}
	]

}

// make h1 tag length bigger than 0
var realName = HTMLheaderName.replace("%data%", bio["name"]);
var realRole = HTMLheaderRole.replace("%data%", bio["role"]);

var realMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var realEmail = HTMLemail.replace("%data%", bio.contacts.email);
var realGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var realLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var realWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio["welcomeMSG"]);

$("#topContacts").append(realMobile);
$("#topContacts").append(realEmail);
$("#topContacts").append(realGitHub);
$("#topContacts").append(realLocation);

// put name and role ahead of contacts
$("#header").prepend(realRole);
$("#header").prepend(realName);

$("#header").append(realWelcomeMSG);

// add bio pic
var realBiopic = HTMLbioPic.replace("%data%", bio["biopic"]);
$("#header").append(realBiopic);

// check whether any skills in bio object
// if true, append() HTMLskillsStart to div header
// append() skills to id=skills element using
// HTMLskills to format each skill
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills){
		var realSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(realSkill);
	}
}

// format and append work section
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var realEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var realTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var realEmployerTitle = realEmployer + realTitle;
		$(".work-entry:last").append(realEmployerTitle);

		var realWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(realWorkDates);

		var realWorkLocate = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(realWorkLocate);

		var realWorkDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(realWorkDescrip);
	}
}

displayWork();




