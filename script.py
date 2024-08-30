from freeGPT import Client
from PIL import Image
from io import BytesIO
import os

def save_image(image_data, filename):
    """
    Save the image data to a file.

    Args:
        image_data (bytes): The image data in bytes.
        filename (str): The file name to save the image as.
    """
    image = Image.open(BytesIO(image_data))
    image.save(filename)

while True:
    prompt = input("👦: ")
    try:
        # Replace "MODEL" with your specific model identifier or parameters if needed
        resp = Client.create_generation("MODEL", prompt)
        
        # Define a filename based on the prompt or a unique identifier
        filename = f"generated_image_{prompt.replace(' ', '_')}.png"
        
        # Save the image
        save_image(resp, filename)
        
        print(f"🤖: Image saved as {filename}.")
    except Exception as e:
        print(f"🤖: {e}")
