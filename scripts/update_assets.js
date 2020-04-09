const fs = require('fs');
const path = require('path');

console.log("Procesing musixml");

const PATH_ASSETS = 'src/assets/';
const MUSICXML_FOLDER = 'musicxml';

const SOURCE_MUSIC = 'musica';

const MUSICXML_FULL_PATH = path.join(PATH_ASSETS, MUSICXML_FOLDER);

if(!fs.existsSync(MUSICXML_FULL_PATH)) {
    fs.mkdirSync(MUSICXML_FULL_PATH);
    console.log(`Creating folder ${MUSICXML_FULL_PATH}`)
} else {
    console.log(`Folder ${MUSICXML_FULL_PATH} already exists`)
}

fs.readdir(SOURCE_MUSIC, (err, musicFiles) => {
    musicFiles.forEach(file => {
        if (file.endsWith(".musicxml")) {
            console.log(`Processing ${file}`);
            fs.copyFileSync(
                path.join(SOURCE_MUSIC, file),
                path.join(MUSICXML_FULL_PATH, file)
            )
        }
    });
});

console.log("Processin lyrics");

const LETRAS_JSON_PATH = "src/services/dataProvider/letras.json";

const SOURCE_LYRICS = "letras";

fs.readdir(SOURCE_LYRICS, (err, lyricFiles) => {
    const all_lyrics = lyricFiles.map(file => {
        console.log(`Processing ${file}`);
        const currentFile = fs.readFileSync(path.join(SOURCE_LYRICS, file), 'UTF-8');

        return {
            name: file.replace(".md", ""),
            content: currentFile,
        }
    });
    fs.writeFile(LETRAS_JSON_PATH, JSON.stringify(all_lyrics, null, 2), (error) => {
        if (error) throw error;
        console.log(`File ${LETRAS_JSON_PATH} saved successfully`)

    });
});
