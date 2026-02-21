import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const portfolioDir = path.join(process.cwd(), "public", "portfolio");
const thumbsDir = path.join(process.cwd(), "public", "portfolio-thumbs");

// Create thumbs directory if it doesn't exist
if (!fs.existsSync(thumbsDir)) {
	fs.mkdirSync(thumbsDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(portfolioDir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

console.log(`Found ${imageFiles.length} images to optimize...`);

// Process each image
if (imageFiles.length === 0) {
	console.log("No images found in portfolio directory.");
	process.exit(0);
}

let successCount = 0;
let errorCount = 0;

for (const file of imageFiles) {
	const inputPath = path.join(portfolioDir, file);
	const outputPath = path.join(thumbsDir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));

	// Skip if thumbnail already exists and is newer than source
	if (fs.existsSync(outputPath)) {
		const sourceStats = fs.statSync(inputPath);
		const thumbStats = fs.statSync(outputPath);
		if (thumbStats.mtime > sourceStats.mtime) {
			console.log(`Skipping ${file} (thumbnail up to date)`);
			successCount++;
			continue;
		}
	}

	try {
		await sharp(inputPath)
			.resize(1200, 1200, {
				fit: "inside",
				withoutEnlargement: true,
			})
			.webp({ quality: 85 })
			.toFile(outputPath);

		console.log(`✓ Optimized ${file}`);
		successCount++;
	} catch (error) {
		console.error(`✗ Failed to optimize ${file}:`, error.message);
		errorCount++;
		// Don't fail the build for individual image errors, but log them
	}
}

console.log(
	`Portfolio optimization complete! Processed: ${successCount} successful, ${errorCount} errors.`,
);

// Exit with error code only if all images failed
if (errorCount > 0 && successCount === 0) {
	console.error("All images failed to optimize. Build may fail.");
	process.exit(1);
}
