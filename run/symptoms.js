document.addEventListener('DOMContentLoaded', event => {
        
        const app = firebase.app();
        console.log(app)

        const db = firebase.firestore(); // initialize firestore

      });

// function to store data to database
function submitClick(name) {
	const db = firebase.firestore();
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
	var currentuser = user.uid; // not hipaa compliant sorry :-(
	var useremail = user.email;

	// push checked symptoms (positive symptoms) into an array
	var selected = new Array(); // number of positive symptoms
	var stest = document.getElementById("stest");
	var chks = stest.getElementsByTagName("INPUT");

	for (var i = 0; i < chks.length; i++) {
		if (chks[i].checked) {
			selected.push(chks[i].value);
		}
	}

	var testdate = new Date();

	// want this to go into database
	var userresults = {person: currentuser, email: useremail, date: testdate, positive_symptoms: selected};
	console.log(userresults);

	var newUserRef = db.collection("user").doc();
	newUserRef.set(userresults);

	window.alert("Thank you for submitting your results!"); // confirmation message

} else {
		console.log("No one is signed in.");
	}
});

return false;

}