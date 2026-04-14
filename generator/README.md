# Resonance Level Generator

A static web app for generating custom animal sets for the Resonance game.

## Features

- **Animal Creation**: Add animals with custom attributes (name, emoji, sex, species type, species, rhythm, phase)
- **Image Upload**: Upload custom images for animals using ImgBB free hosting
- **Automatic symbols Card**: Automatically pick a symbols card
- **Random Dominance Patterns**: Generates random dominance patterns
- **Species Management**: Tracks species names
- **Emoji Selector**: Choose from a comprehensive list of animal emojis
- **Local Storage**: Automatically saves your progress
- **Export Functionality**: Export your animal set as an Resonance Game Level Page (index.html)

## How to Use

1. **Add Animals**:
   - Fill in the animal details in the form
   - Select an emoji from the dropdown or enter your own
   - Choose sex (Male/Female)
   - Select species type (Carnivore/Herbivore)
   - Enter a species name (or select from existing)
   - Set rhythm (r) and phase (ph) values
   - Optionally upload an image (will be hosted on ImgBB)
   - Click "Add Animal"

2. **Edit Animals**:
   - Click "Edit" on any animal card to load it back into the form
   - Make your changes and click "Add Animal" again
   - Don't let an animal in the editor or it will be lost when leaving the page

3. **Regenerate Attributes**:
   - Use "Regenerate Dob" to get a new Symbol card as you wish
   - Use "Regenerate Dom" to get a new dominance pattern

4. **Manage Species**:
   - Species are automatically added when you create animals
   - Edit species display names in the Species section

5. **Export**:
   - Click "Download index.html" to generate a complete index.html file that can be used with the Resonance game

## Setup

Works in modern browsers with localStorage support. Designed to work as a standalone application.

To enable image upload functionality:

1. Sign up for a free ImgBB account at https://imgbb.com/
2. Get your API key from the ImgBB developer dashboard
3. Enter your API key in the generator interface (it will be saved in your browser)
4. The API key is stored in localStorage for convenience

Without an API key, you can still use all other features except image uploads.
