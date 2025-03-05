# SenEDIT Terms and Conditions Page Builder

This repository is used for managing the SenEDIT terms and conditions page. It helps convert a Word document into an HTML page designed for the SenEDIT terms and conditions page.

## How to Use This Tool

1. **Convert Word Document to HTML:**
   - Open the Word document and use the "Save As" feature to save it as an HTML file.

2. **Upload HTML File:**
   - Upload the HTML file to the repository's site: [SenEDIT Terms Page Builder](https://senedit-terms-page-builder.asehriyar.com/).

3. **Download Processed File:**
   - Download the processed file from the tool.

4. **Handle the Downloaded File:**
   - Split the downloaded file into two parts:
     - `contact_left terms` class
     - `contact_right terms` class
   - Note: The `contact_left terms` div usually remains the same, while changes are mostly in the `contact_right terms` div.

5. **Modify `contact_left terms` Class:**
   - Add the "Kanuni Tebligat Bilgileri" section.
   - Add a PDF download link if necessary.
   - The previous `contact_left terms` can often be reused.

6. **Modify `contact_right terms` Class:**
   - Add a reference to "Kanuni Tebligat Bilgileri" to enable scrolling.
   - Check for bold style paragraphs. Ensure paragraphs that should be in the `MsoNormal` class are not mistakenly in the `G222Heading` class. This often occurs in sections 5.1, 5.2, and 5.4.
   - Remove unnecessary margins added by Word for page synchronization.

7. **Test the Changes:**
   - Place the edited file in the repository's main directory.
   - Open the file in a local live server to verify it works correctly.

8. **Update SenEDIT's Terms and Conditions Page:**
   - Copy the necessary divs, such as `contact_right terms`, from the edited file and update SenEDIT's terms and conditions page.

## Example

Here is an example of how to structure the HTML:

```html
<div class="contact_left terms">
    <!-- Add "Kanuni Tebligat Bilgileri" section here -->
    <!-- Add PDF download link here -->
</div>

<div class="contact_right terms">
    <!-- Add reference to "Kanuni Tebligat Bilgileri" here -->
    <!-- Ensure correct classes for bold paragraphs -->
    <!-- Remove unnecessary margins -->
</div>