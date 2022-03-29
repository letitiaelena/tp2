def on_button_pressed_a():
    images.create_image("""
        # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # . .
    """).show_image(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    images.create_image("""
        . . # # #
                . # . . .
                . . # # .
                . . . . #
                . # # # .
    """).show_image(0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
