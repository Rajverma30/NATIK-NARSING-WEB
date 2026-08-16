import sharp from "sharp";
import path from "path";
import fs from "fs";

const dir = "images";
const jobs = [
  { src: "background.png", base: "nursing-hero", widths: [640, 960, 1280, 1600] },
  { src: "indexbackground.png", base: "nursing-bg", widths: [640, 960, 1280, 1920] },
  { src: "founder photo.png", base: "founder", widths: [320, 480, 640] },
  { src: "housekeeping.avif", base: "housekeeping-hero", widths: [640, 960, 1280] },
];

for (const job of jobs) {
  const input = path.join(dir, job.src);
  if (!fs.existsSync(input)) {
    console.log("missing", input);
    continue;
  }
  const meta = await sharp(input).metadata();
  console.log(job.src, meta.width, meta.height, meta.format);

  for (const w of job.widths) {
    const target = Math.min(w, meta.width || w);
    for (const fmt of ["webp", "avif"]) {
      const out = path.join(dir, `${job.base}-${target}.${fmt}`);
      let pipe = sharp(input).resize({ width: target, withoutEnlargement: true });
      pipe = fmt === "webp" ? pipe.webp({ quality: 68 }) : pipe.avif({ quality: 55 });
      await pipe.toFile(out);
      const st = fs.statSync(out);
      console.log(" wrote", out, Math.round(st.size / 1024) + "KB");
    }
  }

  const ph = path.join(dir, `${job.base}-placeholder.webp`);
  await sharp(input).resize({ width: 24 }).webp({ quality: 20 }).toFile(ph);
  console.log(" placeholder", ph);
}

console.log("done");
