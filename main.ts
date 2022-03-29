input.onButtonPressed(Button.A, function () {
    images.createImage(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        . . # # #
        . # . . .
        . . # # .
        . . . . #
        . # # # .
        `).showImage(0)
})
basic.forever(function () {
	
})
