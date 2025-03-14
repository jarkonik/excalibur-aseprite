
# Aseprite Plugin For Excalibur

This extension adds support for [Aseprite](https://www.aseprite.org/) SpriteSheets and Animations exported to json.

```
> npm install @excaliburjs/plugin-aseprite
```

1. Export using the [aseprite cli](https://www.aseprite.org/docs/cli/) or through the UI 

![Export as JSON in Aseprite](./export.gif)

2. Load the Aseprite resource via the json and voila ✨
  - Use `AsepriteResource.getAnimation(name)` to retrieve animations by the name in aseprite
  - Use `AsepriteResource.getSpriteSheet()` to get the equivalent Excalibur SpriteSheet
  - Use `Aseprite.rawAseprite` to access the raw data structure from Aseprite
  - Use `Aseprite.image` to access the source image for the SpriteSheet

## Example:

```typescript
import { AsepriteResource } from "@excaliburjs/plugin-aseprite";

const game = new Engine({
    width: 600,
    height: 400,
    displayMode: DisplayMode.FitScreen
});

const asepriteSpriteSheet = new AsepriteResource('./beetle.json');

const loader = new Loader([asepriteSpriteSheet]);
game.start(loader).then(() => {

    const anim = asepriteSpriteSheet.getAnimation('Loop');
    const actor = new Actor({pos: vec(100, 100)});
    actor.graphics.use(anim);
    
    game.currentScene.add(actor);
});
```

![Example running](./example.gif)