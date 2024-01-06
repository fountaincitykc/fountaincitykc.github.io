---
{{ $title := "" -}}
{{ $date := "" -}}
{{ $filename := .File.BaseFileName -}}
{{ if findRE `^\d{4}-\d{2}-\d{2}$` $filename -}}
  {{ $time := time.AsTime $filename -}}
  {{ $title = $time.Format "January 2, 2006" -}}
  {{ $date = $filename -}}
{{ end -}}
title: {{ $title }}
date: {{ $date }}
verse: 
youtube_id: 
image: /images/latest-sermon/default.jpg
---
