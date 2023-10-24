import discordwebhook from "https://deno.land/x/discordwebhook/mod.ts";

type DiscordWebhook = {
  webhook_url: string;
};
export async function main(discord_webhook: DiscordWebhook, message: string) {
  const webhook = new discordwebhook(discord_webhook.webhook_url);
  const ret = await webhook.createMessage(message);
  return ret;
}
