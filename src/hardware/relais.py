import time
import RPi.GPIO as GPIO
in1=4
GPIO.setmode(GPIO.BCM)
GPIO.setup(in1, GPIO.OUT)
GPIO.output(in1, False)

def initiateOpeningSequence():
    GPIO.output(in1,True)
    time.sleep(0.1)
    GPIO.output(in1,False)