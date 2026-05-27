import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'website-screenshots', 'fix');

const WEBSITES = [
  { name: 'Adidas', url: 'https://adidas.com' },
  { name: 'Aerospike', url: 'https://aerospike.com' },
  { name: 'Airbnb', url: 'https://airbnb.com' },
  { name: 'Airtable', url: 'https://airtable.com' },
  { name: 'Apple', url: 'https://apple.com' },
  { name: 'BMW', url: 'https://bmw.com' },
  { name: 'Binance', url: 'https://binance.com' },
  { name: 'Bloomberg', url: 'https://bloomberg.com' },
  { name: 'Bugatti', url: 'https://bugatti.com' },
  { name: 'Clerk', url: 'https://clerk.com' },
  { name: 'Cohere', url: 'https://cohere.com' },
  { name: 'Coinbase', url: 'https://coinbase.com' },
  { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
  { name: 'Expo', url: 'https://expo.dev' },
  { name: 'FedEx', url: 'https://fedex.com' },
  { name: 'Ferrari', url: 'https://ferrari.com' },
  { name: 'Figma', url: 'https://figma.com' },
  { name: 'HashiCorp', url: 'https://hashicorp.com' },
  { name: 'Hostinger', url: 'https://hostinger.com' },
  { name: 'Lamborghini', url: 'https://lamborghini.com' },
  { name: 'MicrosoftOffice', url: 'https://microsoft.com/en-us/microsoft-365' },
  { name: 'Mistral', url: 'https://mistral.ai' },
  { name: 'NVIDIA', url: 'https://nvidia.com' },
  { name: 'OpenAI', url: 'https://openai.com' },
  { name: 'Prisma', url: 'https://prisma.io' },
  { name: 'Redbird', url: 'https://redbird.ai' },
  { name: 'Reddit', url: 'https://reddit.com' },
  { name: 'Renault', url: 'https://renault.com' },
  { name: 'Retool', url: 'https://retool.com' },
  { name: 'Revolut', url: 'https://revolut.com' },
  { name: 'Sanity', url: 'https://sanity.io' },
  { name: 'Spotify', url: 'https://spotify.com' },
  { name: 'Superhuman', url: 'https://superhuman.com' },
  { name: 'Tesla', url: 'https://tesla.com' },
  { name: 'TheVerge', url: 'https://theverge.com' },
  { name: 'Webflow', url: 'https://webflow.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
];

// Known cookie consent platform selectors (OneTrust, Cookiebot, etc.)
const KNOWN_SELECTORS = [
  '#onetrust-accept-btn-handler',
  '.onetrust-accept-btn-handler',
  '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
  '#CybotCookiebotDialogBodyButtonAccept',
  'button[id*="accept"][id*="cookie"]',
  'button[class*="accept"][class*="cookie"]',
  'button[class*="cookie"][class*="accept"]',
  '[data-testid="accept-cookies"]',
  '[data-cookiebanner="accept_button"]',
  '#accept-cookie-consent',
  '.cc-btn.cc-allow',
  '.cc-accept-all',
  '.js-accept-cookies',
  '.cookie-accept',
  '#cookie-accept',
  '.gdpr-accept',
  '#gdpr-accept',
  '[aria-label*="Accept all" i]',
  '[aria-label*="Accept cookies" i]',
  '[aria-label*="allow cookies" i]',
];

// Button text patterns that indicate "accept" actions
const ACCEPT_TEXTS = [
  'accept all cookies',
  'accept all',
  'accept cookies',
  'allow all cookies',
  'allow all',
  'i accept',
  'i agree',
  'agree to all',
  'agree all',
  'accept',
  'agree',
  'allow',
  'got it',
  'ok',
  'okay',
  'confirm',
  'consent',
  'yes, i agree',
  'yes',
];

async function dismissCookieBanner(page) {
  // 1. Try known platform selectors first
  for (const selector of KNOWN_SELECTORS) {
    try {
      const el = await page.$(selector);
      if (el) {
        await el.click();
        await new Promise((r) => setTimeout(r, 600));
        return true;
      }
    } catch {}
  }

  // 2. Find any visible button/link whose text matches accept patterns
  const clicked = await page.evaluate((acceptTexts) => {
    const candidates = [
      ...document.querySelectorAll('button, a[role="button"], [role="button"], input[type="button"], input[type="submit"]'),
    ];
    for (const el of candidates) {
      const text = (el.innerText || el.value || el.getAttribute('aria-label') || '').trim().toLowerCase();
      if (acceptTexts.some((t) => text === t || text.startsWith(t))) {
        // Only click if the element is visible
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          el.click();
          return true;
        }
      }
    }
    return false;
  }, ACCEPT_TEXTS);

  if (clicked) {
    await new Promise((r) => setTimeout(r, 600));
    return true;
  }

  // 3. As a last resort, hide common cookie banner containers via CSS
  await page.evaluate(() => {
    const bannerSelectors = [
      '[id*="cookie"]', '[class*="cookie"]',
      '[id*="consent"]', '[class*="consent"]',
      '[id*="gdpr"]', '[class*="gdpr"]',
      '[id*="banner"]',
      '#onetrust-banner-sdk',
      '.cc-window',
    ];
    for (const sel of bannerSelectors) {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          // Only hide fixed/absolute overlays, not entire page sections
          const style = window.getComputedStyle(el);
          if (style.position === 'fixed' || style.position === 'sticky') {
            el.style.display = 'none';
          }
        });
      } catch {}
    }
  });

  await new Promise((r) => setTimeout(r, 300));
  return false;
}

async function screenshotWebsite(browser, site) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    );

    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 });

    // Try to dismiss cookie banners
    await dismissCookieBanner(page);

    // Small settle pause
    await new Promise((r) => setTimeout(r, 1000));

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

  console.log(`Shooting ${WEBSITES.length} sites with cookie-banner dismissal...\n`);

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
  console.log(`\nScreenshots saved to: public/website-screenshots/fix/`);
}

main().catch(console.error);
