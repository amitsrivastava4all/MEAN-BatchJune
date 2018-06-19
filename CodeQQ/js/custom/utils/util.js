


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_-PIEKR3upRcdKjJSFVv7H0jbzIFoG7o",
    authDomain: "testengineapp18.firebaseapp.com",
    databaseURL: "https://testengineapp18.firebaseio.com",
    projectId: "testengineapp18",
    storageBucket: "testengineapp18.appspot.com",
    messagingSenderId: "237121884492"
  };
  firebase.initializeApp(config);
  console.log("Fire Base is Loaded ",firebase);
  //console.log("Fire Base DB ",firebase.database());
  var firebaseDB = firebase.database();
  var ref = firebaseDB.ref('testengineapp18');
  var questions = ref.child("questions");
  var json = {};
questions.set({})

