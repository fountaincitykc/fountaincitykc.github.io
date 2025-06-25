# fountaincitykc.org

## Development

This site is built with [Hugo](https://gohugo.io/), and contains a [Pages CMS](https://pagescms.org/) admin config, along with a GitHub action that automattically deploys the site to GitHub Pages when any change is pushed to `master`.

### Install Hugo

To develop locally, install the **extended** release of Hugo. It can be downloaded from the GitHub [release page](https://github.com/gohugoio/hugo/releases/tag/v0.147.0), or installed using `brew` or another package manager.

The minimum version required is `0.147.0`.

### Run Hugo

From the root directory, build site and run Hugo in development mode by running:

```bash
hugo server --cleanDestinationDir --buildFuture
```

You should see the site on localhost:1313.

## Archetypes

### Add new event

```bash
hugo new content events/2025/01-01-event-title.md
```

### Add new sermon

```bash
hugo new content sermons/2025/01-01.md
```

## Tasks

### Create a redirect

To create a redirect, add the following frontmatter params to the page.

```yaml
layout: redirect
params:
  redirect: [URL]
```

### Create a sermon series

To create a new sermon series, add a new term page to the `/content/series/` taxonomy.

```text
content/
└── series/
    └── new-series/
        └── _index.md
```

To associate a sermon to a sermon series, set the term of the sermon series in the frontmatter of the sermon. For example:

```yaml
params:
  series: my-series
```
