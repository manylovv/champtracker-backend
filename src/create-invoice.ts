export type PostCreateInvoiceResponse = {
  invoiceUrl: string;
};

import { Bot } from "grammy";

export const handleCreateInvoice = async (userId: number) => {
  const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);

  const title = "Buy Premium";
  const description = "Buy Premium";
  const payload = JSON.stringify({ userId });
  const currency = "XTR";
  const prices = [{ amount: 49, label: title }];
  const provider_token = "";

  const invoiceUrl = await bot.api.createInvoiceLink(
    title,
    description,
    payload,
    provider_token,
    currency,
    prices
  );

  console.log("invoiceUrl", invoiceUrl);

  return { invoiceUrl } satisfies PostCreateInvoiceResponse;
};
