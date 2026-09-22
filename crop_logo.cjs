const Jimp = require('jimp');

async function processImage() {
  try {
    const imgPath = 'C:/Users/AKSHAYA/.gemini/antigravity/brain/e771baae-2bf1-42c6-a1d4-69c72a097d40/.user_uploaded/media_1790085350037.png';
    const image = await Jimp.read(imgPath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    console.log(`Original image: ${width}x${height}`);
    
    // Check if background is truly transparent or checkered
    const pixel00 = Jimp.intToRGBA(image.getPixelColor(0, 0));
    const pixel11 = Jimp.intToRGBA(image.getPixelColor(1, 1));
    console.log('Pixel 0,0:', pixel00);
    console.log('Pixel 1,1:', pixel11);
    
    // Let's crop it into two pieces. 
    // Left half for logo, right half for bird. 
    // But crop off the bottom text. Let's guess bottom 10% is text.
    const cropHeight = Math.floor(height * 0.85); // chop off bottom 15%
    
    const leftLogo = image.clone().crop(0, 0, Math.floor(width / 2), cropHeight);
    const rightLogo = image.clone().crop(Math.floor(width / 2), 0, Math.floor(width / 2), cropHeight);
    
    // Autocrop to remove transparent/empty borders
    leftLogo.autocrop();
    rightLogo.autocrop();
    
    await leftLogo.writeAsync('a:/Website lutix/public/logo-horizontal.png');
    await rightLogo.writeAsync('a:/Website lutix/public/bird-icon.png');
    
    console.log('Successfully generated logo-horizontal.png and bird-icon.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
