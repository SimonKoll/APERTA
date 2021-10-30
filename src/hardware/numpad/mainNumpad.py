import time
import RPi.GPIO as GPIO
from numpad import keypad

kp = keypad(columnCount=4)
digit = None
last_digit = None
print('[press ctrl+c to end the script]')
try:  # Main program loop
    while True:
        digit = kp.getKey()
        if not last_digit == digit:
            if not digit == None:
                print("{}".format(digit))
            last_digit = digit
            time.sleep(0.5)
# Scavenging work after the end of the program
except KeyboardInterrupt:
    GPIO.cleanup()
    print('Srcipt end!')
