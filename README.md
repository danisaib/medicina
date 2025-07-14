<!DOCTYPE html>
<html>
<head>
  <title>Malla Interactiva de Plan de Estudios</title>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
</head>
<body>
  <h1>Malla de Plan de Estudios</h1>
  <div class="mermaid">
    graph TD
      M1[Matemáticas I] --> M2[Matemáticas II]
      M2 --> M3[Matemáticas III]
      M1 --> E1[Estadística]
      H1[Historia] --> H2[Historia Moderna]
  </div>
</body>
</html>
