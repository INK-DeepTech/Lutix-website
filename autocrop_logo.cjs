const { Jimp } = require('jimp');

async function cropLogo() {
  try {
    const imgPath = 'a:/Website lutix/public/logo-horizontal.png';
    const image = await Jimp.read(imgPath);
    image.autocrop();
    await image.write('a:/Website lutix/public/logo-horizontal.png');
    console.log('Successfully autocropped logo-horizontal.png');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}
cropLogo();
