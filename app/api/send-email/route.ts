import nodemailer from "nodemailer";
import { contactSchema } from "@/schema";
import { apiSuccess } from "@/lib/api-response";
import { getRequiredEnv } from "@/lib/env";
import { withApiHandler } from "@/lib/api-handler";

export const POST = withApiHandler(async (request: Request) => {
  const body = await request.json();
  const payload = await contactSchema.parseAsync(body);

  const mailUser = getRequiredEnv("GMAIL_APP_MAIL");
  const mailPassword = getRequiredEnv("GMAIL_APP_PASSWORD");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: mailUser,
      pass: mailPassword,
    },
  });

  await transporter.sendMail({
    from: `"${payload.name}" <${mailUser}>`,
    replyTo: payload.email,
    to: mailUser,
    subject: `Portfolio contact from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    html: `<p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Message:</strong><br/>${payload.message.replace(/\n/g, "<br/>")}</p>`,
  });

  return apiSuccess("Email sent successfully", {
    sent: true
  }, 200);
});

