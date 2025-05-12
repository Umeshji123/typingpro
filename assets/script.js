const words = [
    "🍎 apple", "🍌 banana", "🚗 car", "🐶 dog", "🐘 elephant", "🌲 forest", "🎸 guitar",
    "🏠 house", "🏝️ island", "🌴 jungle", "🪁 kite", "🦁 lion", "⛰️ mountain", "🌃 night",
    "🍊 orange", "🎹 piano", "👑 queen", "🌊 river", "🐍 snake", "🌳 tree", "☂️ umbrella",
    "🎻 violin", "🐋 whale", "🎵 xylophone", "🛥️ yacht", "🦓 zebra", "🐅 tiger",
    "🌸 flower", "🦋 butterfly", "🌙 moon", "⭐ star", "☁️ cloud", "🌈 rainbow", "🍃 leaf",
    "🐢 turtle", "🦊 fox", "🦉 owl", "🌼 daisy", "🪶 feather", "🕯️ candle", "🔔 bell",
    "🦌 deer", "🐬 dolphin", "🌾 grass", "🪨 rock", "🐝 bee", "🦒 giraffe", "🪴 plant",
    "🌞 sun", "🐙 octopus", "🦚 peacock", "🍒 cherry", "🪞 mirror", "🦥 sloth", "🌵 cactus",
    "🦦 otter", "🐠 fish", "🪝 hook", "🦔 hedgehog", "🍓 strawberry", "🪑 chair", "🦅 eagle",
    "🌺 hibiscus", "🦈 shark", "🪟 window", "🐞 ladybug", "🍉 watermelon", "🦬 bison",
    "🪺 nest", "🐳 seal", "🌷 tulip", "🦃 turkey", "🪷 lotus", "🐖 pig", "🦑 squid",
    "🍑 peach", "🪜 ladder", "🦘 kangaroo", "🌴 palm", "🦜 parrot", "🍐 pear", "🎶 accordion",
    "🐫 camel", "🌋 volcano", "🐇 rabbit", "🧹 broom", "🐾 porcupine", "🍇 grape", "🪵 branch",
    "🦏 rhino", "🌅 sunrise", "🐶 puppy", "🪢 rope", "🐼 panda", "🍋 lemon", "🪮 comb",
    "🐨 koala", "🌉 bridge", "🐄 cow", "🪧 sign", "🐺 wolf", "🍈 melon", "🪤 trap",
    "🐻 bear", "🌒 crescent", "🐓 rooster", "🪨 stone", "🦌 antelope", "🍆 eggplant", "🪬 charm",
    "🐺 hyena", "🌧️ drizzle", "🐈 cat", "🏮 lantern", "🦔 meerkat", "🍅 tomato", "🪲 beetle",
    "🦌 gazelle", "🍃 breeze", "🐀 rat", "🦗 cricket", "🦩 ostrich", "🍄 mushroom", "🪵 log"
];
let currentWord = "";
let score = 0;

const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
    input.value = "";
}

input.addEventListener("input", () => {
    // Remove emoji for typing comparison
    const cleanWord = currentWord.replace(/[^a-zA-Z]/g, "");
    if (input.value.trim() === cleanWord) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        newWord();
    }
});

newWord();