// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9b9ve489SdcypmYA6s869PGR3rTRR6qU",
    authDomain: "let-s-chat-4eb66.firebaseapp.com",
    databaseURL: "https://let-s-chat-4eb66-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4eb66",
    storageBucket: "let-s-chat-4eb66.appspot.com",
    messagingSenderId: "487020147191",
    appId: "1:487020147191:web:0488961bceda8b0ce53ef2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

function adduser(){
    username = document.getElementById("username").value ;
    localStorage.setItem("name", username);
    window.location = "kwitter_room.html"
  }  
