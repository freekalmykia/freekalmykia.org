import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
      const isOpenA = a.status === "open";
      const isOpenB = b.status === "open";

      if (isOpenA && !isOpenB) return -1;
      if (!isOpenA && isOpenB) return 1;

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