game.splash("Guess the number.")
let User_Number = game.askForNumber("")
let Computer_Number = randint(1, 6)
if (User_Number == Computer_Number) {
    game.splash("Right number, congrats!")
} else {
    game.splash("Wrong number sorry!")
    game.splash(Computer_Number, "Was the number.")
}
