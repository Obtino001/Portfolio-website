/**
 * GOOGLE APPS SCRIPT FOR YASIR MALIK PORTFOLIO
 * Connected Google Sheet: https://docs.google.com/spreadsheets/d/1TdbmOVWeqqwkur_E60k1l7klb-vLhqP3IDEgB8Wr00c/edit
 *
 * ============================================================================
 * 60-SECOND DEPLOYMENT INSTRUCTIONS:
 * ============================================================================
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1TdbmOVWeqqwkur_E60k1l7klb-vLhqP3IDEgB8Wr00c/edit
 * 2. In the top menu, click "Extensions" > "Apps Script".
 * 3. Delete any code in Code.gs and paste ALL the code below.
 * 4. Click "Deploy" (top right blue button) > "New deployment".
 * 5. Click the Gear icon next to "Select type" and select "Web app".
 * 6. Set Description: "Portfolio Contact Webhook"
 * 7. Set "Execute as": "Me (your email)"
 * 8. Set "Who has access": "Anyone"  <-- CRITICAL! Must be "Anyone" so website can submit!
 * 9. Click "Deploy" and Authorize access with your Google account.
 * 10. Copy the "Web app URL" (it ends in /exec).
 * 11. Paste that URL into assets/js/components/index-components.js (GOOGLE_SCRIPT_URL).
 * ============================================================================
 */

var SHEET_URL = 'https://docs.google.com/spreadsheets/d/1CEdo2ndiQU8l8ifqwagYznOWGCWYdkKcRuTLKi84FN4/edit?gid=0#gid=0';
var NOTIFICATION_EMAILS = ['devyasir001@gmail.com'];

function doPost(e) {
  try {
    var sheetApp = SpreadsheetApp.openByUrl(SHEET_URL);
    var sheet = sheetApp.getSheetByName("Inquiries");
    if (!sheet) {
      sheet = sheetApp.getSheetByName("Contact Submissions") || sheetApp.insertSheet("Inquiries");
    }

    // Check & Add Formatted Header Row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Client Name",
        "Email Address",
        "Budget Range",
        "Project Scope / Message",
        "Source Page"
      ]);
      sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#008060").setFontColor("#ffffff");
    }

    // Extract Form Data
    var params = (e && e.parameter) ? e.parameter : {};
    var name = params.name || "Anonymous";
    var email = params.email || "Not Provided";
    var budget = params.budget || "Under $2,000";
    var message = params.message || "No message provided";
    var page = params.page || "Portfolio Website";
    var timestamp = new Date();

    // Append Row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      budget,
      message,
      page
    ]);

    // Send Formatted Email Notification
    var subject = "🚀 New Shopify Project Inquiry: " + name + " (" + budget + ")";
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <h2 style="color: #008060; margin-top: 0; font-size: 22px;">New Shopify Client Consultation</h2>
        <p style="color: #475569; font-size: 15px;">A new client inquiry was just submitted on your portfolio website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 10px; font-weight: bold; color: #1e293b; width: 140px;">Client Name:</td>
            <td style="padding: 10px; color: #334155;">` + name + `</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 10px; font-weight: bold; color: #1e293b;">Email Address:</td>
            <td style="padding: 10px; color: #334155;"><a href="mailto:` + email + `" style="color:#008060; font-weight:600;">` + email + `</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 10px; font-weight: bold; color: #1e293b;">Budget Range:</td>
            <td style="padding: 10px; color: #008060; font-weight: 600;">` + budget + `</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 10px; font-weight: bold; color: #1e293b;">Source:</td>
            <td style="padding: 10px; color: #64748b;">` + page + `</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #1e293b; vertical-align: top;">Project Scope:</td>
            <td style="padding: 10px; color: #334155; line-height: 1.6;">` + message.replace(/\n/g, '<br>') + `</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px;">
          <a href="` + SHEET_URL + `" style="display: inline-block; background: #008060; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">View in Google Sheets &rarr;</a>
        </div>
      </div>
    `;

    for (var i = 0; i < NOTIFICATION_EMAILS.length; i++) {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAILS[i],
        subject: subject,
        htmlBody: htmlBody
      });
    }

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Data logged in Google Sheets and notification sent to " + NOTIFICATION_EMAILS[0]
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    sheet: SHEET_URL,
    message: "Google Apps Script Web App is live and ready for submissions."
  })).setMimeType(ContentService.MimeType.JSON);
}
