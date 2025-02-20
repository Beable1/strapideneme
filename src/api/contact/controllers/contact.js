'use strict';

module.exports = {
  async send(ctx) {
    const { name, email, mobile, service, message } = ctx.request.body;

    try {
      await strapi.plugin('email').service('email').send({
        to: 'bogaziciakademimailer@gmail.com', 
        subject: 'Yeni Teklif Talebi',
        text: `İsim: ${name}\nE-posta: ${email}\nTelefon: ${mobile}\nHizmet: ${service}\nMesaj: ${message}`,
      });
      ctx.send({ ok: true, message: 'E-posta başarıyla gönderildi.' });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
