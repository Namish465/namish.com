const firebaseConfig = {
      apiKey: "AIzaSyDLXMziHuhvGR6sVoTddjM0WZDQ7V2LwXA",
      authDomain: "kwitterapp-8e715.firebaseapp.com",
      databaseURL: "https://kwitterapp-8e715-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-8e715",
      storageBucket: "kwitterapp-8e715.appspot.com",
      messagingSenderId: "863611227942",
      appId: "1:863611227942:web:3253d28657046d552b3be7"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      });});}
getData();
