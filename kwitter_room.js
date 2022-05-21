var firebaseConfig = {
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
document.getElementById("user_name").innerHTML="welcome "+ user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("rooms names- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}