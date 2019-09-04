

export default function sketch (p) {
    let sprites = [];
    let r = 0;
    let fontName = null;

    function preload() {
    // uncomment for custom font
    // fontName = loadFont("assets/Verlag.ttf");
    }

    function setup() {
    createCanvas(600, 200);

    sprites = createFontSprites("i r i s S", {
        // font: fontName,
        brightnessThreshold: 40,
        step: 5,
        fontSize: 100
    });
    }

    function draw() {
    r += 0.025;

    background(0);
    stroke(201, 176, 255);  // font color
    fill(255);

    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        sprite.draw(r);
        const closeSprites = findCloseSprites(sprite);
        for (let j = 0; j < closeSprites.length; j++) {
        const closeSprite = closeSprites[j];
        line(sprite.vector.x, sprite.vector.y, closeSprite.vector.x, closeSprite.vector.y);
        }
    }
    }

    function createFontSprites(string, opts) {
    const font = opts.font || "Helvetica";
    const brightnessThreshold = opts.brightnessThreshold || 40;
    const step = opts.step || 5;
    const fontSize = opts.fontSize || 120;
    
    const res = [];

    const pg = createGraphics(width, height);

    pg.fill(255);
    pg.textFont(font, fontSize);
    pg.text(string, 0, fontSize - 20);

    for (let x = 0; x < pg.width; x += step) {
        for (let y = 0; y < pg.height; y += step) {
        const c = color(pg.get(x, y));

        if (brightness(c) > brightnessThreshold) {
            res.push(new Sprite(createVector(x, y)));
        }
        }
    }
    // console.log("Sprites:", res.length);

    return res;
    }

    function findCloseSprites(targetSprite) {
    const closeSprites = [];

    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        if (sprite == targetSprite) {
        break;
        }

        if (sprite.vector.dist(targetSprite.vector) < (sin(frameCount / 200) * 10 + 10)) {
        closeSprites.push(sprite);
        }
    }

    return closeSprites;
    }

    class Sprite {
    constructor(vector) {
        this.vector = null;
        this.originalVector = vector;
        this.difference = random(20);
    }

    draw(r) {
        const x = cos(this.difference + r) * 4 + this.originalVector.x;
        const y = sin(this.difference + r) * 4 + this.originalVector.y;
        this.vector = createVector(x, y);

        ellipse(x, y, 2, 2);
    }
    }
}