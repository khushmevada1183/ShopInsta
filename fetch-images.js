// fetch-images.js
// Automated image downloader for your e-commerce site using Unsplash API
// 1. Get a free API key at https://unsplash.com/developers
// 2. Paste your API key below
// 3. Run: node fetch-images.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const UNSPLASH_ACCESS_KEY = 'YVrpHmWcT48LzCQyDucWvQgjA6nzluuDBKXFQdqsrSQ'; // <--- PUT YOUR KEY HERE

const queries = {
  hero: 'shopping ecommerce banner',
  categories: {
    electronics: 'electronics flatlay',
    fashion: 'fashion clothes',
    home_kitchen: 'home kitchen decor',
    beauty_health: 'beauty health products',
    sports_outdoors: 'sports outdoors equipment',
  },
  products: {
    earbuds: 'wireless earbuds product',
    watch: 'smart watch product',
    headphones: 'premium headphones product',
    laptop_stand: 'laptop stand product',
    fitness_watch: 'fitness watch product',
  },
  backgrounds: 'abstract blur pastel',
  promo: 'shopping sale banner',
  testimonial: 'happy customer testimonial',
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function fetchUnsplash(query) {
  const apiUrl = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`;
  return new Promise((resolve, reject) => {
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log('Unsplash API response for query:', query, json);
          resolve(json.urls && json.urls.regular);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  if (UNSPLASH_ACCESS_KEY === 'PASTE_YOUR_UNSPLASH_ACCESS_KEY_HERE') {
    console.error('Please add your Unsplash API key to fetch-images.js');
    process.exit(1);
  }

  // Hero
  ensureDir('public/images');
  console.log('Fetching hero image...');
  const heroUrl = await fetchUnsplash(queries.hero);
  console.log('Hero image URL:', heroUrl);
  if (heroUrl) await downloadImage(heroUrl, 'public/images/hero.jpg');

  // Categories
  ensureDir('public/images/categories');
  for (const [cat, q] of Object.entries(queries.categories)) {
    console.log(`Fetching category image for ${cat}...`);
    const url = await fetchUnsplash(q);
    console.log(`Category ${cat} image URL:`, url);
    if (url) await downloadImage(url, `public/images/categories/${cat}.jpg`);
  }

  // Products
  ensureDir('public/images/products');
  for (const [prod, q] of Object.entries(queries.products)) {
    console.log(`Fetching product image for ${prod}...`);
    const url = await fetchUnsplash(q);
    console.log(`Product ${prod} image URL:`, url);
    if (url) await downloadImage(url, `public/images/products/${prod}.jpg`);
  }

  // Background
  console.log('Fetching background image...');
  const bgUrl = await fetchUnsplash(queries.backgrounds);
  console.log('Background image URL:', bgUrl);
  if (bgUrl) await downloadImage(bgUrl, 'public/images/background.jpg');

  // Promo
  console.log('Fetching promo image...');
  const promoUrl = await fetchUnsplash(queries.promo);
  console.log('Promo image URL:', promoUrl);
  if (promoUrl) await downloadImage(promoUrl, 'public/images/promo.jpg');

  // Testimonial
  console.log('Fetching testimonial image...');
  const testUrl = await fetchUnsplash(queries.testimonial);
  console.log('Testimonial image URL:', testUrl);
  if (testUrl) await downloadImage(testUrl, 'public/images/testimonial.jpg');

  console.log('All images downloaded!');
}

main(); 