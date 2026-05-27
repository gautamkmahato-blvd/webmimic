import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'website-screenshots');

const WEBSITES = [
  { name: 'Claude', url: 'https://claude.ai' },
  { name: 'OpenAI', url: 'https://openai.com' },
  { name: 'Cohere', url: 'https://cohere.com' },
  { name: 'Mistral', url: 'https://mistral.ai' },
  { name: 'HuggingFace', url: 'https://huggingface.co' },
  { name: 'Runway', url: 'https://runwayml.com' },
  { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
  { name: 'MiniMax', url: 'https://minimaxi.com' },
  { name: 'xAI', url: 'https://x.ai' },
  { name: 'TogetherAI', url: 'https://together.ai' },
  { name: 'Replicate', url: 'https://replicate.com' },
  { name: 'Vercel', url: 'https://vercel.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Cursor', url: 'https://cursor.com' },
  { name: 'Warp', url: 'https://warp.dev' },
  { name: 'Raycast', url: 'https://raycast.com' },
  { name: 'Arc', url: 'https://arc.net' },
  { name: 'Linear', url: 'https://linear.app' },
  { name: 'Framer', url: 'https://framer.com' },
  { name: 'Figma', url: 'https://figma.com' },
  { name: 'Webflow', url: 'https://webflow.com' },
  { name: 'Retool', url: 'https://retool.com' },
  { name: 'Expo', url: 'https://expo.dev' },
  { name: 'OpenCode', url: 'https://opencode.ai' },
  { name: 'VoltAgent', url: 'https://voltagent.dev' },
  { name: 'Emergent', url: 'https://emergent.sh' },
  { name: 'Lovable', url: 'https://lovable.dev' },
  { name: 'Mintlify', url: 'https://mintlify.com' },
  { name: 'Apidog', url: 'https://apidog.com' },
  { name: 'BetterStack', url: 'https://betterstack.com' },
  { name: 'Sentry', url: 'https://sentry.io' },
  { name: 'MLflow', url: 'https://mlflow.org' },
  { name: 'Prisma', url: 'https://prisma.io' },
  { name: 'Supabase', url: 'https://supabase.com' },
  { name: 'Neon', url: 'https://neon.tech' },
  { name: 'PlanetScale', url: 'https://planetscale.com' },
  { name: 'MongoDB', url: 'https://mongodb.com' },
  { name: 'ClickHouse', url: 'https://clickhouse.com' },
  { name: 'Aerospike', url: 'https://aerospike.com' },
  { name: 'HashiCorp', url: 'https://hashicorp.com' },
  { name: 'Railway', url: 'https://railway.app' },
  { name: 'Hostinger', url: 'https://hostinger.com' },
  { name: 'AWS', url: 'https://aws.amazon.com' },
  { name: 'IBM', url: 'https://ibm.com' },
  { name: 'MicrosoftOffice', url: 'https://microsoft.com/en-us/microsoft-365' },
  { name: 'Clerk', url: 'https://clerk.com' },
  { name: 'Composio', url: 'https://composio.dev' },
  { name: 'Sanity', url: 'https://sanity.io' },
  { name: 'Resend', url: 'https://resend.com' },
  { name: 'Liveblocks', url: 'https://liveblocks.io' },
  { name: 'Clay', url: 'https://clay.com' },
  { name: 'Notion', url: 'https://notion.so' },
  { name: 'Miro', url: 'https://miro.com' },
  { name: 'CalCom', url: 'https://cal.com' },
  { name: 'Cron', url: 'https://cron.com' },
  { name: 'Craft', url: 'https://craft.do' },
  { name: 'Pitch', url: 'https://pitch.com' },
  { name: 'Superhuman', url: 'https://superhuman.com' },
  { name: 'Airtable', url: 'https://airtable.com' },
  { name: 'X', url: 'https://x.com' },
  { name: 'Reddit', url: 'https://reddit.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Pinterest', url: 'https://pinterest.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Meta', url: 'https://meta.com' },
  { name: 'ProductHunt', url: 'https://producthunt.com' },
  { name: 'YCombinator', url: 'https://ycombinator.com' },
  { name: 'Stripe', url: 'https://stripe.com' },
  { name: 'Binance', url: 'https://binance.com' },
  { name: 'Coinbase', url: 'https://coinbase.com' },
  { name: 'Revolut', url: 'https://revolut.com' },
  { name: 'Wise', url: 'https://wise.com' },
  { name: 'Bloomberg', url: 'https://bloomberg.com' },
  { name: 'Airbnb', url: 'https://airbnb.com' },
  { name: 'Uber', url: 'https://uber.com' },
  { name: 'FedEx', url: 'https://fedex.com' },
  { name: 'Tesla', url: 'https://tesla.com' },
  { name: 'BMW', url: 'https://bmw.com' },
  { name: 'Ferrari', url: 'https://ferrari.com' },
  { name: 'Lamborghini', url: 'https://lamborghini.com' },
  { name: 'Bugatti', url: 'https://bugatti.com' },
  { name: 'Renault', url: 'https://renault.com' },
  { name: 'SpaceX', url: 'https://spacex.com' },
  { name: 'NVIDIA', url: 'https://nvidia.com' },
  { name: 'Apple', url: 'https://apple.com' },
  { name: 'Shopify', url: 'https://shopify.com' },
  { name: 'Nike', url: 'https://nike.com' },
  { name: 'Adidas', url: 'https://adidas.com' },
  { name: 'Spotify', url: 'https://spotify.com' },
  { name: 'TheVerge', url: 'https://theverge.com' },
  { name: 'Wired', url: 'https://wired.com' },
  { name: 'Redbird', url: 'https://redbird.ai' },
];

async function screenshotWebsite(browser, site) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    );

    await page.goto(site.url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Brief pause to let any animations/lazy loads settle
    await new Promise((r) => setTimeout(r, 1500));

    const filePath = path.join(OUTPUT_DIR, `${site.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`✓ ${site.name}`);
    return { name: site.name, success: true };
  } catch (err) {
    console.error(`✗ ${site.name}: ${err.message}`);
    return { name: site.name, success: false, error: err.message };
  } finally {
    await page.close();
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  console.log(`Taking screenshots of ${WEBSITES.length} websites...\n`);

  const results = [];
  for (const site of WEBSITES) {
    const result = await screenshotWebsite(browser, site);
    results.push(result);
  }

  await browser.close();

  const succeeded = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success);

  console.log(`\nDone: ${succeeded}/${WEBSITES.length} succeeded`);
  if (failed.length > 0) {
    console.log('\nFailed:');
    failed.forEach((r) => console.log(`  - ${r.name}: ${r.error}`));
  }
  console.log(`\nScreenshots saved to: public/website-screenshots/`);
}

main().catch(console.error);
