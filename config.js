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
  maxMinutes: 1440,         // reject impossible screen-time entries (minutes in a day)

  // -------- Instructor page passcode (SHA-256 hash, NOT the passcode itself) -----
  // Protects instructor.html with a passcode prompt. Leave "" for no prompt.
  // To set/change it, tell Claude the passcode you want and it will fill in the hash,
  // or run:  echo -n "YOUR PASSCODE" | shasum -a 256
  instructorPasscodeHash: "79ef79679a5dae17267869adff5e8a0e4513c008633f8a1a4bffa2e0870d44ff"
};
