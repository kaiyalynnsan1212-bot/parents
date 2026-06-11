radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("can you come pls?")
    } else if (receivedNumber == 2) {
        basic.showString("Thank you!")
    } else if (receivedNumber == 3) {
        basic.showString("See you soon!")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    music.play(music.stringPlayable("A C5 A B A C5 B A ", 59), music.PlaybackMode.InBackground)
    if (true) {
        basic.showString("can you come pls?")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    music.play(music.stringPlayable("G B F A G B F G ", 59), music.PlaybackMode.InBackground)
    if (true) {
        basic.showString("Thank you!")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(3)
    music.play(music.stringPlayable("F A B F A B F A ", 59), music.PlaybackMode.InBackground)
    basic.showString("See you soon!")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(4)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
radio.setGroup(1)
