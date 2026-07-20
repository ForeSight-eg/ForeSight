# Connect "Book a Demo" (and Contact) to Google Sheets

Your site is a **static site** — plain HTML/CSS/JS with no server. To save form
submissions into a Google Sheet, you need a small **Google Apps Script Web App**
that sits between your form and the sheet. It's free, takes about 5 minutes,
and needs no coding beyond copy-pasting the script below.

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank sheet.
2. Name it something like **ForeSight Submissions**.
3. You don't need to add any headers or tabs yourself — the script creates two
   tabs automatically the first time each form is submitted:
   - `Demo Requests`
   - `Contact Messages`

## Step 2 — Add the Apps Script

1. In your new sheet, click **Extensions → Apps Script**.
2. Delete anything in the editor and paste this in:

```javascript
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  var formType = data.formType || "Demo Requests";

  var sheet = ss.getSheetByName(formType);
  if (!sheet) {
    sheet = ss.insertSheet(formType);
  }

  if (formType === "Demo Requests") {
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Name", "Email", "Company", "Role", "Phone",
        "Company Size", "Interest", "Message", "Preferred Time",
      ]);
    }
    sheet.appendRow([
      new Date(), data.name, data.email, data.company, data.role,
      data.phone, data.companySize, data.interest, data.message, data.preferredTime,
    ]);
  } else {
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Company", "Interest", "Message"]);
    }
    sheet.appendRow([
      new Date(), data.name, data.email, data.company, data.interest, data.message,
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **save icon** (or Ctrl/Cmd+S). Name the project e.g. "ForeSight Forms".

## Step 3 — Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description**: anything, e.g. "Form handler"
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** ← important, otherwise the form can't reach it
4. Click **Deploy**.
5. Google will ask you to authorize the script — click **Authorize access**,
   pick your Google account, click **Advanced → Go to ForeSight Forms (unsafe)**,
   then **Allow**. (This warning is normal for scripts you write yourself.)
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4 — Paste the URL into the site

1. Open `js/config.js` in the site files.
2. Replace the placeholder with your URL:

```javascript
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycb.../exec";
```

3. Save, commit, and push. Both `book-demo.html` and `contact.html` already
   point to this same file/URL — no other changes needed.

## Step 5 — Test it

1. Open the live site, fill out the "Book a demo" form, and submit.
2. Check your Google Sheet — a `Demo Requests` tab should appear with your
   test row within a few seconds.
3. Repeat on the Contact page to confirm the `Contact Messages` tab too.

## Notes & troubleshooting

- **If nothing shows up in the sheet:** double-check "Who has access" was set
  to **Anyone** during deployment (not "Anyone with a Google account" or
  "Only myself").
- **If you edit the script later:** you must create a **new deployment**
  version (Deploy → Manage deployments → Edit → New version) for changes to
  take effect on the live URL.
- **Privacy:** anyone who has the Web App URL can technically POST rows into
  your sheet. This is fine for a public demo-request form, but don't publish
  the URL anywhere except inside `js/config.js`.
- **Want a notification email on each submission?** Add
  `MailApp.sendEmail("you@yourcompany.com", "New demo request", JSON.stringify(data));`
  right before the `return` line in the script.
