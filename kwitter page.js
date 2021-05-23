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

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("room_name");
    window.location = "login.html"
}

username = localStorage.getItem("name");
    room_name = localStorage.getItem("room_name");

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name : username,
       message : message,
       like : 0     
      });
      document.getElementById("msg").innerHTML = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
var name_tag = "<h4> " + names + "<img class ='user_tick' src = 'tick.png' ></h4>" ;
var message_tag = "<h4 class = 'message_h4' >" + message + "</h4>";
var like_button = "<button class = 'btn btn-info' id = " + firebase_message_id + "value = " + like + "onclick = 'update_like(this.id)'> "  ;
var span_tag = "<span class = 'glyphicon glyphicon-thumbs-up ' > Like : " + like + "</span></button><hr>"
var row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function update_like(message_id)
 {
       console.log("Clicked on like button " + message_id);
       button_id = message_id;
       likes = document.getElementById(button_id).value;
       update_likes = Number(likes) + 1;
       console.log(update_likes);
       firebase.database().ref(room_name).child(message_id).update ({
             like : update_likes
       }
       );
 }

 function logout(){
       localStorage.removeItem("username");
       localStorage.removeItem("room_name");
       window.location = "index.html"
 }

 function logout(){
       localStorage.removeItem("name");
       localStorage.removeItem("room_name");
       window.location = "login.html"
 }