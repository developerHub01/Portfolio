import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "node:path";
import { contactSchema } from "@/schema";
import { apiSuccess } from "@/lib/api-response";
import { getRequiredEnv } from "@/lib/env";
import { withApiHandler } from "@/lib/api-handler";

export const POST = withApiHandler(async (request: Request) => {
  const body = await request.json();
  const payload = await contactSchema.parseAsync(body);

  const mailUser = getRequiredEnv("GMAIL_APP_MAIL");
  const mailPassword = getRequiredEnv("GMAIL_APP_PASSWORD");
  const templatePath = path.join(
    process.cwd(),
    "lib",
    "email-templates",
    "contact-email.ejs"
  );

  const sentAt = new Date().toISOString().replace("T", " ").replace("Z", " UTC");

  const html = await ejs.renderFile(templatePath, {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    sentAt,
  });

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
    subject: `Portfolio, client ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    html,
  });

  return apiSuccess(
    "Email sent successfully",
    {
      sent: true,
    },
    200
  );
});
