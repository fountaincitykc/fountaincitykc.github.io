# fountaincitykc.org

## Development

This site is built with [Hugo](https://gohugo.io/).

### Local installation

To develop locally, Dart Sass and Hugo need to be installed using `brew` or
another package manager.

Dart Sass:

```bash
brew install sass/sass/sass
```

Hugo:

```bash
brew install hugo
```

The minimum Hugo version required is `0.147.0`.

### Run Hugo

From the root directory, build the site and run Hugo in development mode by running:

```bash
hugo server --cleanDestinationDir --buildFuture
```

You should see the site on localhost:1313.

## Hosting

The site is hosted on GitHub Pages.

There is a GitHub action that automatically deploys the site when any change is pushed to `master`. The site is also deployed every morning, so old events will be removed from the calendar.

## Content Management

This site has a CMS located at [Pages CMS](https://app.pagescms.org/).

## Hugo Archetypes

### Create a new event

```bash
hugo new content events/2025-01-01-event-title.md
```

### Create a new sermon

```bash
hugo new content sermons/2025-01-01.md
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
├── series/
│   ├── my-series/
│   │   └── _index.md
```

To associate a sermon to a sermon series, set the term of the sermon series in the frontmatter of the sermon. For example:

```yaml
params:
  series: my-series
```
