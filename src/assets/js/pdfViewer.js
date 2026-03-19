// pdfViewer.js
export function openPdfViewer(url, title = 'Document Viewer') {
  const stage = document.getElementById('content-panel-container');
  if (!stage) return;

  // Track history so the hardware 'Back' button works
  window.history.pushState({ path: 'pdf-view', url, title }, '', `#pdf/${title.replace(/\s+/g, '-')}`);

  stage.innerHTML = `
    <div class="pdf-stage-wrapper">
      <div class="viewer-toolbar">
        <button class="btn-back-to-gallery">← Back</button>
        <span class="viewer-title">${title}</span>
        <a href="${url}" download class="btn-download-pdf">Download</a>
      </div>
      <iframe 
        src="https://docs.google.com{encodeURIComponent(url)}&embedded=true" 
        class="pdf-iframe" 
        frameborder="0">
      </iframe>
    </div>
  `;

  stage.querySelector('.btn-back-to-gallery').onclick = () => window.history.back();
}