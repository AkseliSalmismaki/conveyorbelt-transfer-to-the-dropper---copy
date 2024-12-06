let ConveyorBeltPart1: Sprite = null; // Declare the variable

for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
    // Initialize the variable
    ConveyorBeltPart1 = sprites.create(img`
        7 7 7 7 7 7 7 7 ...
    `, SpriteKind.Player);

    animation.runImageAnimation(
        ConveyorBeltPart1,
        [img`
            7 7 7 7 ...
        `],
        100,
        true
    );

    // Now it's safe to use ConveyorBeltPart1
    tiles.placeOnTile(ConveyorBeltPart1, value2);
}
let Dropper =
    let ConveyorBeltPart1 : Sprites = null
scene.setBackgroundImage
let dropper = sprites.create(assets.image`Dropper`, SpriteKind.Player)
let cube = sprites.create(assets.image`Cube`, SpriteKind.Projectile)
dropper.setPosition(30, 65)
cube.setPosition(60, 60)
tiles.setCurrentTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(img`myTile5`)) {
    ConveyorBeltPart1 = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    animation.runImageAnimation(
        ConveyorBeltPart1,
        [img`
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f b f f b b b f f b
        f f f f f f b b f f f f f f f f
        f f f f b f f f f f f f f f f f
        f f f b b f f f f f f f f f f f
        f f f f f f f f b b b b f f f f
        f f b f f f f f b f f b f f f f
        f f b f f f f f b f f b f f f f
        f f b b f f f f b b b b f f f f
        f f f f f f f f f f f f f f f f
        f f f f b b f f f f f f f f f f
        f f f f f b b f f f f f f f f f
        f f f f f f f f b b b f f b b b
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f b b f f b b b f f
            f f f f f b f b f f f f f f f f
            f f f f b b f f f f f f f f f f
            f f f f b f f f f f f f f f f f
            f f b f f f f f b b b b f f f f
            f f b f f f f f b f f b f f f f
            f f b f f f f f b f f b f f f f
            f f b f f f f f b b b b f f f f
            f f f f b f f f f f f f f f f f
            f f f f b b f f f f f f f f f f
            f f f f f b f f f f f f f f f f
            f f f f f f f b b b f f b b b f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `, img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f b b f f b b b f
            f f f f f b b f f f f f f f f f
            f f f f f b f f f f f f f f f f
            f f f b f f f f f f f f f f f f
            f f b b f f f f b b b b f f f f
            f f b f f f f f b f f b f f f f
            f f b f f f f f b f f b f f f f
            f f f f f f f f b b b b f f f f
            f f f b b f f f f f f f f f f f
            f f f f b b f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f b b b f f b b b f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `, img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f b f f b b f f b b b
            f f f f f b b f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f b b f f f f f f f f f f f
            f f b b f f f f b b b b f f f f
            f f b f f f f f b f f b f f f f
            f f f f f f f f b f f b f f f f
            f f f b f f f f b b b b f f f f
            f f f b b f f f f f f f f f f f
            f f f f b f f f f f f f f f f f
            f f f f f f b f f f f f f f f f
            f f f f f f b b b f f b b f f b
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `],
        100,
        true
    )
    tiles.placeOnTile(ConveyorBeltPart1, value)
}
for (let value2 of tiles.getTilesByType(img`myTile7`)) {
    ConveyorBeltPart1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
        ConveyorBeltPart1,
        [img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        b b f f b b f f b b f f b b f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b b b f f f f b b b b f f 
        f f b f f b f f f f b f f b f f 
        f f b f f b f f f f b f f b f f 
        f f b b b b f f f f b b b b f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b f f b b f f b b f f b b 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f b b f f b b f f b b f f b b f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b b b f f f f b b b b f f 
        f f b f f b f f f f b f f b f f 
        f f b f f b f f f f b f f b f f 
        f f b b b b f f f f b b b b f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f b b f f b b f f b b f f b b f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b f f b b f f b b f f b b 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b b b f f f f b b b b f f 
        f f b f f b f f f f b f f b f f 
        f f b f f b f f f f b f f b f f 
        f f b b b b f f f f b b b b f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        b b f f b b f f b b f f b b f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            b f f b b f f b b f f b b f f b
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f b b b b f f f f b b b b f f
            f f b f f b f f f f b f f b f f
            f f b f f b f f f f b f f b f f
            f f b b b b f f f f b b b b f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            b f f b b f f b b f f b b f f b
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `],
        100,
        true
    )
    tiles.placeOnTile(ConveyorBeltPart1, value2)
}
for (let value3 of tiles.getTilesByType(img`myTile8`)) {
    ConveyorBeltPart1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
        ConveyorBeltPart1,
        [img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        b b b f f b b b f f f f f f f f 
        f f f f f f f f f b b f f f f f 
        f f f f f f f f f f b b f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f b b b b f f f f b b f f 
        f f f f b f f b f f f f f b f f 
        f f f f b f f b f f f f f b f f 
        f f f f b b b b f f f f f f f f 
        f f f f f f f f f f f b b f f f 
        f f f f f f f f f f f b f f f f 
        f f f f f f f f b b f f f f f f 
        b f f b b b f f b f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f b b b f f b b b f f f f f f f 
        f f f f f f f f f f b f f f f f 
        f f f f f f f f f f b b f f f f 
        f f f f f f f f f f f b f f f f 
        f f f f b b b b f f f f f b f f 
        f f f f b f f b f f f f f b f f 
        f f f f b f f b f f f f f b f f 
        f f f f b b b b f f f f f b f f 
        f f f f f f f f f f f b f f f f 
        f f f f f f f f f f b b f f f f 
        f f f f f f f f b f b f f f f f 
        f f b b b f f b b f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f b b b f f b b b f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f b b f f f f 
        f f f f f f f f f f f b b f f f 
        f f f f b b b b f f f f f f f f 
        f f f f b f f b f f f f f b f f 
        f f f f b f f b f f f f f b f f 
        f f f f b b b b f f f f b b f f 
        f f f f f f f f f f f f b f f f 
        f f f f f f f f f f b f f f f f 
        f f f f f f f f f b b f f f f f 
        f b b b f f b b f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        b f f b b f f b b b f f f f f f 
        f f f f f f f f f b f f f f f f 
        f f f f f f f f f f f b f f f f 
        f f f f f f f f f f f b b f f f 
        f f f f b b b b f f f f b f f f 
        f f f f b f f b f f f f f f f f 
        f f f f b f f b f f f f f b f f 
        f f f f b b b b f f f f b b f f 
        f f f f f f f f f f f b b f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f b b f f f f f 
        b b b f f b b f f b f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `],
        100,
        true
    )
    tiles.placeOnTile(ConveyorBeltPart1, value3)
}
            100,
            true
            
            tiles.placeOnTile(ConveyorBeltPart1, value)
        
        for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
            ConveyorBeltPart1 = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f f 7 7 f f 7 7 f f 7 7 f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f 7 7 f f 7 7 f f 7 7 f f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Player)
            animation.runImageAnimation(
            ConveyorBeltPart1,
            [img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f f 7 7 f f 7 7 f f 7 7 f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f 7 7 f f 7 7 f f 7 7 f f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 f f 7 7 f f 7 7 f f 7 7 f f 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 f f 7 7 f f 7 7 f f 7 7 f f 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f 7 7 f f 7 7 f f 7 7 f f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f f 7 7 f f 7 7 f f 7 7 f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f 7 7 f f 7 7 f f 7 7 f f 7 7 f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 f f f f 7 7 7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f 7 7 f f 7 7 f f 7 7 f f 7 7 f 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `],
            100,
            true
            )
            tiles.placeOnTile(ConveyorBeltPart1, value2)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`myTile8`)) {
            ConveyorBeltPart1 = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f f f 7 7 f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 f f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 
                f 7 7 f f f 7 7 f 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Player)
            animation.runImageAnimation(
            ConveyorBeltPart1,
            [img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f f f 7 7 f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 f f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 
                f 7 7 f f f 7 7 f 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 f f f 7 7 f f f 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 
                7 7 7 7 7 7 7 7 f 7 f 7 7 7 7 7 
                7 7 f f f 7 7 f f 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 f f f 7 7 f f f 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 
                7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 
                7 f f f 7 7 f f 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `,img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                f 7 7 f f 7 7 f f f 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 f 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 7 7 7 
                7 7 7 7 f f f f 7 7 7 7 7 f 7 7 
                7 7 7 7 f f f f 7 7 7 7 f f 7 7 
                7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 
                f f f 7 7 f f 7 7 f 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `],
            100,
            true
            )
            tiles.placeOnTile(ConveyorBeltPart1, value3)
        
    

sprites.onOverlap(SpriteKind.Player, SpriteKind.nothing, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(mySprite2)
    level = 1
    Buy_menu()
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    _5$_block.setPosition(161, -3)
    pause(1250)
})
info.onScore(50, function () {
    if (One$Block.overlapsWith(EndPoint)) {
        dropper_part_2 = sprites.create(assets.image`Block 5 dollar`, SpriteKind.Player)
        dropper_part_2.setPosition(32, 41)
        info.setScore(0)
        pauseUntil(() => EndPoint.overlapsWith(dropper_part_2))
        for (let index = 0; index < 10000000000; index++) {
            _5$_block = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            _5$_block.vx = 65
            _5$_block.setPosition(32, 46)
            pause(1900)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.upgrador, function (sprite, otherSprite) {
    _5$_block.setPosition(101, 41)
})
info.onScore(200, function () {
    if (controller.anyButton.isPressed()) {
        upgrador2 = sprites.create(assets.image`upgrador`, SpriteKind.upgrador)
        upgrador2.setPosition(100, 41)
        info.setScore(0)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.upgrador, function (sprite, otherSprite) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . f 8 f f 8 f . . . . . 
        . . . . . f 8 f f 8 f . . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    projectile.setPosition(101, 41)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(25)
    projectile.setPosition(161, -3)
    pause(1250)
})
let mySprite: Sprite = null
let upgrador2: Sprite = null
let dropper_part_2: Sprite = null
let _5$_block: Sprite = null
let ConveyorBeltPart1: Sprite = null
let EndPoint: Sprite = null
let projectile: Sprite = null
let dropper: Sprite = null
let One$Block: Sprite = null
let otherSprite: Sprite = null
let mySprite2: Sprite = null
let level = 0
level = 0
Buy_menu ()
 controller.moveSprite(mySprite2)  
        }