---
{{ $filename := .File.BaseFileName -}}
{{/* Get date from filename */ -}}
{{ $date := "" -}}
{{/* If the filename starts with a date... */ -}}
{{ if findRE `^\d{4}-\d{2}-\d{2}` $filename -}}
  {{/* Get the date from the filename */ -}}
  {{ $date = slicestr $filename 0 10 -}}
{{ end -}}
{{/* Get title from filename */ -}}
{{ $title := "" -}}
{{/* If the filename is longer than the date... */ -}}
{{ if gt ($filename | len) ($date | len) -}}
  {{/* Get the text after the date */ -}}
  {{ $title = slicestr $filename ($date | len) -}}
{{ end -}}
{{/* Replace dashes with spaces */ -}}
{{ $title = replace $title `-` ` ` -}}
{{/* Remove leading and trailing spaces and convert to titlecase */ -}}
{{ $title = trim $title " " | title  -}}
title: {{ $title }}
date: {{ $date }}
end_date: 2024-01-01
time: 7–9:30pm
location: [Meadowbrook Clubhouse](https://maps.app.goo.gl/JxLLQFnJGyvnyyGDA)
featured: true
image: /images/featured-events/event-title.jpg
button:
  href: https://fountaincitykc.churchcenter.com/
  text: Register
---
