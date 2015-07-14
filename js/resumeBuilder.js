// create biography object
var bio = {
	'name': 'karina zhou',
	'role': 'New Graduate',
	'contacts':{
		'mobile': '778-xxx-xxxx',
		'email': 'lenayui@gmail.com',
		'github': 'karinayuizjw',
		'twitter': 'karinaZHOU',
		'location': 'Burnaby, BC, Canada'
	},
	'welcomeMessage': 'Quick learner and proactive team player with very good communication, technical and analytical skills.',
	'skills':[
		'C/C++', 'Computer vision libraries (OpenGL, OpenCV, ITK, VTK)', 'JavaScript',
		'HTML5', 'CSS', 'Python', 'Git', 'Linux(Ubuntu)', 'Matlab', 'SQL',
		'Solidworks'],
	'biopic': 'images/me.jpg',
}

var work = {
	'jobs': [
		{
			'employer': 'Experimental Robotics Laboratory, Simon Fraser University',
			'title': 'Research Assistant (Part-time)',
			'location': 'Burnaby, BC, Canada',
			'dates': 'Sep.2011 - Feb.2015',
			'description': 'Expanded the methods used for marker-less surgical instrument tracking to enable more complex laparoscopic surgical scene processing.Pioneered 2D feature-based region matching (e.g. SIFT, SURF, ORB) in our lab for surgical and medical education.'
		},
		{
			'employer': 'School of Engineering Science, Simon Fraser University',
			'title': 'Teaching Assistant (Part-time)',
			'location': 'Burnaby, BC, Canada',
			'dates': 'Sep.2012 - Apr.2014',
			'description': 'Course: Mechanical Design, Computer Aided Design, Image Processing and Analysis. Helped students by holding office hours. Assisted grading homework and reports.'
		},
		{
			'employer': 'School of Biomedical Engineering, Shanghai Jiao Tong University',
			'title': 'Research Assistant (Part-time)',
			'location': 'Shanghai, China',
			'dates': 'Sep.2008 - Mar.2011',
			'description': 'Implemented breast boundary segmentation in MR image for breast volume measurement. Realized MR image registration using local anisotropic structure and joint salience map.'
		}
	]
}

var education = {
	'schools': [
		{
			'name': 'Shanghai Jiao Tong University',
			'location': 'Shanghai, China',
			'degree': 'Bachelor of Biomedical Engineering',
			'major': ['Biomedical Engineering'],
			'dates': 2008,
			'url': 'http://en.sjtu.edu.cn/'
		},
		{
			'name': 'Shanghai Jiao Tong University',
			'location': 'Shanghai, China',
			'degree': 'Master of Biomedical Engineering',
			'major': ['Biomedical Engineering'],
			'dates': 2011,
			'url': 'http://en.sjtu.edu.cn/'
		},
		{
			'name': 'Simon Fraser University',
			'location': 'Burnaby, BC, Canada',
			'degree': 'Master of Applied Science',
			'major': ['Engineering Science'],
			'dates': 2014,
			'url': 'http://www.sfu.ca/engineering.html'
		}
	],
	'onlineCourses': [
		{
			'title': 'Intro to HTML and CSS',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/nanodegree'
		},
		{
			'title': 'JavaScript Basics',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com/nanodegree'
		}
	]
}

var projects = {
	'projects': [
		{
			// project_1
			'title': 'Project 1: Visual Tracking in Endoscopic Environment using Gaussian Type and Non-Gaussian Type Approaches',
			'dates': 'Sep.2011 - Apr.2014',
			'description': 'This objective of this project is to effectively track the surgical instrument in the view of a mono endoscope. Both Gaussian and Non-Gaussian type tracking methods are experimented. These methods include the standard Kalman FIlter (KF), extended Kalman Filter (EKF), adaptive Gaussian Mixture Model (AGMM), Particle Filter (PF), and a hybrid approach (PF+AGMM). The tracking results are evaluated in both in-vitro and in-vivo environments.',
			'images': [
				'images/PFtracking001.jpg',
				'images/PFtracking002.jpg'
			]
		},
		{
			// project_2
			'title': 'Project 2: Interactive Marker-based Mobile Augmented Reality Study',
			'dates': 'Feb.2013 - Aug.2013',
			'description': 'A basic marker-based AR system is built on BlackBerry Playbook in QNX Momentics IDE. Once the camera catches the marker, virtual objects will show in the camera scene and change its orientation when camera view changes. Edge and corner detectors are applied for marker extraction. OpenGL ES is responsible for virtual object rendering.',
			'images': [
				'images/markerARdemo1.png',
				'images/markerARdemo2.png'
			]
		},
		{
			// project_4
			'title': 'Project 3: Preliminary Studies of Region-based AR Implementation',
			'dates': 'Jan.2014 - Feb.2015',
			'description': 'A basic region-based AR system is set up on a desk-top platform, offline. This system consists of user-defined region matching and 3D virtual object rendering. The matching model is based on the feature-based region methods (SIFT, SURF and ORB). OpenGL is responsible for the 3D virtual object rendering. When the view changes, the AR effect can be updated accordingly.',
			'images': [
				'images/ARdemo1.png',
				'images/ARdemo2.png',
				'images/ARdemo3.png',
				'images/ARdemo4.png'
			]
		},

	]

}

bio.display = function(){
	var realName = HTMLheaderName.replace('%data%', bio['name']);
	var realRole = HTMLheaderRole.replace('%data%', bio['role']);

	var realMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var realEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var realGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var realLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	var realWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio['welcomeMessage']);

	$('#topContacts').append(realMobile);
	$('#topContacts').append(realEmail);
	$('#topContacts').append(realGitHub);
	$('#topContacts').append(realLocation);

	// put name and role ahead of contacts
	$('#header').prepend(realRole);
	$('#header').prepend(realName);

	$('#header').append(realWelcomeMessage);

	// add bio pic
	var realBiopic = HTMLbioPic.replace('%data%', bio['biopic']);
	$('#header').append(realBiopic);

	// check whether any skills in bio object
	// if true, append() HTMLskillsStart to div header
	// append() skills to id=skills element using
	// HTMLskills to format each skill
	if (bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);

		var len = bio.skills.length;
		for (var i = 0; i<len; i++){
			var realSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(realSkill);
		}
	}

	// add contacts in footer section
	$('#footerContacts').append(realMobile);
	$('#footerContacts').append(realEmail);
	$('#footerContacts').append(realGitHub);
	$('#footerContacts').append(realLocation);

}

// format and append work section
work.display = function(){
	var len = work.jobs.length;
	for (var i = 0; i<len; i++){
		var job = work.jobs[i];
		$('#workExperience').append(HTMLworkStart);
		var realEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var realTitle = HTMLworkTitle.replace('%data%', job.title);
		var realEmployerTitle = realEmployer + realTitle;
		$('.work-entry:last').append(realEmployerTitle);

		var realWorkDates = HTMLworkDates.replace('%data%', job.dates);
		$('.work-entry:last').append(realWorkDates);

		var realWorkLocate = HTMLworkLocation.replace('%data%', job.location);
		$('.work-entry:last').append(realWorkLocate);

		var realWorkDescrip = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(realWorkDescrip);
	}
}

// format and append projects section
projects.display = function(){
	var len = projects.projects.length;
	for (var i = 0; i<len; i++){
		var project = projects.projects[i];
		$('#projects').append(HTMLprojectStart);
		var realProjTitle = HTMLprojectTitle.replace('%data%', project.title);
		$('.project-entry:last').append(realProjTitle);

		var realProjDates = HTMLprojectDates.replace('%data%', project.dates);
		$('.project-entry:last').append(realProjDates);

		var realProjDescrip = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(realProjDescrip);

		if (project.images.length > 0){
			for (image in project.images){
				// show images for each project
				var realImg = HTMLprojectImage.replace('%data%', project.images[image]);
				$('.project-entry:last').append(realImg);
			}
		}

	}
}

// format and append education section
education.display = function(){
	if (education.schools.length > 0){
		var lenSchool = education.schools.length;
		for (var i = 0; i < lenSchool; i++){
			$('#education').append(HTMLschoolStart);
			var school = education.schools[i];
			var realSchoolTitle = HTMLschoolName.replace('%data%', school.name);
			var realSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
			var realTitleDegree = realSchoolTitle + realSchoolDegree;
			realTitleDegree = realTitleDegree.replace('#', school.url);
			$('.education-entry:last').append(realTitleDegree);

			var realSchoolLoc = HTMLschoolLocation.replace('%data%', school.location);
			$('.education-entry:last').append(realSchoolLoc);

			var realSchoolData = HTMLschoolDates.replace('%data%', school.dates);
			$('.education-entry:last').append(realSchoolData);

			var realSchoolMajor = HTMLschoolMajor.replace('%data%', school.major);
			$('.education-entry:last').append(realSchoolMajor);
		}
	}

	if (education.onlineCourses.length > 0){
		var lenCourse = education.onlineCourses.length;
		$('#education').append(HTMLonlineClasses);
		for (var j = 0; j<lenCourse; j++){
			$('#education').append(HTMLschoolStart);
			var olCourse = education.onlineCourses[j];
			var realOLcourseTitle = HTMLonlineTitle.replace('%data%', olCourse.title);
			var realOLcourseSchool = HTMLonlineSchool.replace('%data%', olCourse.school);
			var realOLTItleSchool = realOLcourseTitle + realOLcourseSchool;
			$('.education-entry:last').append(realOLTItleSchool);

			var realOLcourseDates = HTMLonlineDates.replace('%data%', olCourse.date);
			$('.education-entry:last').append(realOLcourseDates);

			var realOLcourseURL = HTMLonlineURL.replace('%data%', olCourse.url);
			realOLcourseURL = realOLcourseURL.replace('#', olCourse.url);
			$('.education-entry:last').append(realOLcourseURL);
		}
	}

}

// append information to resume webpage
bio.display();

if (work.jobs.length > 0){
	work.display();
}

if (projects.projects.length > 0){
	projects.display();
}

education.display();

// name game
//$('#main').append(internationalizeButton);

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


// add googleMap
$('#mapDiv').append(googleMap);

