from PIL import Image, ImageChops

def trim(im):
    # Convert to RGB to easily find white/transparent background
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    # Bounding box of non-background
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def trim_white(im):
    # If the image has an alpha channel, we might need to handle it.
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        alpha = im.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            return im.crop(bbox)
        return im
    else:
        # Convert to grayscale and invert to find bbox of anything not pure white
        gray = im.convert('L')
        bw = gray.point(lambda x: 0 if x == 255 else 255, '1')
        bbox = bw.getbbox()
        if bbox:
            return im.crop(bbox)
        return im

def main():
    files = ['public/images/clients/client_5.png', 'public/images/clients/client_6.png']
    for file in files:
        im = Image.open(file)
        trimmed = trim_white(im)
        trimmed.save(file)
        print(f"Trimmed {file}")

if __name__ == '__main__':
    main()
