/**
 * GOOGLE APPS SCRIPT FOR YASIR MALIK PORTFOLIO
 * Connected Google Sheet: https://docs.google.com/spreadsheets/d/1CEdo2ndiQU8l8ifqwagYznOWGCWYdkKcRuTLKi84FN4/edit
 *
 * ============================================================================
 * 60-SECOND DEPLOYMENT INSTRUCTIONS:
 * ============================================================================
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1CEdo2ndiQU8l8ifqwagYznOWGCWYdkKcRuTLKi84FN4/edit
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

var SHEET_URL = 'https://docs.google.com/spreadsheets/d/1CEdo2ndiQU8l8ifqwagYznOWGCWYdkKcRuTLKi84FN4/edit';
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

    // Send Formatted Email Notification (Premium Dark Theme for Admin)
    var subject = "🚀 New Shopify Inquiry: " + name + " (" + budget + ")";
    var htmlBody = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c1424; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 32px; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <div style="text-transform: uppercase; letter-spacing: 0.1em; color: #7eb5d5; font-size: 12px; font-weight: 700; margin-bottom: 8px;">New Client Inquiry</div>
          <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">Action Required</h2>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94a3b8; width: 130px;">Name</td>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ffffff; font-weight: 500;">` + name + `</td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94a3b8;">Email</td>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><a href="mailto:` + email + `" style="color: #7eb5d5; text-decoration: none; font-weight: 500;">` + email + `</a></td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94a3b8;">Budget</td>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #10b981; font-weight: 600;">` + budget + `</td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #94a3b8;">Source</td>
              <td style="padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; font-size: 13px;">` + page + `</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 24px 0 8px 0; color: #94a3b8;">Project Details</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; color: #e2e8f0; line-height: 1.7;">` + message.replace(/\n/g, '<br>') + `</td>
            </tr>
          </table>
          
          <div style="margin-top: 32px; text-align: center;">
            <a href="` + SHEET_URL + `" style="display: inline-block; background: #7eb5d5; color: #0c1424; padding: 14px 28px; border-radius: 100px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.02em;">Open Google Sheet &rarr;</a>
          </div>
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

    // Send Auto-Responder to the Client
    if (email && email !== "Not Provided" && email.indexOf("@") !== -1) {
      var clientSubject = "Inquiry Received: Let's discuss your Shopify project";
      var clientHtmlBody = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <h2 style="color: #0c1424; margin-top: 0; font-size: 24px; font-weight: 700;">Hi ` + name + `,</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
            Thank you for reaching out! I've received your inquiry regarding your Shopify project. 
          </p>
          <p style="color: #475569; font-size: 16px; line-height: 1.7; margin-bottom: 32px;">
            I am currently reviewing the details you provided and will get back to you within 24 business hours to discuss the next steps. If you have any additional details or documents to share in the meantime, feel free to reply directly to this email.
          </p>
          <div style="padding-top: 32px; border-top: 1px solid #e2e8f0;">
            <p style="color: #0c1424; font-size: 16px; font-weight: 700; margin: 0;">Yasir Malik</p>
            <p style="color: #7eb5d5; font-size: 14px; font-weight: 600; margin: 4px 0 0 0;">Senior Shopify & CRO Engineer</p>
            <p style="color: #94a3b8; font-size: 13px; font-weight: 500; margin: 4px 0 0 0;">Upwork Top Rated Plus</p>
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: email,
        replyTo: NOTIFICATION_EMAILS[0],
        name: "Yasir Malik",
        subject: clientSubject,
        htmlBody: clientHtmlBody
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
