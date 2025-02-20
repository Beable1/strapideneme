// config/plugins.js
const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', crypto.randomBytes(16).toString('base64')),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 587),
        secure: false, // 465 için true, diğer portlar için false
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_EMAIL_FROM', 'bogaziciakademimailer@gmail.com'),
        defaultReplyTo: env('DEFAULT_EMAIL_FROM', 'bogaziciakademimailer@gmail.com'),   
      },
    },
  },
});
