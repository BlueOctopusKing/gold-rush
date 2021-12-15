let Miner = game.createSprite(2, 2)
let Gold_nugget = game.createSprite(randint(0, 4), randint(0, 4))
let score = 0
while (score < 10) {
    if (Miner.get(LedSpriteProperty.X) == Gold_nugget.get(LedSpriteProperty.X) && Miner.get(LedSpriteProperty.Y) == Gold_nugget.get(LedSpriteProperty.Y)) {
        score += 1
        Gold_nugget.set(LedSpriteProperty.X, randint(0, 4))
        Gold_nugget.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        Miner.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        Miner.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        Miner.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        Miner.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
