import pkg from '../package.json';

const repoUrl = pkg.repository.url;

export default function docsUrl(ruleName, commitish = `v${pkg.version}`) {
  return `${repoUrl}/blob/${commitish}/docs/rules/${ruleName}.md`;
}
