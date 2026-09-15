import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'mail.kurumsaleposta.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@overseas.marketing',
    pass: 'Vnl@.4qb8:7HVK7:'
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, sector, dealSize, message, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Ad ve e-posta zorunludur.' });
  }

  const subject = 'Yeni B2B LinkedIn Talebi: ' + name + (company ? ' - ' + company : '');

  const html = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">' +
    '<div style="background-color: #16202E; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">' +
    '<h2 style="color: #ffffff; margin: 0; font-size: 18px;">B2B LinkedIn Marketing - Yeni Basvuru</h2>' +
    '<p style="color: #38bdf8; margin: 4px 0 0 0; font-size: 12px;">overseas.marketing alt markasi uzerinden iletildi</p>' +
    '</div>' +
    '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; width: 35%; color: #4a5568;">Ad Soyad:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">' + name + '</td></tr>' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Is E-postasi:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;"><a href="mailto:' + email + '">' + email + '</a></td></tr>' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Telefon:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;"><a href="tel:' + (phone || '') + '">' + (phone || 'Belirtilmedi') + '</a></td></tr>' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Sirket Adi:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">' + (company || 'Belirtilmedi') + '</td></tr>' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Hedef Sektor:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">' + (sector || 'Belirtilmedi') + '</td></tr>' +
    '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Ortalama Anlasma Buyuklugu:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #0284c7; font-weight: bold;">' + (dealSize || 'Belirtilmedi') + '</td></tr>' +
    (message ? '<tr><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #4a5568;">Mesaj:</td><td style="padding: 8px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">' + message + '</td></tr>' : '') +
    '<tr><td style="padding: 8px 12px; font-weight: bold; color: #4a5568;">Form Kaynagi:</td><td style="padding: 8px 12px; color: #718096; font-size: 12px;">' + (source || 'Web Sitesi Formu') + '</td></tr>' +
    '</table>' +
    '<div style="font-size: 11px; color: #a0aec0; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px;">' +
    'Bu bildirim mail.kurumsaleposta.com SMTP sunucusu ile kaankarakas93@gmail.com adresine iletilmistir.' +
    '</div></div>';

  const mailOptions = {
    from: '"B2B LinkedIn Lead" <info@overseas.marketing>',
    to: 'kaankarakas93@gmail.com',
    replyTo: email,
    subject: subject,
    html: html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Mail sent successfully to kaankarakas93@gmail.com for ' + email);
    return res.json({ success: true, message: 'Form basariyla iletildi.' });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ success: false, error: 'E-posta gonderilemedi: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log('Mail API Server running on port ' + PORT);
});
