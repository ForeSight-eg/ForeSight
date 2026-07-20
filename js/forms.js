// Sends form data to the Google Apps Script Web App, which appends a row
// to the appropriate tab in your Google Sheet. See GOOGLE_SHEETS_SETUP.md.
//
// `formType` tells the Apps Script which sheet tab to write to
// ("Demo Requests" or "Contact Messages").
async function submitToGoogleSheet(formType, data) {
  if (
    !GOOGLE_SHEETS_WEB_APP_URL ||
    GOOGLE_SHEETS_WEB_APP_URL.includes("PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE")
  ) {
    console.error(
      "Google Sheets Web App URL is not configured yet. Edit js/config.js — see GOOGLE_SHEETS_SETUP.md."
    );
    return { ok: false, reason: "not_configured" };
  }

  try {
    // mode: "no-cors" is required for a plain Apps Script deployment.
    // We can't read the response body in this mode, so we treat a
    // request that didn't throw as a success (this is the standard
    // pattern for posting to Apps Script from a static site).
    await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ formType, ...data }),
    });
    return { ok: true };
  } catch (err) {
    console.error("Failed to submit to Google Sheets:", err);
    return { ok: false, reason: "network_error" };
  }
}
