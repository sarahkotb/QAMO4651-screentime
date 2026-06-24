/* =============================================================
   QAMO 4651 — Screen Time Demonstration
   THE ONLY FILE YOU NEED TO EDIT.

   1) Paste your Firebase project config below (see README.md, Step 2).
   2) (Optional) change the demo defaults if you like.
   ============================================================= */

window.APP_CONFIG = {

  // -------- Firebase (paste from the Firebase console) ----------
  firebase: {
    apiKey: "AIzaSyD9hu9H7M1m7vAOaL8pqtHG8K7JHlbZeHc",
    authDomain: "qamo4651-lecture3.firebaseapp.com",
    projectId: "qamo4651-lecture3",
    storageBucket: "qamo4651-lecture3.firebasestorage.app",
    messagingSenderId: "97391190278",
    appId: "1:97391190278:web:d68eaa22b62e9097743e87"
  },

  // -------- Demo defaults (safe to leave as-is) -----------------
  defaultSampleSize: 10,    // n for "draw a sample" + sampling distribution
  defaultRepetitions: 1000, // how many samples to build the sampling distribution
  lnnSampleSizes: [5, 10, 15, 20, 25], // sample sizes for the Law of Large Numbers panel
  maxMinutes: 1440          // reject impossible screen-time entries (minutes in a day)
};
