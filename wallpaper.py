from PIL import Image
import os
import random
import numpy as np

# Path to the directory containing images
image_directory = "src/assets/dalle/"

import os
import random
import numpy as np
from PIL import Image

# Function to adjust the alpha of lighter pixels in an image
def adjust_alpha_for_lighter_pixels(image):
    # Convert to RGBA (if not already in RGBA)
    # Convert the image to black and white while preserving transparency
    image = image.convert("RGBA")
    gray = image.convert("L")
    alpha = image.getchannel("A")
    image_bw = Image.merge("LA", (gray, alpha)).convert("RGBA")

    # Get the image data as a numpy array
    data = np.array(image_bw)

    # Loop through the image pixels and adjust alpha for lighter pixels
    for i in range(data.shape[0]):
        for j in range(data.shape[1]):
            r, g, b, a = data[i, j]
            # Since the image is grayscale, r, g, and b are the same.
            brightness = (r + g + b) / 3
            if brightness > 200:  # Adjust threshold as needed
                data[i, j, 3] = int(a * 0.2)  # Set alpha to 20% for lighter pixels

    # Convert the modified array back to an image
    final_image = Image.fromarray(data)

    
    return final_image
import glob
# Function to resize and combine images in a corrected 4:1 ratio layout
def create_corrected_linkedin_mosaic(image_directory, background_width, background_height):
    # List of images in the directory
    # image_files = [f for f in os.listdir(image_directory) if os.path.isfile(os.path.join(image_directory, f))]
    
    image_files= glob.glob(os.path.join(image_directory, "*.png")) + glob.glob(os.path.join(image_directory, "*.jpg"))
    
    
    image_files=[*image_files,*image_files,*image_files,*image_files]
    # image_files=[*image_files,*image_files]
    # Shuffle the image files randomly
    random.shuffle(image_files)
    
    
    # Calculate the number of images
    num_images = len(image_files)
    
    
    # Find rows and columns that satisfy the system
    rows = int((num_images / 4) ** 0.5)  # Estimate row count
    columns = 4 * rows  # Ensure columns are 4 times rows
    
    # If rows and columns do not exactly match the number of images, adjust the grid size
    while rows * columns < num_images:
        rows += 1
        columns = 4 * rows

    # If there are fewer images than required, duplicate images randomly
    if num_images < rows * columns:
        image_files *= (rows * columns // num_images) + 1  # Repeat images until we have enough
        image_files = image_files[:rows * columns]  # Ensure we only have the exact number of images needed
    
    # Adjust width and height for correct layout
    image_width = background_width // columns
    image_height = background_height // rows
    
    # Create a new blank background image
    new_background = Image.new("RGBA", (background_width, background_height), (255, 255, 255, 255))  # White background with full opacity

    images_used = 0
    image_spacing = 10  # Space between images (adjustable)

    for row in range(rows):
        for col in range(columns):
            
            # Get the image to place in the grid
            image_path = image_files[images_used]
            
            print(f"Processing image: {image_path}")
            img = Image.open(image_path)

            # Resize the image to fit within the grid space
            img_resized = img.resize((image_width, image_height), Image.Resampling.LANCZOS)

            # Apply random rotation: between -2 and +2 degrees
            # angle = random.randrange(-1, 1)
            # img_resized = img_resized.rotate(angle, expand=False)

            # Adjust the alpha for lighter pixels
            img_resized = adjust_alpha_for_lighter_pixels(img_resized)

            # Ensure the resized image has no alpha channel (convert to RGBA if needed)
            if img_resized.mode in ("RGBA", "LA") or (img_resized.mode == "P" and "transparency" in img_resized.info):
                img_resized = img_resized.convert("RGBA")

            # Calculate x and y offsets for the current grid position
            x_offset = col * image_width
            y_offset = row * image_height
            
            # Paste the resized image onto the background with transparency
            new_background.paste(img_resized, (x_offset, y_offset), img_resized)

            images_used += 1
            if images_used >= rows * columns:
                break

    # Save the corrected combined image
    new_background.save("src/assets/wall.png", "PNG", quality=95, optimize=True,dpi=(300,300))
    print("LinkedIn background image created successfully!")

# Usage example

# Usage example
create_corrected_linkedin_mosaic(image_directory, 1584, 396)
