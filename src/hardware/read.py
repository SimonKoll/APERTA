#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
from checkNFC import checkNFC

reader = SimpleMFRC522()


try:
    id, text = reader.read()
    print(id)
    checkNFC(id)
finally:
    GPIO.cleanup()
