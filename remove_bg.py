from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    newData = []
    for item in data:
        # Check if the pixel is near white
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            # Check for anti-aliasing edge blending (simple heuristic: if it's very close to white, make it fully transparent)
            newData.append((255, 255, 255, 0))
        else:
            # If it's a partially blended edge pixel, we could calculate alpha based on luminance, but let's stick to standard replacement for now
            # To handle aliasing better, we can adjust the alpha based on how close it is to white
            avg = (item[0] + item[1] + item[2]) / 3
            if avg > 200:
                # partial transparency for edges
                alpha = int(255 * (255 - avg) / 55)
                newData.append((item[0], item[1], item[2], alpha))
            else:
                newData.append((item[0], item[1], item[2], item[3]))

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == '__main__':
    in_file = r"C:\Users\HP\.gemini\antigravity\brain\e89e1c6a-8df3-4189-aaf1-c7110d28e8d5\media__1778269045154.png"
    out_file = r"c:\Users\HP\Documents\emea\public\logo.png"
    remove_white_bg(in_file, out_file)
