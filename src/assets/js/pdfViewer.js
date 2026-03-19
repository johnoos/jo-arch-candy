export function openPdfViewer(url, title = 'Document Viewer') {
  const stage = document.getElementById('content-panel-container');
  
  // 1. Update History (Fixes the Back Button)
  window.history.pushState({ path: 'pdf', url, title }, '', `#view/${title.slugify()}`);

  // 2. Inject the Viewer Shell
  stage.innerHTML = `
    <div class="pdf-viewer-stage">
      <div class="viewer-toolbar">
        <button onclick="window.history.back()">← Back to Gallery</button>
        <span class="doc-title">${title}</span>
        <a href="${url}" download class="btn-direct-download">Download PDF</a>
      </div>
      <object data="${url}#view=FitH" type="application/pdf" class="pdf-object">
        <p>Your browser cannot display this PDF. <a href="${url}">Download it instead.</a></p>
      </object>
    </div>
  `;
}