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

  # Extract folder and file name components from the input image path
  input_folder=$(dirname "$input_image")
  input_filename=$(basename "$input_image")

  # Extract the desired folder name by looking at everything before the underscore in the original file name
  folder_name="${input_filename%%_*}"
  folder_name="${folder_name,,}" # make lowercase
  file_name="${input_filename%%.*}"  # Removes everything after the last dot (.)
  file_name="${file_name##*_}"  # Removes everything before the last underscore (_)

  # Create an output image path based on the desired folder name and input image path
  output_folder="src/lib/images/${folder_name}"
  output_image="${output_folder}/${file_name}.webp"

  # Create the output folder if it doesn't exist
  mkdir -p "$output_folder"

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

  # Resize the image to desired resolution
  convert "$output_image" -resize 1024x1024 "$output_image"

  # Strip metadata from the image
  convert "$output_image" -strip "$output_image"

  echo "Image processing complete. Output saved as $output_image"
done
