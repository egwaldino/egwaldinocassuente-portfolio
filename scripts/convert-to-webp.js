import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supported image formats to convert
const supportedFormats = [".png", ".jpg", ".jpeg"];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`✓ Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (supportedFormats.includes(ext)) {
        const baseName = path.basename(item, ext);
        const outputPath = path.join(dirPath, `${baseName}.webp`);

        // Check if WebP version already exists
        if (!fs.existsSync(outputPath)) {
          await convertToWebP(itemPath, outputPath);
        } else {
          console.log(`⏭️  Skipped (already exists): ${outputPath}`);
        }
      }
    }
  }
}

async function main() {
  const assetsDir = path.join(__dirname, "..", "src", "assets");

  if (!fs.existsSync(assetsDir)) {
    console.error("❌ Assets directory not found:", assetsDir);
    process.exit(1);
  }

  console.log("🚀 Starting WebP conversion...");
  console.log("📁 Processing directory:", assetsDir);
  console.log("");

  await processDirectory(assetsDir);

  console.log("");
  console.log("✅ WebP conversion completed!");
}

main().catch(console.error);
