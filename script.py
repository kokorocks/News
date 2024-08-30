from freeGPT import Client
from PIL import Image
from io import BytesIO
import os
from random import choice
prompts=['a news article image','a cool looking cyber computer with binary and stuff like that','a fire with firetrucks all over the place','money','bitcoin','github','robot','a bog', 'a cat','a bunny','a random animal','a house']
realistic=['realistic','realistic','not realistic']
def save_image(image_data, filename):
    """
    Save the image data to a file in the specified folder.

    Args:
        image_data (bytes): The image data in bytes.
        folder (str): The folder where the image should be saved.
        filename (str): The file name to save the image as.
    """
    # Ensure the folder exists
    os.makedirs(folder, exist_ok=True)
    
    # Full path to save the image
    file_path = os.path.join(folder, filename)
    
    # Open and save the image
    image = Image.open(BytesIO(image_data))
    image.save(file_path)
    print(f"🤖: Image saved as {file_path}.")

# Define the folder where images will be saved
folder = "images" 
number = 0
for i in range(100):
    prompt = choice(prompts)+choice(realistic)
    try:
        # Replace "MODEL" with your specific model identifier or parameters if needed
        resp = Client.create_generation("pollinations", prompt)
        
        # Define a filename based on the prompt or a unique identifier
        filename = f"{number}.png"
        number=number+1
        # Save the image
        save_image(resp, filename)
        
        print(f"🤖: Image saved as {filename}.")
    except Exception as e:
        print(f"🤖: {e}")
