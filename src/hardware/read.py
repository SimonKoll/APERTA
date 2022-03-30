#!/usr/bin/env python

import RPi.GPIO as GPIO
import os
from mfrc522 import SimpleMFRC522
from checkNFC import checkNFC

reader = SimpleMFRC522()
def read():
    try:
        id, text = reader.read()
        print(id)
        print(text)
        checkNFC(id)
    finally:
        GPIO.cleanup()
        os.system("python3 read.py")

