---
{{ $filename := .File.BaseFileName -}}
{{/* Get date from filename */ -}}
{{ $date := "" -}}
{{/* If the filename only contains a date... */ -}}
{{ if findRE `^\d{4}-\d{2}-\d{2}$` $filename -}}
  {{/* Get the date from the filename */ -}}
  {{ $date = $filename -}}
{{ end -}}
date: {{ $date }}
series: 
title: 
youtube_id: 
image: /images/latest-sermon/default.jpg
---
