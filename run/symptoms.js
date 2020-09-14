document.addEventListener('DOMContentLoaded', event => {
        
        const app = firebase.app();
        console.log(app)

        const db = firebase.firestore(); // initialize firestore


      });

// function to store data to database
function submitClick() {
	const db = firebase.firestore();
	var currentuser = firebase.auth().currentUser; // not hipaa compliant sorry :-(

	var submit = document.getElementById("submit");
	var symptom1 = document.getElementById("symptom1").checked;
	var symptom2 = document.getElementById("symptom2").checked;
	var symptom3 = document.getElementById("symptom3").checked;
	var symptom4 = document.getElementById("symptom4").checked;
	var symptom5 = document.getElementById("symptom5").checked;
	var symptom6 = document.getElementById("symptom6").checked;
	var symptom7 = document.getElementById("symptom7").checked;
	var symptom8 = document.getElementById("symptom8").checked;
	
	window.alert("Thank you for submitting your results!"); // confirmation message

	// Add a new document with a generated id.
	const res = db.collection('user').add({
  	date: new Date(),
  	person: currentuser,
  	fever: symptom1,
	cough: symptom2,
	breathing: symptom3,
	throat: symptom4,
	loss: symptom5,
	vomiting: symptom6,
	fatigue: symptom7,
	muscle: symptom8
	})
	.then(function() {
		console.log('Added document with ID: ', res.id);
	})
	.catch(function(error) {
		console.error("Error: ", error);
	});
	
	// disable submit button for one day!!

		/*
		--- Database ---
		User: **randomly generated**
		Time: use function
		Fever (symptom1): either true or false
		Cough (symptom2): either true or false
		Difficulty breathing (symptom3): either true or false
		Sore throat (symptom4): either true or false
		Loss of taste/smell (symptom5): either true or false
		Vomiting (symptom6): either true or false
		Fatigue (symptom7): either true or false
		Muscle aches (symptom8): either true or false
		----------------
		*/
	//}
}