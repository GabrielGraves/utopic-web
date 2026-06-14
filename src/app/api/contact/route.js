import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { artista, fecha, ciudad, productora, club, duracion, email, telefono, lineup, promotor, mensaje } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${promotor || "Booking"}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "gabriel@utopicworldwide.com",
      subject: `Booking Inquiry — ${promotor || "Sin nombre"}`,
      html: `
        <h2>Nueva Consulta de Booking</h2>
        <table style="border-collapse:collapse;width:100%">
          ${artista ? `<tr><td style="padding:8px 12px;font-weight:bold">Artista</td><td style="padding:8px 12px">${artista}</td></tr>` : ""}
          ${fecha ? `<tr><td style="padding:8px 12px;font-weight:bold">Fecha</td><td style="padding:8px 12px">${fecha}</td></tr>` : ""}
          ${ciudad ? `<tr><td style="padding:8px 12px;font-weight:bold">Ciudad</td><td style="padding:8px 12px">${ciudad}</td></tr>` : ""}
          ${productora ? `<tr><td style="padding:8px 12px;font-weight:bold">Productora</td><td style="padding:8px 12px">${productora}</td></tr>` : ""}
          ${club ? `<tr><td style="padding:8px 12px;font-weight:bold">Club</td><td style="padding:8px 12px">${club}</td></tr>` : ""}
          ${duracion ? `<tr><td style="padding:8px 12px;font-weight:bold">Duración del Set</td><td style="padding:8px 12px">${duracion}</td></tr>` : ""}
          <tr><td style="padding:8px 12px;font-weight:bold">Email</td><td style="padding:8px 12px">${email}</td></tr>
          ${telefono ? `<tr><td style="padding:8px 12px;font-weight:bold">Teléfono</td><td style="padding:8px 12px">${telefono}</td></tr>` : ""}
          ${lineup ? `<tr><td style="padding:8px 12px;font-weight:bold">Line Up Tentativo</td><td style="padding:8px 12px">${lineup}</td></tr>` : ""}
          ${promotor ? `<tr><td style="padding:8px 12px;font-weight:bold">Promotor</td><td style="padding:8px 12px">${promotor}</td></tr>` : ""}
          ${mensaje ? `<tr><td style="padding:8px 12px;font-weight:bold">Mensaje</td><td style="padding:8px 12px">${mensaje}</td></tr>` : ""}
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ error: "Error al enviar" }, { status: 500 });
  }
}
