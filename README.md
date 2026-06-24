# Screen Time Demonstration — QAMO 4651 (Lecture 3)

A live, in-class web app for the sampling distribution of the sample mean, the
Law of Large Numbers, and the Central Limit Theorem.

- **Students** scan a QR code → enter yesterday's daily-average screen time (minutes).
- **You** open the instructor dashboard on the projector → it builds the population,
  draws samples, builds the sampling distribution, runs the LLN and CLT, and
  exports everything to Markdown for Canvas.

There are two pages:

| Page | Who | What |
|---|---|---|
| `index.html` | Students (phones, via QR) | One simple form: section + minutes |
| `instructor.html` | You (projector) | The full demonstration + download button |

You will set this up **once** (about 15 minutes). After that, each class is:
open the dashboard → show the QR → run the steps → click **Download Markdown**.

---

## Step 1 — Create a free Firebase project (the shared database)

A plain web page can't share data between phones, so submissions go to a free
Google Firebase database.

1. Go to <https://console.firebase.google.com> and sign in with a Google account.
2. **Add project** → name it e.g. `qamo-screentime` → you can disable Google Analytics → **Create**.
3. In the left menu: **Build → Firestore Database → Create database**.
   - Start in **production mode** (we'll paste rules in Step 3) → pick the default location → **Enable**.
4. Register a web app to get your config:
   - Click the **gear ⚙ → Project settings**.
   - Scroll to **Your apps** → click the **web icon `</>`**.
   - Nickname it `screentime` → **Register app** (skip Hosting) →
     you'll see a `firebaseConfig = { … }` block. **Keep this tab open.**

> These config values are *meant* to be public in client apps — the security
> rules in Step 3 are what protect your data.

## Step 2 — Paste the config into `config.js`

Open `config.js` and replace the `PASTE_ME` values with the ones from the
`firebaseConfig` block:

```js
firebase: {
  apiKey: "AIza…",
  authDomain: "qamo-screentime.firebaseapp.com",
  projectId: "qamo-screentime",
  storageBucket: "qamo-screentime.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
}
```

(You can also change the demo defaults at the bottom of `config.js` — sample size,
number of samples, the LLN sample sizes — but the defaults match the lecture.)

## Step 3 — Paste the security rules

In the Firebase console: **Firestore Database → Rules** tab. Replace everything
with the contents of `firestore.rules` (in this folder) → **Publish**.

These rules let students submit and let the page read, but block editing/deleting,
and validate that section is `001`/`002` and minutes are `0–1440`.

## Step 4 — Publish to GitHub Pages

1. Create a new GitHub repository, e.g. `screentime` (public).
2. Upload **all** files from this folder to the repo
   (`index.html`, `instructor.html`, `config.js`, `styles.css`, plus the docs).
   - Web way: repo → **Add file → Upload files** → drag them in → **Commit**.
   - Git way: `git init && git add . && git commit -m "screen time demo" && git push`.
3. Repo **Settings → Pages**:
   - **Source:** Deploy from a branch → **Branch:** `main` → **/(root)** → **Save**.
4. Wait ~1 minute. Your pages are now live at:
   - Student page: `https://YOUR-USERNAME.github.io/screentime/`
   - Instructor:   `https://YOUR-USERNAME.github.io/screentime/instructor.html`

> **Custom domain (optional):** if you'd rather use your Namecheap domain, in
> **Settings → Pages → Custom domain** enter e.g. `screentime.yourdomain.com`,
> then in Namecheap add a **CNAME** record `screentime → YOUR-USERNAME.github.io`.
> GitHub will provision HTTPS automatically.

## Step 5 — Get the QR code for your slide

1. Open the **instructor** page → click **📱 Student link & QR**.
2. The QR encodes your student URL automatically. Click **Download QR (PNG)** —
   it saves a high-resolution `screen-time-QR.png`.
3. Drop that PNG onto slide 6 in place of your current QR. Done.

---

## Running it in class

1. Open `instructor.html` on the projector. Pick the **Section** (001 or 002).
   (Class day defaults to today, so each class starts fresh automatically.)
2. Show the QR (slide 6). Watch **N** climb as students submit — **Step 1** shows
   the population histogram with μ, σ², σ.
3. **Step 2** — click **Draw a sample** a few times; point out Ȳ₁, Ȳ₂, Ȳ₃ change.
4. **Step 3** — **Build sampling distribution**; compare the tiles:
   E[Ȳ] ≈ μ and Var[Ȳ] ≈ σ²/n.
5. **Step 4** — **Run LLN**; the histograms narrow around μ and SD[Ȳ] ≈ σ/√n.
6. **Step 5** — **Run CLT**; the standardized Ȳ matches N(0,1) despite the skew.
7. Click **⬇︎ Download Markdown** → upload the file to Canvas. It's labeled with
   the section and date, e.g. `QAMO4651-001_screen-time_2026-09-02.md`, and
   contains the raw submissions plus the numbers from every step.

### Rehearsing before class
On the instructor page, click **🧪 Load test data** to inject ~40 fake skewed
entries so you can practice the whole flow without students. Real submissions
replace the test data as soon as they arrive.

### Tips
- **Two sections (001/002):** students pick their section on the form; you pick
  the matching section on the dashboard. Each is its own population. Download once
  per section.
- **Reusing across days:** the dashboard defaults to *today*. To revisit an older
  class, change **Class day** or tick **all days**.
- **Privacy:** only a number (minutes) and a section are stored — no names, no logins.
