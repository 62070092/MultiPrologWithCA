//Unique Firebase Obj
var firebaseConfig = {
    apiKey: "AIzaSyAJ5JaS14iiUdZvad1lYI-KmC87xx_3V20",
    authDomain: "pay-to-win-education.firebaseapp.com",
    projectId: "pay-to-win-education",
    storageBucket: "pay-to-win-education.appspot.com",
    messagingSenderId: "296020543103",
    appId: "1:296020543103:web:6ad0dcd6ab0234a0e5e14a"
};


//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//variable to access database collection
const db = firestore.collection("comment")

//get submit form
let submitButton = document.getElementById('submit')
//create evvent listener
submitButton.addEventListener("click", (e) => {
    //prevent default form submission behavior
    e.preventDefault()

    //get form values
    let comment = document.getElementById('comment').value

    //save form data to firebase
    db.doc().set({
        comment: comment
        
    }).then(()=>{
        console.log("Data saved")
        
    }).catch((eror) => {
        console.log(error)
    })
    clearFields()
})

function clearFields() {
    document.getElementById('comment').value = "";
    
}


//---get dat---//
function SelectAllData(){
    firebase.database().ref('comment').once('value',
    function(AllRecords){
        AllRecords.foreach(
            function(CurrentRecord){
                var comment = CurrentRecord.val()
                AddItemsToTable(comment);
            }
        );
    });
}
//
function AddItemsToTable(){
    var tbody = document.getElementById('tbody');
    var div1 = document.createElement('p');

    trow.appendchild()

}