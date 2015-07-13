// create biography object
var bio = {
	"name": "karina zhou",
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
			"title": "Research Assistant (Part-time)",
			"location": "Burnaby, BC, Canada",
			"dates": "Sep.2011 - Feb.2015",
			"description": "Expanded the methods used for marker-less surgical instrument tracking to enable more complex laparoscopic surgical scene processing.Pioneered 2D feature-based region matching (e.g. SIFT, SURF, ORB) in our lab for surgical and medical education.",
			"url":"http://www.sfu.ca/engineering.html"
		},
		{
			"employer": "School of Engineering Science, Simon Fraser University",
			"title": "Teaching Assistant (Part-time)",
			"location": "Burnaby, BC, Canada",
			"dates": "Sep.2012 - Apr.2014",
			"description": "Course: Mechanical Design, Computer Aided Design, Image Processing and Analysis. Helped students by holding office hours. Assisted grading homework and reports.",
			"url": "http://www.sfu.ca/engineering.html"
		},
		{
			"employer": "School of Biomedical Engineering, Shanghai Jiao Tong University",
			"title": "Research Assistant (Part-time)",
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
	"projs": [
		{
			// project_1
			"title": "Project 1: Visual Tracking in Endoscopic Environment using Gaussian Type and Non-Gaussian Type Approaches",
			"dates": "Sep.2011 - Apr.2014",
			"description": "This objective of this project is to effectively track the surgical instrument in the view of a mono endoscope. Both Gaussian and Non-Gaussian type tracking methods are experimented. These methods include the standard Kalman FIlter (KF), extended Kalman Filter (EKF), adaptive Gaussian Mixture Model (AGMM), Particle Filter (PF), and a hybrid approach (PF+AGMM). The tracking results are evaluated in both in-vitro and in-vivo environments.",
			"demo video url": "youtube_url1",
			"images": [
				"images/PFtracking001.jpg",
				"images/PFtracking002.jpg",
				"images/PFtracking003.jpg"
			],
		},
		{
			// project_2
			"title": "Project 2: Interactive Marker-based Mobile Augmented Reality Study",
			"dates": "Feb.2013 - Aug.2013",
			"description": "A basic marker-based AR system is built on BlackBerry Playbook in QNX Momentics IDE. Once the camera catches the marker, virtual objects will show in the camera scene and change its orientation when camera view changes. Edge and corner detectors are applied for marker extraction. OpenGL ES is responsible for virtual object rendering.",
			"demo video url": "youtube_url2",
			"images": [
				"images/markerARflowchart.png",
				"images/markerARdemo1.png",
				"images/markerARdemo2.png"
			],
		},
		{
			// project_3
			"title": "Project 3: 2D Feature-based Region Matching in Surgical and Medical Education",
			"dates": "Jan.2014 - Jul.2014",
			"description": "In this project, the same region in various images are matched by applying feature extraction and description. A user-defined region mask is introduced to speed the matching procedure. Three feature-based region matching methods based on SIFT, SURF and ORB descriptors are proposed. All the methods are evaluated in emulated and surgical scenes involving different viewing conditions.",
			"demo video url": "youtube_url2",
			"images": [
				"images/MaskRegionScr.png",
				"images/MaskRegionDst.png",
				"images/MaskRegionMatching.png"
			],
		},
		{
			// project_4
			"title": "Project 4: Preliminary Studies of Region-based AR Implementation",
			"dates": "Apr.2014 - Feb.2015",
			"description": "A basic region-based AR system is set up on a desk-top platform, offline. This system consists of user-defined region matching and 3D virtual object rendering. The matching model is based on the feature-based region methods (SIFT, SURF and ORB). OpenGL is responsible for the 3D virtual object rendering. When the view changes, the AR effect can be updated accordingly.",
			"demo video url": "youtube_url2",
			"images": [
				"images/ARdemo1.png",
				"images/ARdemo2.png",
				"images/ARdemo3.png",
				"images/ARdemo4.png"
			],
		},

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

// name game
//$("#main").append(internationalizeButton);

function inName(){
  var nameStr = bio.name;
  var space = ' ';
  var arrayStr = nameStr.split(space);
  arrayStr[0] = arrayStr[0].slice(0, 1).toUpperCase() +
  	arrayStr[0].slice(1).toLowerCase();
  arrayStr[1] = arrayStr[1].toUpperCase();

  var newnameStr = arrayStr[0] + ' ' + arrayStr[1];

  return newnameStr;
}

// format and append projects section
project.display = function(){
	for (proj in project.projs){
		$("#projects").append(HTMLprojectStart);
		var singleProj = project.projs[proj];
		var realProjTitle = HTMLprojectTitle.replace("%data%", singleProj.title);
		$(".project-entry:last").append(realProjTitle);

		var realProjDates = HTMLprojectDates.replace("%data%", singleProj.dates);
		$(".project-entry:last").append(realProjDates);

		var realProjDescrip = HTMLprojectDescription.replace("%data%", singleProj.description);
		$(".project-entry:last").append(realProjDescrip);

		if (singleProj.images.length > 0){
			for (image in singleProj.images){
				// show images for each project
				var realImg = HTMLprojectImage.replace("%data%", singleProj.images[image]);
				$(".project-entry:last").append(realImg);
			}
		}

	}
}

if (project.projs.length > 0){
	project.display();
}

// format and append education section






// add googleMap
// $("#mapDiv").append(googleMap);

