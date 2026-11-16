const { chromium } = require("playwright"); const fs = require("fs"), path = require("path");
const r = path.resolve(__dirname, ".."); const b64 = (f) => "data:image/png;base64," + fs.readFileSync(path.join(r, f)).toString("base64");
(async () => {
  const br = await chromium.launch(); const p = await br.newPage({ viewport: { width: 1200, height: 400 } });
  const html = fs.readFileSync(path.join(__dirname, "banner.html"), "utf8").replace("CAPA", b64("public/capas/seo-geo.png")).replace("LOGO", b64("public/marca/logo-branca.png"));
  await p.setContent(html, { waitUntil: "networkidle" }); await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(r, "public/capas/banner-checkout.png") }); await br.close(); console.log("ok");
})();
