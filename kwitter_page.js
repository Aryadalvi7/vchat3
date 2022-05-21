var  firebaseConfig = {
      apiKey: "AIzaSyBE1ha-yEYTNwHUe7MC_TCqkFFIBvIFmWU",
      authDomain: "v-chat-f6ee2.firebaseapp.com",
      databaseURL: "https://v-chat-f6ee2-default-rtdb.firebaseio.com",
      projectId: "v-chat-f6ee2",
      storageBucket: "v-chat-f6ee2.appspot.com",
      messagingSenderId: "71035492323",
      appId: "1:71035492323:web:918c845ecaa6d9a88572d6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");

    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
document.getElementById("msg").value="";

    }
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
likes=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button;
document.getElementById(output).innerHTML=row;


//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
