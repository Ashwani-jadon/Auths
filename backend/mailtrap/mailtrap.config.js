import { MailtrapClient } from "mailtrap";

const TOKEN = "69e7533e62761b4365a1b765ecaa8133";

export const mailtrapClient = new MailtrapClient({ token: TOKEN });

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Ashwani",
};
