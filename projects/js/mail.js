import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxcUlYbYHhY1hYGereHHaJB7ZZnLhvUBU",
  authDomain: "contactform-portfolio-1d496.firebaseapp.com",
  databaseURL:
    "https://contactform-portfolio-1d496-default-rtdb.firebaseio.com",
  projectId: "contactform-portfolio-1d496",
  storageBucket: "contactform-portfolio-1d496.appspot.com",
  messagingSenderId: "763500512613",
  appId: "1:763500512613:web:98577908ce058b2ffa8d8c",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Push form data to Firebase Realtime Database
  const newContactRef = push(ref(database, "contactForm"));
  set(newContactRef, {
    name,
    email,
    subject,
    message,
  })
    .then(() => {
      // Reset form after successful submission
      contactForm.reset();
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    });
});
