# fountaincitykc.org

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
type: _default
layout: redirect
params:
  redirect: [URL]
```

### Create a sermon series

To create a new sermon series, add a new term page to the `/content/series/` taxonomy. The first image found in this term directory will be used as the sermon series image. For example:

```text
content/
├── series/
└── new-series/
    ├── _index.md
    └── cover.jpg
```

To associate a sermon to a sermon series, set the term of the sermon series in the frontmatter of the sermon. For example:

```yaml
params:
  series: my-series
```
