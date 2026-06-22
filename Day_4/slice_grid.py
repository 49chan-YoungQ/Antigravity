import os
import sys

# Try importing PIL, if not present, attempt to install it
try:
    from PIL import Image
except ImportError:
    print("Pillow library not found. Installing Pillow...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def slice_grid():
    grid_img_path = r"C:\Users\yqhah\.gemini\antigravity-ide\brain\a5c9994d-20e4-4c65-b901-e73cc19fd48f\mbti_grid_1782127893251.png"
    output_dir = r"d:\12. Antigravity\Day_4\images"
    
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    if not os.path.exists(grid_img_path):
        print(f"Error: Grid image not found at {grid_img_path}")
        return
        
    print(f"Loading grid image from: {grid_img_path}")
    img = Image.open(grid_img_path)
    w, h = img.size
    print(f"Image resolution: {w}x{h}")
    
    # Calculate cell dimensions
    cell_w = w / 4
    cell_h = h / 4
    
    # MBTI types corresponding to the 4x4 grid cells
    mbti_grid = [
        ["istj", "isfj", "infj", "intj"],
        ["istp", "isfp", "infp", "intp"],
        ["estp", "esfp", "enfp", "entp"],
        ["estj", "esfj", "enfj", "entj"]
    ]
    
    for row in range(4):
        for col in range(4):
            left = int(col * cell_w)
            top = int(row * cell_h)
            right = int((col + 1) * cell_w)
            bottom = int((row + 1) * cell_h)
            
            # Crop single character cell
            cell = img.crop((left, top, right, bottom))
            
            mbti_type = mbti_grid[row][col]
            filename = f"{mbti_type}.png"
            filepath = os.path.join(output_dir, filename)
            
            # Save cell
            cell.save(filepath, "PNG")
            print(f"Successfully sliced & saved: {filename}")
            
    print("Image slicing completed successfully!")

if __name__ == "__main__":
    slice_grid()
