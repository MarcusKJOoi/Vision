const data = require("./data.json");
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://vision-215704.firebaseio.com"
});

data && Object.keys(data).forEach(key => {
	const nestedContent = data[key];

	if (typeof nestedContent === "object") {
		Object.keys(nestedContent).forEach(docTitle => {
			admin.firestore()
				.collection(key)
				.doc(docTitle)
				.set(nestedContent[docTitle])
				.then((res) => {
					console.log("Document successfully written!");
				})
				.catch((error) => {
					console.error("Error writing document: ", error);
				});
		});
	}
});