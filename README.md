# fountaincitykc.org

## Development notes

- This site is built with Hugo and hosted on GitHub Pages
- The CMS is served from Netlify and is available at `/admin/`
- Content changes made through the CMS will be committed to the GitHub repository
- GitHub Pages will automatically rebuild when content changes are pushed

## Archetypes

### Add new event

```bash
hugo new content events/2025-01-01-event-title.md
```

### Add new sermon

```bash
hugo new content sermons/2025-01-01.md
```

## Tasks

### Create a redirect

To create a redirect, add to follow frontmatter params to the page.

```yaml
layout: redirect
params:
  redirect: [URL]
```

### Create a sermon series

To create a new sermon series, add a new term page to the `/content/series/` taxonomy.

```text
content/
├── series/
└── new-series/
    └── _index.md
```

To associate a sermon to a sermon series, set the term of the sermon series in the frontmatter of the sermon. For example:

```yaml
params:
  series: my-series
```
