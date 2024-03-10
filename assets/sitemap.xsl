{{ if .IsHome }}
  {{ $sitemap_xsl_template := resources.Get "sitemap.xsl" }}
  {{ $sitemap_xsl := $sitemap_xsl_template | resources.ExecuteAsTemplate "sitemap.xsl" . }}
  {{ $noop := $sitemap_xsl.Permalink }}
{{ end }}