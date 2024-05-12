import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'src/app/*.js',
    'src/app/*.jsx',
    'src/app/**/*.js',
    'src/app/**/*.jsx',
    'md/**/*.md',
    'md/**/*.mdx',
  ])

  const filteredPages = pages
    .filter((page) => page.includes('page.js') || page.includes('md'))
    .filter((page) => !page.includes('app/app/'))
    .filter((page) => !page.includes('blog/[slug]'))
    .filter((page) => !page.includes('reset-password'))

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${filteredPages
          .filter((page) => page.includes('page.js') || page.includes('md'))
          .map((page) => {
            const path = page
              .replace('md/', '/')
              .replace('src/app', '')
              .replace('/page.jsx', '')
              .replace('/page.js', '')
              .replace('.jsx', '')
              .replace('.js', '')
              .replace('.mdx', '')
              .replace('.md', '')
            const route = path === '/index' ? '' : path

            return `
              <url>
                  <loc>${`https://www.jafaf-cast.live${route}`}</loc>
              </url>
            `
          })
          .join('')}
    </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

generate()
