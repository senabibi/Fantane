document.addEventListener('DOMContentLoaded', () => {
    loadCreatures(1); // Varsayılan olarak ilk sayfayı yükle
});

const creatures = [
    { id: 1, name: "Fluffy", element: "Pastel", image: "creatures/1.png", description: "Small, fluffy with big round eyes", abilities: "Cuddly, soft, tiny wings on its back", power: "Can create a calming aura around it", story: "Fluffy is a gentle creature that brings comfort to those around it with its soft fur and soothing presence." },
    { id: 2, name: "Whiskers", element: "Gray", image: "creatures/2.png", description: "Chubby with long whiskers", abilities: "Chubby, long tail that curls at the end", power: "Can sense vibrations in the ground", story: "Whiskers is a curious critter that explores its surroundings with its whiskers, always eager to discover new things." },
    { id: 3, name: "Bubbles", element: "Blue", image: "creatures/3.png", description: "Bright blue with large expressive eyes", abilities: "Bubbly, constant trail of bubbles floating around", power: "Can manipulate bubbles for various purposes", story: "Bubbles is a cheerful character that spreads joy wherever it goes, leaving a trail of bubbles that brings smiles to everyone's faces." },
    { id: 4, name: "Snuggles", element: "White", image: "creatures/4.png", description: "Cuddly with heart-shaped nose", abilities: "Soft, cuddly, long floppy ears", power: "Can emit a warm, comforting aura", story: "Snuggles is a lovable companion that enjoys cuddling with friends and spreading warmth with its gentle presence." },
    { id: 5, name: "Paws", element: "Multicolor", image: "creatures/5.png", description: "Playful with oversized paws", abilities: "Playful, mischievous glint in its eyes", power: "Enhanced agility and speed", story: "Paws is an energetic critter that loves to play and explore, using its oversized paws to leap and bound through its surroundings." },
    { id: 6, name: "Sunny", element: "Yellow", image: "creatures/6.png", description: "Bright yellow with radiant smile", abilities: "Radiant, sunny disposition", power: "Can harness the power of sunlight", story: "Sunny is a cheerful character that brightens up even the gloomiest of days, spreading warmth and happiness wherever it goes." },
    { id: 7, name: "Glimmer", element: "Shimmering", image: "creatures/7.png", description: "Covered in shimmering scales with iridescent wings", abilities: "Shimmering, sparkling wings", power: "Can manipulate light and create illusions", story: "Glimmer is a magical being that enchants others with its shimmering appearance and dazzling displays of light." },
    { id: 8, name: "Cotton", element: "White", image: "creatures/8.png", description: "Fluffy as a cloud with sky-blue eyes", abilities: "Pure white, gentle demeanor", power: "Can create soft clouds for resting on", story: "Cotton is a gentle soul that floats through the sky like a fluffy cloud, bringing comfort and tranquility wherever it goes." },
    { id: 9, name: "Pebbles", element: "Speckled", image: "creatures/9.png", description: "Speckled pattern resembling pebbles", abilities: "Playful bounce, twinkle in its eye", power: "Can blend into its surroundings", story: "Pebbles is an adventurous character that enjoys hopping from place to place, its speckled fur camouflaging it in its environment." },
    { id: 10, name: "Frost", element: "Icy blue", image: "creatures/10.png", description: "Adorned in icy blue fur and sparkling crystals", abilities: "Leaves a trail of frosty mist", power: "Can lower temperatures and create ice structures", story: "Frost is a chilly presence that brings a touch of frost wherever it goes, its sparkling crystals reflecting the light like a winter wonderland." },
    { id: 11, name: "Sunny", element: "Golden", image: "creatures/11.png", description: "Radiant with fiery orange highlights", abilities: "Radiant, sunny disposition", power: "Can harness the power of sunlight", story: "Sunny is a warm and radiant character that embodies the energy and vitality of the sun, spreading joy and light wherever it goes." },
    { id: 12, name: "Twirl", element: "Pastel",    image: "creatures/12.png", description: "Fur a blend of pastel hues with colorful ribbons", abilities: "Twirls its tail to leave a trail of colorful ribbons", power: "Can manipulate ribbons for various purposes", story: "Twirl is a whimsical character that dances through the air, leaving behind a trail of colorful ribbons that flutter and dance in the breeze." },
    { id: 13, name: "Doodle", element: "Colorful", image: "creatures/13.png", description: "Covered in doodles and scribbles with changing fur", abilities: "Changes color with mood, leaves a trail of glitter", power: "Can bring doodles to life and manipulate art supplies", story: "Doodle is a creative creature that brings imagination to life, leaving behind a trail of sparkling doodles and vibrant colors." },
    { id: 14, name: "Scooter", element: "Yellow", image: "creatures/14.png", description: "Streak of bright yellow fur with sparks behind it", abilities: "Fast as lightning", power: "Enhanced speed and agility", story: "Scooter is a speedster that zooms around with lightning-fast agility, leaving behind a trail of sparks that crackle and fizz with energy." },
    { id: 15, name: "Puddle", element: "Water", image: "creatures/15.png", description: "Made of water droplets with shimmering colors", abilities: "Shimmers with iridescent colors", power: "Can manipulate water and create rainbows", story: "Puddle is a watery wonder that flows gracefully, leaving behind a trail of shimmering droplets that dance and sparkle in the sunlight." },
    { id: 16, name: "Zigzag", element: "Energetic", image: "creatures/16.png", description: "Swirling patterns on fur with lightning bolt tail", abilities: "Full of energy and excitement", power: "Can generate electrical charges and control lightning", story: "Zigzag is a dynamic character that zips around with electrifying speed, leaving behind a trail of crackling energy and swirling patterns." },
    { id: 17, name: "Scribbles", element: "Colorful", image: "creatures/17.png", description: "Covered in colorful scribbles with expressive eyes", abilities: "Expressive eyes, constant whirlwind of crayons", power: "Can bring drawings to life and manipulate art supplies", story: "Scribbles is an artistic soul that brings creativity to life, leaving behind a whirlwind of color and imagination wherever it goes." },
    { id: 18, name: "Starlight", element: "Twinkling", image: "creatures/18.png", description: "Twinkling coat like the night sky", abilities: "Leaves a trail of stardust, eyes shine like galaxies", power: "Can manipulate starlight and create illusions", story: "Starlight is a celestial being that glimmers and shines like the night sky, leaving behind a trail of stardust that twinkles and sparkles in its wake." },
    { id: 19, name: "Wiggle", element: "Patchwork", image: "creatures/19.png", description: "Fur resembles a patchwork quilt, wiggles its tail", abilities: "Wiggles its tail excitedly, leaves a trail of confetti", power: "Can manipulate fabric and create playful illusions", story: "Wiggle is a playful character that wiggles and dances with joy, leaving behind a trail of colorful confetti that fills the air with fun and excitement." }
];
function loadCreatures(page) {
    const startIndex = (page - 1) * 6;
    const endIndex = page === 3 ? creatures.length : page * 6; // 3. sayfa için özel durum
    const pageCreatures = creatures.slice(startIndex, endIndex);

    const container = document.getElementById('creature-container');
    container.innerHTML = ''; // Önceki içerikleri temizle

    pageCreatures.forEach(creature => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card" onclick="window.location.href='details.html?id=${creature.id}'">
                <img src="${creature.image}" class="card-img-top" alt="${creature.name}">
                <div class="card-body">
                    <h5 class="card-title">${creature.name}</h5>
                    <p class="card-text">${creature.description}</p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Önceki kodlarınıza ek olarak:

pageCreatures.forEach(creature => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
        <div class="card clickable" data-id="${creature.id}">
            <img src="${creature.image}" class="card-img-top" alt="${creature.name}">
            <div class="card-body">
                <h5 class="card-title">${creature.name}</h5>
            </div>
        </div>
    `;
    container.appendChild(col);
});

// Kartlara tıklanabilirlik eklemek için:
document.addEventListener('click', function(e) {
    if (e.target.closest('.clickable')) {
        const creatureId = e.target.closest('.clickable').getAttribute('data-id');
        window.location.href = `details.html?id=${creatureId}`;
    }
});
