
const animals_emoji = [
  "🐵",
  "🐒",
  "🦍",
  "🦧",
  "🐶",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐩",
  "🐺",
  "🦊",
  "🦝",
  "🐱",
  "🐈",
  "🐈‍⬛",
  "🦁",
  "🐯",
  "🐅",
  "🐆",
  "🐴",
  "🫎",
  "🫏",
  "🐎",
  "🦄",
  "🦓",
  "🦌",
  "🦬",
  "🐮",
  "🐂",
  "🐃",
  "🐄",
  "🐷",
  "🐖",
  "🐗",
  "🐽",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐇",
  "🐿️",
  "🦫",
  "🦔",
  "🦇",
  "🐻",
  "🐻‍❄️",
  "🐨",
  "🐼",
  "🦥",
  "🦦",
  "🦨",
  "🦘",
  "🦡",
  "🐾",
  "🦃",
  "🐔",
  "🐓",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🕊️",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦤",
  "🪶",
  "🦩",
  "🦚",
  "🦜",
  "🪽",
  "🐦‍⬛",
  "🪿",
  "🐦‍🔥",
  "🐸",
  "🐊",
  "🐢",
  "🦎",
  "🐍",
  "🐲",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🫍",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🐚",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🪲",
  "🐞",
  "🦗",
  "🪳",
  "🕷️",
  "🦂",
  "🦟",
  "🪰",
  "🪱",
  "🦠"
];

// Resonance Level Generator - Configuration
// ==========================================
// To enable image uploads to ImgBB:
// 1. Get a free API key from https://imgbb.com/
// 2. The API key will be stored in localStorage for convenience
// 3. Images will be uploaded with 1-year expiration
let IMGBB_API_KEY = localStorage.getItem('imgbbApiKey');

// Available dob cards (30 unique cards for Dobble property) - matching set1 format
const DOB_CARDS = [
  [0, 1, 2, 3, 4, 5], [0, 6, 11, 16, 21, 26], [0, 7, 12, 17, 22, 27],
  [0, 8, 13, 18, 23, 28], [0, 9, 14, 19, 24, 29], [0, 10, 15, 20, 25, 30],
  [1, 6, 12, 18, 24, 30], [1, 7, 13, 19, 25, 26], [1, 8, 14, 20, 21, 27],
  [1, 9, 15, 16, 22, 28], [1, 10, 11, 17, 23, 29], [2, 6, 13, 20, 22, 29],
  [2, 7, 14, 16, 23, 30], [2, 8, 15, 17, 24, 26], [2, 9, 11, 18, 25, 27],
  [2, 10, 12, 19, 21, 28], [3, 6, 14, 17, 25, 28], [3, 7, 15, 18, 21, 29],
  [3, 8, 11, 19, 22, 30], [3, 9, 12, 20, 23, 26], [3, 10, 13, 16, 24, 27],
  [4, 6, 15, 19, 23, 27], [4, 7, 11, 20, 24, 28], [4, 8, 12, 16, 25, 29],
  [4, 9, 13, 17, 21, 30], [4, 10, 14, 18, 22, 26], [5, 6, 7, 8, 9, 10],
  [5, 11, 12, 13, 14, 15], [5, 16, 17, 18, 19, 20], [5, 21, 22, 23, 24, 25],
  [5, 26, 27, 28, 29, 30]
];

// Game state
let animals = [];
let species = {};
let usedDobCards = [];
let achievements = [];
let currentEditingAnimalIndex = null;


// DOM elements
const apiKeyInput = document.getElementById('api-key-input');
const apiKeyStatus = document.getElementById('api-key-status');
const saveApiKeyBtn = document.getElementById('save-api-key-btn');
const imagesPathInput = document.getElementById('images-path-input');
const animalNameInput = document.getElementById('animal-name');
const animalEmojiInput = document.getElementById('animal-emoji');
const animalEmojiSelect = document.getElementById('animal-emoji-select');
const animalSexSelect = document.getElementById('animal-sex');
const animalSpSelect = document.getElementById('animal-sp');
const animalSpxSelect = document.getElementById('animal-spx-select');
const animalSpxInput = document.getElementById('animal-spx-input');
const animalRInput = document.getElementById('animal-r');
const animalPhInput = document.getElementById('animal-ph');
const animalHeadXInput = document.getElementById('animal-head-x');
const animalHeadYInput = document.getElementById('animal-head-y');
const animalHeadRInput = document.getElementById('animal-head-r');
const animalImageInput = document.getElementById('animal-image');
const animalImageUrlInput = document.getElementById('animal-image-url');
const imageUploadStatus = document.getElementById('image-upload-status');
const existingImageSection = document.getElementById('existing-image-section');
const existingImageLink = document.getElementById('existing-image-link');
const clearExistingImageBtn = document.getElementById('clear-existing-image-btn');
const addAnimalBtn = document.getElementById('add-animal-btn');
const animalsList = document.getElementById('animals-list');
const speciesList = document.getElementById('species-list');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const generatedCode = document.getElementById('generated-code');

// Head Editor Modal elements
const headEditorModal = document.getElementById('head-editor-modal');
const headEditorTitle = document.getElementById('head-editor-title');
const headEditorAnimalName = document.getElementById('head-editor-animal-name');
const headEditorSvg = document.getElementById('head-editor-svg');
const closeHeadEditorBtn = document.getElementById('close-head-editor');
const cancelHeadEditorBtn = document.getElementById('cancel-head-editor');
const confirmHeadEditorBtn = document.getElementById('confirm-head-editor');
const tlXDisplay = document.getElementById('tl-x');
const tlYDisplay = document.getElementById('tl-y');
const brXDisplay = document.getElementById('br-x');
const brYDisplay = document.getElementById('br-y');
const centerXDisplay = document.getElementById('center-x');
const centerYDisplay = document.getElementById('center-y');
const radiusDisplay = document.getElementById('radius');

// Load from localStorage
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('resonanceGeneratorData');
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      animals = data.animals || [];
      species = data.species || {};
      usedDobCards = data.usedDobCards || [];
      achievements = data.achievements || [];

      updateUI();
      updateSpeciesDropdown();
    } catch (e) {
      console.error('Error loading data:', e);
    }
  }
}

// Save API key to localStorage
function saveApiKey(key) {
  IMGBB_API_KEY = key;
  localStorage.setItem('imgbbApiKey', key);
}

// Save to localStorage
function saveToLocalStorage() {
  const data = {
    animals,
    species,
    usedDobCards,
    achievements
  };
  localStorage.setItem('resonanceGeneratorData', JSON.stringify(data));
}

// Generate random dob card
function getRandomDobCard() {
  if (usedDobCards.length >= DOB_CARDS.length) {
    return null; // All cards used
  }

  let availableCards = DOB_CARDS.filter(card =>
    !usedDobCards.some(used => arraysEqual(used, card))
  );

  if (availableCards.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableCards.length);
  const selectedCard = availableCards[randomIndex];
  usedDobCards.push(selectedCard);
  return selectedCard;
}

// Generate random dom array
function generateRandomDom() {
  return Array(6).fill().map(() => Math.random() < 0.5 ? -1 : 1);
}

// Upload image to ImgBB
async function uploadImageToImgBB(file) {
  if (!file) return null;

  imageUploadStatus.textContent = 'Uploading image...';

  try {
    const formData = new FormData();
    formData.append('image', file);

    // ImgBB free API endpoint with API key and 1-year expiration (31536000 seconds)
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}&expiration=31536000`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success && data.data && data.data.url) {
      imageUploadStatus.textContent = '✓ Image uploaded successfully!';
      return data.data.url;
    } else {
      imageUploadStatus.textContent = '✗ Upload failed: ' + (data.error.message || 'Unknown error');
      console.error('ImgBB upload error:', data);
      return null;
    }
  } catch (error) {
    imageUploadStatus.textContent = '✗ Upload error: ' + error.message;
    console.error('Upload exception:', error);
    return null;
  }
}

// Helper function to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Add animal to the list
async function addAnimal() {
  const name = animalNameInput.value.trim();
  const emoji = animalEmojiInput.value.trim();
  const sex = animalSexSelect.value;
  const sp = animalSpSelect.value;
  const spx = animalSpxInput.value.trim() || animalSpxSelect.value;
  const r = parseInt(animalRInput.value) || 6;
  const ph = parseFloat(animalPhInput.value) || 0.0;
  
  // Get head circle values (optional) - now in pixels
  const headX = animalHeadXInput.value ? parseInt(animalHeadXInput.value) : null;
  const headY = animalHeadYInput.value ? parseInt(animalHeadYInput.value) : null;
  const headR = animalHeadRInput.value ? parseInt(animalHeadRInput.value) : null;

  if (!name || !emoji || !spx) {
    alert('Please fill in all required fields (Name, Emoji, Species)');
    return;
  }

  // Get random dob and dom
  const dob = getRandomDobCard();
  const dom = generateRandomDom();

  if (!dob) {
    alert('All Dobble cards have been used! Cannot add more animals.');
    return;
  }

  // Handle image upload
  let imageUrl = null;
  if (animalImageInput.files && animalImageInput.files[0]) {
    imageUploadStatus.textContent = 'Preparing to upload...';
    imageUrl = await uploadImageToImgBB(animalImageInput.files[0]);
  }

  const animal = {
    name,
    emoji,
    sex,
    sp,
    spx,
    r,
    ph,
    dob,
    dom,
    cost: 0 // Default cost
  };

  // Add head circle if all values are provided (now in pixels)
  if (headX !== null && headY !== null && headR !== null) {
    animal.head = [headX, headY, headR];
  }

  // Add image URL - priority: uploaded image > manual URL > existing image from edit
  if (imageUrl) {
    animal.image = imageUrl;
  } else if (animalImageUrlInput.value.trim()) {
    animal.image = animalImageUrlInput.value.trim();
  }

  animals.push(animal);

  // Add species if not exists
  if (!species[spx]) {
    species[spx] = spx.charAt(0).toUpperCase() + spx.slice(1);
  }

  // Clear form
  animalNameInput.value = '';
  animalEmojiInput.value = '';
  animalRInput.value = '6';
  animalPhInput.value = '0.0';
  animalHeadXInput.value = '';
  animalHeadYInput.value = '';
  animalHeadRInput.value = '';
  animalImageInput.value = '';
  animalImageUrlInput.value = '';
  imageUploadStatus.textContent = '';
  existingImageSection.style.display = 'none';

  updateUI();
  updateSpeciesDropdown();
  saveToLocalStorage();
}

// Update emoji dropdown
function updateEmojiDropdown() {
  animalEmojiSelect.innerHTML = '<option value="">Select emoji</option>';

  animals_emoji.forEach(emoji => {
    const option = document.createElement('option');
    option.value = emoji;
    option.textContent = emoji;
    animalEmojiSelect.appendChild(option);
  });

  // When emoji is selected from dropdown, update the input
  animalEmojiSelect.addEventListener('change', function() {
    if (this.value) {
      animalEmojiInput.value = this.value;
    }
  });
}

// Update species dropdown
function updateSpeciesDropdown() {
  animalSpxSelect.innerHTML = '<option value="">Select or create</option>';

  Object.keys(species).forEach(spx => {
    const option = document.createElement('option');
    option.value = spx;
    option.textContent = `${spx} (${species[spx]})`;
    animalSpxSelect.appendChild(option);
  });
}

// Update UI
function updateUI() {
  // Update animals list
  animalsList.innerHTML = '<h2>Added Animals</h2>';

  // Get the images path from the input field
  const imagesPath = imagesPathInput.value.trim() || 'set0/png/';

  animals.forEach((animal, index) => {
    const animalCard = document.createElement('div');
    animalCard.className = 'animal-card';

    let imageHtml = '';
    if (animal.image) {
      imageHtml = `<div><strong>Image:</strong><br><a href="${animal.image}" target="_blank" class="animal-thumbnail-link"><img src="${animal.image}" class="animal-thumbnail"></a></div>`;
    } else {
      // Fallback to default naming convention
      let defaultImageUrl = `${imagesPath}${animal.spx}_${animal.sex.toLowerCase()}.png`;
      if (!(defaultImageUrl.startsWith('http://') || defaultImageUrl.startsWith('https://'))) {
        // Prepend base URL for relative paths
        defaultImageUrl = 'https://ser.arph.org/' + defaultImageUrl;
      }
      imageHtml = `<div><strong>Default Image:</strong><br><a href="${defaultImageUrl}" target="_blank" class="animal-thumbnail-link"><img src="${defaultImageUrl}" class="animal-thumbnail"></a></div>`;
    }

    let headHtml = '';
    if (animal.head && animal.head.length >= 3) {
      const headCoords = animal.head;
      const centerX = headCoords[0];
      const centerY = headCoords[1];
      const radius = headCoords[2];
      const imageUrl = animal.image || getDefaultImageUrl(animal);
      
      // Create SVG preview with viewBox focused on the head circle
      // Use same coordinate system as editor (500x500)
      const viewBoxX = centerX - radius;
      const viewBoxY = centerY - radius;
      const viewBoxSize = radius * 2;
      
      headHtml = `
        <div><strong>Head:</strong> [${headCoords.join(', ')}]
          <div style="margin-top: 5px; display: inline-block;">
            <div style="width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 2px solid #ddd; background: white; display: inline-block; vertical-align: middle;">
              <svg width="64" height="64" viewBox="${viewBoxX} ${viewBoxY} ${viewBoxSize} ${viewBoxSize}" style="display: block;">
                <image href="${imageUrl}" width="500" height="500" preserveAspectRatio="xMidYMid" style="opacity: 0.9;"/>
              </svg>
            </div>
          </div>
        </div>
      `;
    }

    animalCard.innerHTML = `
      <div class="animal-card-header">
        <span>${animal.emoji} ${animal.name}</span>
        <div>
          <button class="small-btn" onclick="editAnimal(${index})">Edit</button>
          <button class="small-btn" onclick="editHead(${index})">Head</button>
          <button class="small-btn" onclick="regenerateDob(${index})">Regenerate Dob</button>
          <button class="small-btn" onclick="regenerateDom(${index})">Regenerate Dom</button>
          <button class="small-btn" onclick="deleteAnimal(${index})">Delete</button>
        </div>
      </div>
      <div><strong>Sex:</strong> ${animal.sex}</div>
      <div><strong>Type:</strong> ${animal.sp}</div>
      <div><strong>Species:</strong> ${animal.spx}</div>
      <div><strong>Rhythm:</strong> ${animal.r}</div>
      <div><strong>Phase:</strong> ${animal.ph}</div>
      ${imageHtml}
      ${headHtml}
      <div><strong>Dob:</strong> [${animal.dob.join(', ')}]</div>
      <div><strong>Dom:</strong> [${animal.dom.join(', ')}]</div>
    `;
    animalsList.appendChild(animalCard);
  });

  // Update species list
  speciesList.innerHTML = '';
  Object.entries(species).forEach(([key, value]) => {
    const speciesItem = document.createElement('div');
    speciesItem.className = 'species-item';
    speciesItem.innerHTML = `
      <span class="species-key">${key}:</span>
      <input type="text" value="${value}"
             onchange="updateSpecies('${key}', this.value)">
    `;
    speciesList.appendChild(speciesItem);
  });

  // Update download button state
  downloadBtn.disabled = animals.length === 0;

  // Generate code
  generateExportCode();
}

// Edit animal
function editAnimal(index) {
  const animal = animals[index];
  animalNameInput.value = animal.name;
  animalEmojiInput.value = animal.emoji;
  animalSexSelect.value = animal.sex;
  animalSpSelect.value = animal.sp;
  animalSpxInput.value = animal.spx;
  animalRInput.value = animal.r;
  animalPhInput.value = animal.ph;

  // Handle head circle
  if (animal.head && animal.head.length >= 3) {
    animalHeadXInput.value = animal.head[0];
    animalHeadYInput.value = animal.head[1];
    animalHeadRInput.value = animal.head[2];
  } else {
    animalHeadXInput.value = '';
    animalHeadYInput.value = '';
    animalHeadRInput.value = '';
  }

  // Handle existing image
  if (animal.image) {
    animalImageUrlInput.value = animal.image;
    existingImageLink.href = animal.image;
    existingImageSection.style.display = 'block';
  } else {
    animalImageUrlInput.value = '';
    existingImageSection.style.display = 'none';
  }

  // Remove the animal
  usedDobCards = usedDobCards.filter(card => !arraysEqual(card, animal.dob));
  animals.splice(index, 1);

  updateUI();
  saveToLocalStorage();
}

// Delete animal
function deleteAnimal(index) {
  if (confirm('Are you sure you want to delete this animal?')) {
    const animal = animals[index];
    usedDobCards = usedDobCards.filter(card => !arraysEqual(card, animal.dob));
    animals.splice(index, 1);

    updateUI();
    saveToLocalStorage();
  }
}

// Regenerate dob for animal
function regenerateDob(index) {
  const oldDob = animals[index].dob;
  usedDobCards = usedDobCards.filter(card => !arraysEqual(card, oldDob));

  const newDob = getRandomDobCard();
  if (newDob) {
    animals[index].dob = newDob;
    updateUI();
    saveToLocalStorage();
  } else {
    alert('Cannot regenerate Dob - all cards are used!');
    usedDobCards.push(oldDob); // Put it back
  }
}

// Regenerate dom for animal
function regenerateDom(index) {
  animals[index].dom = generateRandomDom();
  updateUI();
  saveToLocalStorage();
}

// Update species name
function updateSpecies(key, newValue) {
  species[key] = newValue;
  saveToLocalStorage();
}

// Generate export code
function generateExportCode() {
  const animalsCode = animals.map(animal => {
    let animalProps = `    { name: '${animal.name}', emoji: '${animal.emoji}', sex: '${animal.sex}', sp: '${animal.sp}', spx: '${animal.spx}', r: ${animal.r}, ph: ${animal.ph}, dob: [${animal.dob.join(', ')}], dom: [${animal.dom.join(', ')}], cost: ${animal.cost}`;

    if (animal.head && animal.head.length >= 3) {
      animalProps += `, head: [${animal.head.join(', ')}]`;
    }

    if (animal.image) {
      animalProps += `, image: '${animal.image}'`;
    }

    animalProps += ' }';
    return animalProps;
  }).join(',\n');

  const speciesCode = Object.entries(species).map(([key, value]) => {
    return `    ${key}: '${value}'`;
  }).join(',\n');

  const code = `let ALL_ANIMALS = [
${animalsCode}
];

let SPECIES = {
${speciesCode}
};

let SET_ACHIEVEMENTS = ${JSON.stringify(achievements, null, 2)};`;

  generatedCode.value = code;
}

// Generate a complete index.html file like set1/index.html
function generateIndexHTML() {
  if (animals.length === 0) {
    alert('No animals to export!');
    return null;
  }

  // Get the images path from the input field
  const imagesPath = imagesPathInput.value.trim() || 'set0/png/';

  // Generate animals array
  const animalsArray = animals.map(animal => {
    const baseProps = `            { name: '${animal.name}', emoji: '${animal.emoji}', sex: '${animal.sex}', sp: '${animal.sp}', spx: '${animal.spx}', r: ${animal.r}, ph: ${animal.ph}, dob: [${animal.dob.join(', ')}], dom: [${animal.dom.join(', ')}], cost: ${animal.cost}`;

    let headProp = '';
    if (animal.head && animal.head.length >= 3) {
      headProp = `, head: [${animal.head.join(', ')}]`;
    }

    let imageProp = '';
    if (animal.image) {
      imageProp = `, image: '${animal.image}'`;
    }

    return baseProps + headProp + imageProp + ' }';
  }).join(',\n');

  // Generate species object
  const speciesEntries = Object.entries(species).map(([key, value]) => {
    return `            ${key}: '${value}'`;
  }).join(',\n');

  // Generate achievements array
  const achievementsArray = achievements.map(ach => {
    return `            ${JSON.stringify(ach)}`;
  }).join(',\n');

  // Create the complete HTML template
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Set</title>
    <script>
        /*

        You can have up to 30 animals in a set

        For every animal,
        - pick a dobble card (a line in the output below)
        - fill the dom array with the dominance pattern you want for this animal (1 if it dominates the other animal on the card, -1 if it's dominated)
        - species, sex F/M, diet herb/carn, r=rhythm (2..15) and ph=phase (0..0.99) are up to you
        - you may also define an image property with the URL of the animal's image to overwrite te default spx_sex.png
        - you may also define a head property [x, y, radius] to draw a circle around the animal's head

        You can create your own species, but make sure to update the "species" object below with the species name

        Dobble cards are automatically assigned by the generator

        */
        const animals = [
${animalsArray}
        ];

        const species = {
${speciesEntries}
        };

        // you can create custom achievements for your set, just make sure to give them an id
        // that doesn't conflict with the main game's achievements
        // and include a "check string" as with the examples bellow

        // Did you know an achievement can have its own custom image?
        // You can add an "image" property with the URL of the image you want to use
        // (e.g. upload it somewhere or encode it in base64) and it will be displayed
        //  in the achievement card when unlocked
        let SET_ACHIEVEMENTS = [
${achievementsArray}
        ];

        // images for the animals should be placed in the folder defined below
        // Naming convention for images: {images_path}/{animal.spx}_{animal.sex}.png or {images_path}/{animal.image}
        const images_path = '${imagesPath}';
        // set1 is the default location; but it could be anywhere on the web as long as the URLs are correct.

        // Don't edit below this line unless you know what you're doing
        window.parent.postMessage({
                animals: animals,
                species: species,
                images_path: images_path,
                SET_ACHIEVEMENTS: SET_ACHIEVEMENTS
        }, '*');
    </script>
</head>

<body>
    <h1>Custom Animal Set</h1>
    <p>This page is meant to be loaded in the "Resonance" game</p>
    <p>Generated with the Resonance Level Generator</p>
</body>

</html>`;
}

// Generate and download the index.html file
function downloadIndexHTML() {
  const htmlContent = generateIndexHTML();
  if (!htmlContent) return;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'index.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert('index.html file generated and downloaded!');
}

// Clear all data
function clearAll() {
  if (confirm('Are you sure you want to clear all data?')) {
    animals = [];
    species = {};
    usedDobCards = [];
    achievements = [];

    // Clear form
    animalNameInput.value = '';
    animalEmojiInput.value = '';
    animalRInput.value = '6';
    animalPhInput.value = '0.0';

    updateUI();
    updateSpeciesDropdown();
    saveToLocalStorage();
  }
}

// Event listeners
addAnimalBtn.addEventListener('click', addAnimal);
downloadBtn.addEventListener('click', downloadIndexHTML);
clearBtn.addEventListener('click', clearAll);

// Edit/Apply buttons for code editing
document.getElementById('edit-btn').addEventListener('click', enableCodeEditing);
document.getElementById('apply-btn').addEventListener('click', applyCodeChanges);

// Event listener for clear existing image button
clearExistingImageBtn.addEventListener('click', function() {
  animalImageUrlInput.value = '';
  existingImageSection.style.display = 'none';
});

// Head Editor Modal event listeners
closeHeadEditorBtn.addEventListener('click', closeHeadEditor);
cancelHeadEditorBtn.addEventListener('click', closeHeadEditor);
confirmHeadEditorBtn.addEventListener('click', confirmHeadEdit);

// Close modal when clicking outside
headEditorModal.addEventListener('click', function(e) {
  if (e.target === headEditorModal) {
    closeHeadEditor();
  }
});

// Initialize
loadFromLocalStorage();
updateEmojiDropdown();
updateSpeciesDropdown();

// Initialize API key UI
if (IMGBB_API_KEY) {
  apiKeyInput.value = '********' + IMGBB_API_KEY.slice(-4); // Show last 4 chars
  apiKeyStatus.textContent = '✓ API key saved';
  apiKeyStatus.style.color = '#4CAF50';
} else {
  apiKeyStatus.textContent = 'No API key set - image uploads will be disabled';
  apiKeyStatus.style.color = '#f44336';
}

// Event listener for API key save
saveApiKeyBtn.addEventListener('click', function() {
  const key = apiKeyInput.value.trim();
  if (key) {
    saveApiKey(key);
    apiKeyInput.value = '********' + key.slice(-4);
    apiKeyStatus.textContent = '✓ API key saved successfully!';
    apiKeyStatus.style.color = '#4CAF50';
  } else {
    apiKeyStatus.textContent = '✗ Please enter a valid API key';
    apiKeyStatus.style.color = '#f44336';
  }
});

// Head Editor functionality
let tlHandle = null;
let brHandle = null;
let imageElement = null;
let svgWidth = 400;
let svgHeight = 400;

function editHead(index) {
  currentEditingAnimalIndex = index;
  const animal = animals[index];
  
  headEditorAnimalName.textContent = `${animal.emoji} ${animal.name}`;
  
  // Clear and setup SVG
  headEditorSvg.innerHTML = '';
  headEditorSvg.style.backgroundColor = '#f5f5f5';
  
  // Use default dimensions for the editor
  svgWidth = 500;
  svgHeight = 500;
  headEditorSvg.setAttribute('width', svgWidth);
  headEditorSvg.setAttribute('height', svgHeight);
  
  // Default values in pixels (center of editor, reasonable radius)
  let centerX = svgWidth / 2;
  let centerY = svgHeight / 2;
  let radius = Math.min(svgWidth, svgHeight) / 3;
  
  // If animal already has head data, use it
  if (animal.head && animal.head.length >= 3) {
    centerX = animal.head[0];
    centerY = animal.head[1];
    radius = animal.head[2];
  }
  
  // Calculate bounding box from circle
  const tlX = Math.max(0, centerX - radius);
  const tlY = Math.max(0, centerY - radius);
  const brX = Math.min(svgWidth, centerX + radius);
  const brY = Math.min(svgHeight, centerY + radius);
  
  const imageUrl = animal.image || getDefaultImageUrl(animal);
  
  // Create image element
  imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  imageElement.setAttribute('href', imageUrl);
  imageElement.setAttribute('x', '0');
  imageElement.setAttribute('y', '0');
  imageElement.setAttribute('width', svgWidth);
  imageElement.setAttribute('height', svgHeight);
  imageElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  imageElement.style.opacity = '0.7';
  headEditorSvg.appendChild(imageElement);
  
  // Create top-left handle (red)
  tlHandle = createHandle('tl', tlX, tlY, 'red');
  
  // Create bottom-right handle (blue)
  brHandle = createHandle('br', brX, brY, 'blue');
  
  // Create circle
  updateCircle(tlX, tlY, brX, brY);
  
  // Update displays with pixel coordinates
  updateDisplays(tlX, tlY, brX, brY);
  
  // Show modal
  headEditorModal.style.display = 'block';
}


function getDefaultImageUrl(animal) {
  const imagesPath = imagesPathInput.value.trim() || 'set0/png/';
  let defaultImageUrl = `${imagesPath}${animal.spx}_${animal.sex.toLowerCase()}.png`;
  if (!(defaultImageUrl.startsWith('http://') || defaultImageUrl.startsWith('https://'))) {
    defaultImageUrl = 'https://ser.arph.org/' + defaultImageUrl;
  }
  return defaultImageUrl;
}

function createHandle(type, x, y, color) {
  const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  handle.setAttribute('cx', x);
  handle.setAttribute('cy', y);
  handle.setAttribute('r', '8');
  handle.setAttribute('fill', color);
  handle.setAttribute('stroke', 'white');
  handle.setAttribute('stroke-width', '2');
  handle.setAttribute('cursor', 'move');
  handle.setAttribute('data-type', type);
  
  handle.addEventListener('mousedown', startDrag);
  headEditorSvg.appendChild(handle);
  
  return handle;
}

function startDrag(e) {
  e.preventDefault();
  const handle = e.target;
  const startX = e.clientX;
  const startY = e.clientY;
  const startCx = parseFloat(handle.getAttribute('cx'));
  const startCy = parseFloat(handle.getAttribute('cy'));
  const handleType = handle.getAttribute('data-type');
  
  function moveDrag(e) {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    let newX = startCx + dx;
    let newY = startCy + dy;
    
    // Constrain to SVG bounds
    newX = Math.max(0, Math.min(svgWidth, newX));
    newY = Math.max(0, Math.min(svgHeight, newY));
    
    handle.setAttribute('cx', newX);
    handle.setAttribute('cy', newY);
    
    // Update the other handle if needed to maintain order
    if (handleType === 'tl' && brHandle) {
      const brX = parseFloat(brHandle.getAttribute('cx'));
      const brY = parseFloat(brHandle.getAttribute('cy'));
      if (newX > brX) newX = brX;
      if (newY > brY) newY = brY;
      handle.setAttribute('cx', newX);
      handle.setAttribute('cy', newY);
    } else if (handleType === 'br' && tlHandle) {
      const tlX = parseFloat(tlHandle.getAttribute('cx'));
      const tlY = parseFloat(tlHandle.getAttribute('cy'));
      if (newX < tlX) newX = tlX;
      if (newY < tlY) newY = tlY;
      handle.setAttribute('cx', newX);
      handle.setAttribute('cy', newY);
    }
    
    // Update circle and displays
    const tlX = parseFloat(tlHandle.getAttribute('cx'));
    const tlY = parseFloat(tlHandle.getAttribute('cy'));
    const brX = parseFloat(brHandle.getAttribute('cx'));
    const brY = parseFloat(brHandle.getAttribute('cy'));
    
    updateCircle(tlX, tlY, brX, brY);
    updateDisplays(tlX / svgWidth, tlY / svgHeight, brX / svgWidth, brY / svgHeight);
  }
  
  function endDrag() {
    document.removeEventListener('mousemove', moveDrag);
    document.removeEventListener('mouseup', endDrag);
  }
  
  document.addEventListener('mousemove', moveDrag);
  document.addEventListener('mouseup', endDrag);
}

function updateCircle(tlX, tlY, brX, brY) {
  // Remove existing circle
  const existingCircle = headEditorSvg.querySelector('circle[data-type="head"]');
  if (existingCircle) {
    headEditorSvg.removeChild(existingCircle);
  }
  
  // Calculate circle parameters in pixel coordinates
  const centerX = (tlX + brX) / 2;
  const centerY = (tlY + brY) / 2;
  const radius = Math.min(brX - tlX, brY - tlY) / 2;
  
  // Create new circle using SVG namespace
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', centerX);
  circle.setAttribute('cy', centerY);
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', 'green');
  circle.setAttribute('stroke-width', '3');
  circle.setAttribute('stroke-dasharray', '5,5');
  circle.setAttribute('data-type', 'head');
  headEditorSvg.appendChild(circle);
}

function updateDisplays(tlX, tlY, brX, brY) {
  // Update handle position displays (now in pixels)
  tlXDisplay.textContent = Math.round(tlX);
  tlYDisplay.textContent = Math.round(tlY);
  brXDisplay.textContent = Math.round(brX);
  brYDisplay.textContent = Math.round(brY);
  
  // Calculate and update circle parameters (in pixels)
  const centerX = (tlX + brX) / 2;
  const centerY = (tlY + brY) / 2;
  const radius = Math.min(brX - tlX, brY - tlY) / 2;
  
  centerXDisplay.textContent = Math.round(centerX);
  centerYDisplay.textContent = Math.round(centerY);
  radiusDisplay.textContent = Math.round(radius);
}

function confirmHeadEdit() {
  if (currentEditingAnimalIndex === null) return;
  
  // Get pixel coordinates directly
  const tlX = parseFloat(tlHandle.getAttribute('cx'));
  const tlY = parseFloat(tlHandle.getAttribute('cy'));
  const brX = parseFloat(brHandle.getAttribute('cx'));
  const brY = parseFloat(brHandle.getAttribute('cy'));
  
  // Calculate circle parameters in pixels
  const centerX = (tlX + brX) / 2;
  const centerY = (tlY + brY) / 2;
  const radius = Math.min(brX - tlX, brY - tlY) / 2;
  
  // Update animal with pixel coordinates
  animals[currentEditingAnimalIndex].head = [centerX, centerY, radius];
  
  // Close modal
  closeHeadEditor();
  
  // Update UI
  updateUI();
  saveToLocalStorage();
}

function closeHeadEditor() {
  headEditorModal.style.display = 'none';
  currentEditingAnimalIndex = null;
}

// Expose functions to global scope for HTML buttons
window.editAnimal = editAnimal;
window.deleteAnimal = deleteAnimal;
window.regenerateDob = regenerateDob;
window.regenerateDom = regenerateDom;
window.updateSpecies = updateSpecies;
window.editHead = editHead;

// Edit/Apply functionality for code editing
function enableCodeEditing() {
  const generatedCode = document.getElementById('generated-code');
  const editBtn = document.getElementById('edit-btn');
  const applyBtn = document.getElementById('apply-btn');
  
  generatedCode.readOnly = false;
  generatedCode.style.backgroundColor = '#fffde7'; // Light yellow to indicate editable
  editBtn.style.display = 'none';
  applyBtn.style.display = 'inline-block';
  generatedCode.focus();
}

function applyCodeChanges() {
  const generatedCode = document.getElementById('generated-code');
  const editBtn = document.getElementById('edit-btn');
  const applyBtn = document.getElementById('apply-btn');
  
  try {
    // Evaluate the code to get the new state
    const code = generatedCode.value;
    
    // Create a function that will execute the code and return the variables
    const extractFunction = new Function(code + "\n" + "return { ALL_ANIMALS, SPECIES };");
    const result = extractFunction();
    
    if (!result || !result.ALL_ANIMALS || !result.SPECIES) {
      throw new Error('Could not extract ALL_ANIMALS and SPECIES from the code');
    }
    
    // Update the state
    animals = result.ALL_ANIMALS.map(animal => ({
      ...animal,
      // Ensure we have all required properties
      name: animal.name || 'Unknown',
      emoji: animal.emoji || '🐾',
      sex: animal.sex || 'M',
      sp: animal.sp || 'herb',
      spx: animal.spx || 'unknown',
      r: animal.r || 6,
      ph: animal.ph || 0.0,
      dob: animal.dob || [0, 1, 2, 3, 4, 5],
      dom: animal.dom || generateRandomDom(),
      cost: animal.cost || 100,
      head: animal.head,
      image: animal.image
    }));
    
    species = result.SPECIES;
    
    // Reconstruct usedDobCards from animals' dob properties
    usedDobCards = [];
    const seenDobs = new Set();
    
    animals.forEach(animal => {
      if (animal.dob && Array.isArray(animal.dob)) {
        const dobKey = animal.dob.join(',');
        if (!seenDobs.has(dobKey)) {
          seenDobs.add(dobKey);
          usedDobCards.push([...animal.dob]);
        }
      }
    });
    
    // Make textarea readonly again
    generatedCode.readOnly = true;
    generatedCode.style.backgroundColor = '';
    editBtn.style.display = 'inline-block';
    applyBtn.style.display = 'none';
    
    // Update UI and save
    updateUI();
    updateSpeciesDropdown();
    saveToLocalStorage();
    
    alert('Code changes applied successfully!');
    
  } catch (error) {
    alert('Error applying code changes: ' + error.message);
    console.error('Error applying code changes:', error);
  }
}
