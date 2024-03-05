//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyD-wgqDhp83PRM7LtwnN_JvnIkDH4zFEYs",
    authDomain: "comp-1800---202410.firebaseapp.com",
    projectId: "comp-1800---202410",
    storageBucket: "comp-1800---202410.appspot.com",
    messagingSenderId: "644170316503",
    appId: "1:644170316503:web:c3ee0816a5f7f449b20e92"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
