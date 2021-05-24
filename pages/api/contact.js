import nodemailer from "nodemailer";

export default async (req, res) => {
  const { ime, telefon, mail, povprasevanje } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "tim.policar@gmail.com",
      pass: "dhhhpudqplaaxvyc",
    },
  });

  try {
    const email = await transporter.sendMail({
      from: mail,
      to: "tim.policar@gmail.com",
      subject: `Sporočilo od ${ime}`,
      html: `<p>Ime: ${ime}</p> <br>
             <p>Telefon: ${telefon}</p><br>
             <p>Mail: ${mail}</p><br>
             <p>Povprasevanje: ${povprasevanje}</p><br>`,
    });

    console.log("Sporocilo poslano", email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
