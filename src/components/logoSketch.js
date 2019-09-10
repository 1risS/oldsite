export default function sketch(p) {
    let sprites = []
    let r = 0
    //let fontName = null
  
    p.preload = () => {
      // uncomment for custom font
      // fontName = loadFont("assets/Verlag.ttf");
    }
  
    p.setup = () => {
      p.createCanvas(300, 100)
  
      sprites = createFontSprites('i r i s S', {
        // font: fontName,
        brightnessThreshold: 40,
        step: 5,
        fontSize: 100,
      })
    }
  
    p.draw = () => {
      r += 0.025
  
      p.background(32,24,21)
      p.stroke(201, 176, 255) // font color
      p.fill(255)
  
      for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i]
        sprite.draw(r)
        const closeSprites = findCloseSprites(sprite)
        for (let j = 0; j < closeSprites.length; j++) {
          const closeSprite = closeSprites[j]
          p.line(
            sprite.vector.x,
            sprite.vector.y,
            closeSprite.vector.x,
            closeSprite.vector.y
          )
        }
      }
    }
  
    function createFontSprites(string, opts) {
      const font = opts.font || 'Helvetica'
      const brightnessThreshold = opts.brightnessThreshold || 40
      const step = opts.step || 5
      const fontSize = opts.fontSize || 120
  
      const res = []
  
      const pg = p.createGraphics(p.width, p.height)
  
      pg.fill(255)
      pg.textFont(font, fontSize)
      pg.text(string, 0, fontSize - 20)
  
      for (let x = 0; x < pg.width; x += step) {
        for (let y = 0; y < pg.height; y += step) {
          const c = p.color(pg.get(x, y))
  
          if (p.brightness(c) > brightnessThreshold) {
            res.push(new Sprite(p.createVector(x, y)))
          }
        }
      }
      // console.log("Sprites:", res.length);
  
      return res
    }
  
    function findCloseSprites(targetSprite) {
      const closeSprites = []
  
      for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i]
        if (sprite == targetSprite) {
          break
        }
  
        if (
          sprite.vector.dist(targetSprite.vector) <
          p.sin(p.frameCount / 200) * 10 + 10
        ) {
          closeSprites.push(sprite)
        }
      }
  
      return closeSprites
    }
  
    class Sprite {
      constructor(vector) {
        this.vector = null
        this.originalVector = vector
        this.difference = p.random(20)
      }
  
      draw(r) {
        const x = p.cos(this.difference + r) * 4 + this.originalVector.x
        const y = p.sin(this.difference + r) * 4 + this.originalVector.y
        this.vector = p.createVector(x, y)
  
        p.ellipse(x, y, 2, 2)
      }
    }
  }