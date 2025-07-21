import { MailtrapClient } from "mailtrap";

const TOKEN = "904504edee8533c9bf4ab87380b12f67";

export const mailtrapClient = new MailtrapClient({ token: TOKEN });

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Ashwani",
};
