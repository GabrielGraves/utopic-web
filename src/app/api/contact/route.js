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

    const fields = [
      ["Artista", artista],
      ["Fecha", fecha],
      ["Ciudad", ciudad],
      ["Productora", productora],
      ["Club / Venue", club],
      ["Duración del Set", duracion],
      ["Email", email],
      ["Teléfono", telefono],
      ["Line Up Tentativo", lineup],
      ["Promotor", promotor],
    ];

    const text = [
      "━━━ UTOPIC BOOKING ━━━",
      "",
      ...fields.filter(([, v]) => v).map(([label, value]) => `${label.padEnd(20)} ${value}`),
      ...(mensaje ? ["", "─".repeat(40), `Mensaje:`, mensaje] : []),
      "",
      "─".repeat(40),
    ].join("\n");

    await transporter.sendMail({
      from: `"${promotor || "Booking"}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "gabriel@utopicworldwide.com",
      subject: `Booking Inquiry (web) — ${productora || promotor || "Sin productora"} | ${artista || "Sin artista"} | ${fecha || "Sin fecha"}`,
      text,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ error: "Error al enviar" }, { status: 500 });
  }
}
