
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAqTygcTj04JrEqCXgwQKfZluG9mhlxiA",
    authDomain: "onlineshop18-58e3d.firebaseapp.com",
    databaseURL: "https://onlineshop18-58e3d.firebaseio.com",
    projectId: "onlineshop18-58e3d",
    storageBucket: "",
    messagingSenderId: "344263977773"
  };
  firebase.initializeApp(config);
  console.log("Fire Base Loaded...",firebase);

  function* autGen(){
    var counter = 1;
      while(true){
      yield counter;
      counter++;    
  }
      
  }