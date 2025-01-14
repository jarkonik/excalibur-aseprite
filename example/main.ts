import { Actor, DisplayMode, Engine, Loader, Sprite, vec } from "excalibur";
import { AsepriteResource } from "@excalibur-aseprite";

const game = new Engine({
    width: 600,
    height: 400,
    displayMode: DisplayMode.FitScreen
});

const asepriteSpriteSheet = new AsepriteResource('./beetle.json');

const loader = new Loader([asepriteSpriteSheet]);
game.start(loader).then(()=>{
    const a = new Actor({pos: vec(100, 100)});
    a.graphics.use(asepriteSpriteSheet.getAnimation('Loop') as any);

    const spritesheet = asepriteSpriteSheet.getSpriteSheet();
    const sprite = spritesheet?.getSprite(0, 1) as Sprite;

    const b = new Actor({pos: vec(200, 200)});
    b.graphics.use(sprite);
    game.currentScene.add(a);
    game.currentScene.add(b);
});