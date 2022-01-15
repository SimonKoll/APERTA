#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import os

reader = SimpleMFRC522()

try:
        id, text = reader.read()
        print(id)
        os.system("pyhton3 ../display")

finally:
        GPIO.cleanup()