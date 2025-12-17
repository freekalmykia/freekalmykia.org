import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const STATUS_PRIORITY = {
  upcoming: 0,
  open: 1,
  funded: 2,
  closed: 3,
};

const grantsDir = path.join(process.cwd(), "content/grants");

export function getAllGrants() {
  const files = fs.readdirSync(grantsDir);

  return files
    .map((filename) => {
      const filePath = path.join(grantsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: data.slug || filename.replace(".md", "")
      };
    })
    .sort((a, b) => {
      const pA = STATUS_PRIORITY[a.status] ?? 99;
      const pB = STATUS_PRIORITY[b.status] ?? 99;

      if (pA !== pB) {
        return pA - pB;
      }

      const dateA = a.date ? new Date(a.date) : 0;
      const dateB = b.date ? new Date(b.date) : 0;

      return dateB - dateA;
    });
}

export function getGrantBySlug(slug) {
  const fullPath = path.join(grantsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug
  };
}