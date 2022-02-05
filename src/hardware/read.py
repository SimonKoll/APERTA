#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
from testDisplay import displayText, readUnsuccessful

reader = SimpleMFRC522()

knownIDs= [933269900326]

try:
        id, text = reader.read()
        print(id)
        for _id in knownIDs:
                if(id == _id):
                   displayText(str(id))   
                else:
                        readUnsuccessful()
        
finally:
        GPIO.cleanup()