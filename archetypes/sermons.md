---
{{ $date := "" -}}
{{ $filename := .File.BaseFileName -}}
{{ if findRE `^\d{4}-\d{2}-\d{2}$` $filename -}}
  {{ $date = $filename -}}
{{ end -}}
date: {{ $date }}
title: 
youtube_id: 
image: /images/latest-sermon/default.jpg
---
