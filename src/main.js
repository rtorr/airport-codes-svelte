import App from './App.svelte';
let app;
window.webpSupported = false;
async function supportsWebp() {
  if (!self.createImageBitmap) return false;
  const blob = await fetch(
    'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  ).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
  window.webpSupported = await supportsWebp();
  app = new App({
    target: document.body
  });
})();

export default app;
