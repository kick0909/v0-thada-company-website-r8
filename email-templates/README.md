# THADA Email Verification Template

This is a custom branded email template for Supabase email verification.

## How to Use This Template

### Step 1: Copy the Template
1. Open `verification-email.html`
2. Copy the entire HTML content

### Step 2: Access Supabase Dashboard
1. Go to your Supabase project: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Authentication** → **Email Templates**

### Step 3: Edit the "Confirm signup" Template
1. Find and click on **"Confirm signup"** template
2. You'll see two sections:
   - **Subject line**
   - **Message body**

### Step 4: Update the Subject Line
Replace the subject with:
\`\`\`
ยืนยันอีเมลของคุณ - THADA / Verify Your Email - THADA
\`\`\`

### Step 5: Paste the HTML Template
1. Clear the existing message body
2. Paste the HTML content from `verification-email.html`
3. **Important**: Update the contact information in the footer:
   - Replace `02-XXX-XXXX` with your actual phone number
   - Replace `info@thada.co.th` with your actual email

### Step 6: Save and Test
1. Click **Save** at the bottom
2. Test by creating a new account on your site
3. Check your email to see the new branded template

## Template Features

✅ **Bilingual**: Thai and English content
✅ **Branded**: Uses THADA brand color (#C94444)
✅ **Responsive**: Works on mobile and desktop email clients
✅ **Professional**: Clean, modern design
✅ **Secure**: Includes security notice
✅ **Accessible**: Alternative link provided if button doesn't work

## Supabase Variables Used

The template uses these Supabase variables:
- `{{ .ConfirmationURL }}` - The verification link
- `{{ .SiteURL }}` - Your website URL
- `{{ .Email }}` - User's email address (optional, not used in current template)

## Customization Tips

### Change Colors
Replace `#C94444` with your preferred brand color throughout the template.

### Add Logo
To add your logo, replace the text "THADA" in the header with:
\`\`\`html
<img src="YOUR_LOGO_URL" alt="THADA" style="max-width: 200px; height: auto;">
\`\`\`

### Modify Content
Feel free to adjust the text content to match your brand voice and messaging.

## Email Client Compatibility

This template is tested and works with:
- Gmail
- Outlook
- Apple Mail
- Yahoo Mail
- Mobile email clients

## Support

If you need help customizing this template, refer to:
- [Supabase Email Templates Documentation](https://supabase.com/docs/guides/auth/auth-email-templates)
- [HTML Email Best Practices](https://www.campaignmonitor.com/css/)
