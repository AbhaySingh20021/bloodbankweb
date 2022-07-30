import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  update,
  set
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhIf3H_8lSICC5BuyLwu19QIc4ukcw7LI",
  authDomain: "blood-bank-aaf5d.firebaseapp.com",
  databaseURL: "https://blood-bank-aaf5d-default-rtdb.firebaseio.com",
  projectId: "blood-bank-aaf5d",
  storageBucket: "blood-bank-aaf5d.appspot.com",
  messagingSenderId: "278601540741",
  appId: "1:278601540741:web:3c77f1d4cb49606f4bf5ec",
  measurementId: "G-SKEZN876QV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);
const dref = ref(database);

// const bankname = document.getElementsByClassName("name2");

function savedata2(data) {
  // Object.values(form).reduce((obj, field) => {
  //   obj[field.name] = field.value;
  //   console.log(obj);
  //   return obj;
  // }, {});

  var uid;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      console.log("it works");

      get(child(dref, "appointments/"))
        .then((snapshot) => {
          console.log("success3");

          if (snapshot.exists()) {
            console.log("success2");
            var date = snapshot.val();
            if (date) {
              var array1 = Object.values(date);
              let lastValue = array1[Object.keys(array1).pop()];

              const dbRef = ref(
                database,
                "/appointments/" + lastValue.newPostKey
              );
              update(dbRef, { BankName: data })
                .then(() => {
                  console.log("Data updated");
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });
}

$("form").click(function (event) {
  $(this).data("clicked", $(event.target));
  savedata2(event.target.id);
});

// form.addEventListener("submit", (e) => {
//   //
// });
