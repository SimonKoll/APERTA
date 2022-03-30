#!/usr/bin/python3

from signal import signal, SIGTERM, SIGHUP, pause
from rpi_lcd import LCD
import time
lcd = LCD()
# python3 -c 'from testDisplay import displayText; displayText("123456789")'


def safe_exit(signum, frame):
    exit(1)


def displayText(writingString):
    try:
        signal(SIGTERM, safe_exit)
        signal(SIGHUP, safe_exit)

        outString = writingString

        lcd.text("Combination:", 1)
        lcd.text(outString, 2)

        time.sleep(5)
    finally:
        lcd.clear()


def readNFCUnsuccessful():
    try:
        signal(SIGTERM, safe_exit)
        signal(SIGHUP, safe_exit)

        lcd.text("Error at reading", 1)
        lcd.text("Please try again", 2)

        time.sleep(5)
    finally:
        lcd.clear()

def readNumpadUnsuccessful():
    try:
        signal(SIGTERM, safe_exit)
        signal(SIGHUP, safe_exit)

        lcd.text("Wrong code,", 1)
        lcd.text("please try again", 2)

        time.sleep(5)
    finally:
        lcd.clear()

