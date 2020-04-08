const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
});

module.exports = {
    
    async store(req, res) {
        const { name, email, subject, message } = req.body;

        if (name == '' || email == '' || subject == '' || message == '') {
            return res.send("Todos os campos são obrigatórios.");
        }

        const msg = `Olá, me chamo ${name} e minha dúvida é "${message}", espero seu retorno em ${email}.`;

        try {

            await transport.sendMail({
                from: "Empresa Lidery <devlincolnsilva@gmail.com>",
                to: process.env.DEST_EMAIL,
                subject: subject,
                text: msg
            });

            return res.redirect('/');

        } catch (err) {
            return res.send("Error ao enviar o e-mail, tente novamente.");
        }

    }
};