import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const portfolioDirectory = join(process.cwd(), '_portfolio');

export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPortfolioBySlug(slug, fields = []) {
  return getBySlug(portfolioDirectory, slug, fields);
}

export function getCompletePortfolio(fields = []) {
  const slugs = getSlugsFromDirectory(portfolioDirectory);
  const portfolio = slugs
    .map((slug) => getPortfolioBySlug(slug, fields))
    // sort portfolio by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? '-1' : '1'));
  return portfolio;
}
