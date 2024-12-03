class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log(`Loading image: ${this.filename}`);
  }

  displayImage() {
    console.log(`Displaying image: ${this.filename}`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  loadImage() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
  }

  displayImage() {
    this.loadImage();
    this.realImage.displayImage();
  }
}

// Client code
const image = new ImageProxy("image1.jpg");
image.displayImage(); // Output: Loading image: image1.jpg
                      // Output: Displaying image: image1.jpg

image.displayImage(); // Output: Displaying image: image1.jpg (without loading again)