  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzBZ70r-dpyPuJBo8CcKKKIQfB2tZY8uc",
    authDomain: "kwitter-2c161.firebaseapp.com",
    databaseURL: "https://kwitter-2c161-default-rtdb.firebaseio.com",
    projectId: "kwitter-2c161",
    storageBucket: "kwitter-2c161.appspot.com",
    messagingSenderId: "642924085360",
    appId: "1:642924085360:web:c7c42111a5cd5d9f3d74b5"
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

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:username,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
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
         name_with_tag = "<h4> "+ names +"<img class='user_tick' src='tick.png' style = 'width: 60px; height:60px;' ></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-info' id="+ firebase_message_id +" value =" + like + " onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}
