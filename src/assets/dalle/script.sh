#!/bin/bash

# Directory containing the .webp files
INPUT_DIR="/data/PERSONALPROJECTS/BIODIMENSIONAL/publications/src/assets/dalle"

# List of files to convert (adjust as needed)
FILES=(
 "-24.1.webp"
)

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "Error: ImageMagick (convert) is not installed. Install it first."
  exit 1
fi

# Convert all specified .webp files to .png
for file in "${FILES[@]}"; do
  input_file="${INPUT_DIR}/${file}"
  output_file="${INPUT_DIR}/${file%.webp}.png"

  if [ -f "$input_file" ]; then
    echo "Converting: $input_file → $output_file"
    convert "$input_file" "$output_file"
  else
    echo "Warning: File not found: $input_file"
  fi
done

echo "Conversion complete!"