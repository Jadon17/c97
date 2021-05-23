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

  username = localStorage.getItem("name");
    document.getElementById("welcome").innerHTML = "Welcome " + username + " !";
    
    function addroom(){
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update(
                {
                      purpose : "adding a room" 
                }
          );
      localStorage.setItem( "room_name" ,Room_name);
      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log(Room_names);
     row = "<div class = 'room_name btn btn-info' id = "+ Room_names + " onclick = 'Redirect_to_Room_Name(this.id)' style = 'font-size : 30px;' >#"+ Room_names +"</div> <img id = ' Newmessage.png ' > <hr>"
     document.getElementById("output").innerHTML +=row;
     //End code
     });});}
getData();
function Redirect_to_Room_Name(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
     }

function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "login.html"
}