import cv2
import numpy as np
import os

def crop_logos(image_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    # Read the image
    img = cv2.imread(image_path)
    if img is None:
        print(f"Error: Could not load image from {image_path}")
        return

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply a slight blur to reduce noise
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    
    # Threshold to create a binary mask of the logos (assuming white background)
    # The logos are darker than the white background
    _, thresh = cv2.threshold(blurred, 240, 255, cv2.THRESH_BINARY_INV)
    
    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    logo_idx = 0
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        
        # Filter out very small noise contours or full image bounds
        if w > 30 and h > 30 and w < img.shape[1] * 0.9 and h < img.shape[0] * 0.9:
            # Add padding
            pad = 10
            x1 = max(0, x - pad)
            y1 = max(0, y - pad)
            x2 = min(img.shape[1], x + w + pad)
            y2 = min(img.shape[0], y + h + pad)
            
            # Crop the logo
            logo_img = img[y1:y2, x1:x2]
            
            # Save the cropped logo
            output_path = os.path.join(output_dir, f"client_{logo_idx}.png")
            cv2.imwrite(output_path, logo_img)
            print(f"Saved {output_path}")
            logo_idx += 1

if __name__ == '__main__':
    crop_logos('public/images/clients_original.png', 'public/images/clients')
