import siteConfig from "config/site.config"

export const getMetaTitle = title => {
  if (title === siteConfig.metaData.title) return siteConfig.metaData.title;
  return `${title} | ${siteConfig.metaData.title}`;
}