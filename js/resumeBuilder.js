
// create biography object
var bio = {
	"name": "Karina Zhou",
	"role": "New Graduate",
	"biopic": "images/me.jpg",
	"welcomeMSG": "welcomeMSG TBA",
	"contacts":{
		"mobile": "778-xxx-xxxx",
		"email": "lenayui@gmail.com",
		"github": "karinayuizjw",
		"location": "Burnaby, BC, Canada"
	},
	"skills":[
		"skill_1", "skill_2", "skill_3",
		"skill_4", "skill_5", "skill_6"]
}

var work = {
	"jobs": [
		{
			"employer": "Simon Fraser University",
			"title": "Research Assistant",
			"location": "Burnaby, BC, CA",
			"dates": "2014-2015",
			"description": "TBA"
		},
		{
			"employer": "Simon Fraser University",
			"title": "Teaching Assistant",
			"location": "Burnaby, BC, CA",
			"dates": "2012, 2013, 2014",
			"description": "TBA"

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
var formatedName = HTMLheaderName.replace("%data%", bio["name"]);
var formatedRole = HTMLheaderRole.replace("%data%", bio["role"]);

var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formatedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio["welcomeMSG"]);
$("#header").append(formatedName);
$("#header").append(formatedRole);

$("#header").append(formatedMobile);
$("#header").append(formatedEmail);
$("#header").append(formatedGitHub);
$("#header").append(formatedLocation);

$("#header").append(formatedWelcomeMSG);

// add bio pic
var formatedBiopic = HTMLbioPic.replace("%data%", bio["biopic"]);
$("#header").append(formatedBiopic);

// check whether any skills in bio object
// if true, append() HTMLskillsStart to div header
// append() skills to id=skills element using
// HTMLskills to format each skill
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	//var formatedSkill = HTMLskills.replace("%data%", bio.skills);
	//$("#skills").append(formatedSkill);
	var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formatedSkill);
	formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formatedSkill);
	formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formatedSkill);
	formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formatedSkill);
	formatedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formatedSkill);
	formatedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formatedSkill);
}