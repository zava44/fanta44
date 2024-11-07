const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const { username, email, password } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'la-tua-email@gmail.com',
            pass: 'la-tua-password'
        }
    });

    const welcomeMailOptions = {
        from: 'la-tua-email@gmail.com',
        to: email,
        subject: 'Benvenuto!',
        text: `Ciao ${username}, grazie per esserti registrato!`
    };

    const adminMailOptions = {
        from: 'la-tua-email@gmail.com',
        to: 'email-di-approvazione@example.com',
        subject: 'Nuova registrazione',
        text: `Nuovo utente registrato:\nNome utente: ${username}\nEmail: ${email}`
    };

    try {
        await transporter.sendMail(welcomeMailOptions);
        await transporter.sendMail(adminMailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Registrazione completata e email inviate!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Errore durante la registrazione.' })
        };
    }
};
