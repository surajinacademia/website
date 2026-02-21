/**
 * Copies compiled PDFs from resume/ to public/ so they are served at /cv.pdf and /resume.pdf.
 * Run as part of prebuild. Compile LaTeX first (pdflatex cv.tex, xelatex resume.tex) if needed.
 */
import fs from "node:fs";
import path from "node:path";

const resumeDir = path.join(process.cwd(), "resume");
const publicDir = path.join(process.cwd(), "public");

const copies = [
	{ src: "cv.pdf", dest: "cv.pdf" },
	{ src: "resume.pdf", dest: "resume.pdf" },
];

for (const { src, dest } of copies) {
	const srcPath = path.join(resumeDir, src);
	const destPath = path.join(publicDir, dest);
	if (fs.existsSync(srcPath)) {
		fs.copyFileSync(srcPath, destPath);
		console.log(`Copied ${src} → public/${dest}`);
	} else {
		console.warn(`Warning: ${srcPath} not found; run pdflatex/xelatex in resume/ to build PDFs.`);
	}
}
