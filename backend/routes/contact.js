const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

// Max 5 contact attempts per 15 minutes per IP - prevents spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please try again later.' }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post('/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.length > 3000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br>')}</p>`
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email send error:', err.message);
    res.status(500).json({ error: 'Something went wrong sending your message. Please try again later.' });
  }
});

module.exports = router;
