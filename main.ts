input.onButtonPressed(Button.A, function () {
    images.createImage(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `).showImage(0)
})
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(500)
})
