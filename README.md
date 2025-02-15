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

To create a new sermon series, add a new map entry to `sermons.series` in `config/_default/params.yaml`. The title and image path are required. For example:

```yaml
sermons:
  series:
    my-series:
      title: My Series
      image: /images/sermons/my-series.jpg
```

To associate a sermon to a sermon series, set the map key of the sermon series in the frontmatter of the sermon. For example:

```yaml
params:
  series: my-series
```

A sermon can override the image set by the sermon series by setting the `image` frontmatter param. For example:

```yaml
params:
  series: my-series
  image: some-image.jpg
```
