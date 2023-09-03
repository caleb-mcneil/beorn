#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "ImageMagick is not installed. Please install it first."
  exit 1
fi

# Check if at least one input image path is provided
if [ $# -lt 1 ]; then
  echo "Usage: $0 <input_image_path> [input_image_path2 ...]"
  exit 1
fi

# Loop through all provided input image paths
for input_image in "$@"; do
  # Ensure that the input image path is valid
  if [ ! -e "$input_image" ]; then
    echo "Input image '$input_image' does not exist. Skipping."
    continue
  fi

  # Create an output image name based on the input image name
  output_image="${input_image%.png}_processed.png"

  # Crop the image to its contents
  convert "$input_image" -trim +repage "$output_image"

  # Get the dimensions of the cropped image
  width=$(identify -format "%w" "$output_image")
  height=$(identify -format "%h" "$output_image")

  # Determine the target square size
  if [ "$width" -gt "$height" ]; then
    size="$width"
  else
    size="$height"
  fi

  # Pad the image to a square aspect ratio
  convert "$output_image" -gravity center -background "rgba(0,0,0,0)" -extent "${size}x${size}" "$output_image"

  # Add a 50px border around the image
  convert "$output_image" -bordercolor "rgba(0,0,0,0)" -border 20x20 "$output_image"

  # Resize the image to 512x512
  convert "$output_image" -resize 512x512 "$output_image"

  # Strip metadata from the image
  convert "$output_image" -strip "$output_image"

  echo "Image processing complete. Output saved as $output_image"
done
