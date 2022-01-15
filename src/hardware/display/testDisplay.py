#!/usr/bin/python3

from signal import signal, SIGTERM, SIGHUP, pause
from rpi_lcd import LCD
import time

lcd = LCD()



def safe_exit(signum, frame):
    exit(1)

def displayText(writingString):
    try:
        signal(SIGTERM, safe_exit)
        signal(SIGHUP, safe_exit)
        
        outString = writingString.split()
        
        lcd.text(outString[0], 1)
        lcd.text(outString[1], 2)

        pause()

    except KeyboardInterrupt:
        pass

    finally:
        lcd.clear()