import RPi.GPIO as GPIO
import time
from testDisplay import displayText
from relais import initiateOpeningSequence
from testDisplay import displayText, readNumpadUnsuccessful
import requests
import json

def numpad():
    GPIO.setmode(GPIO.BCM)

    MATRIX = [[1, 2, 3, 'A'],
    [4, 5, 6, 'B'],
    [7, 8, 9, 'C'],
    ['*', 0, '#', 'D']]


    COUNT = 0
    COMBIN = ""
    ROW = [18, 23, 24, 26]
    COL = [12, 16, 20, 21]

    for j in range(4):
        GPIO.setup(COL[j], GPIO.OUT)
        GPIO.output(COL[j], 1)

    for i in range(4):
        GPIO.setup(ROW[i], GPIO.IN, pull_up_down=GPIO.PUD_UP)

    try:
        while True:
            for j in range(4):
                GPIO.output(COL[j], 0)
                for i in range(4):
                    if GPIO.input(ROW[i]) == 0:
                        print(MATRIX[i][j])
                        COUNT = COUNT+1
                        COMBIN = COMBIN + str(MATRIX[i][j])
                        if(COUNT > 5):
                            #displayText(COMBIN)
                            #checkNumpad(COMBIN)
                            r = requests.get('http://130.162.215.116/get-numpad-codes')
                            val = json.loads(r.text)
                            for value in val:
                                print("value: ", value["numpad_code"])
                                print("text from reader: ", COMBIN)
                                if value["active"]:
                                    if COMBIN == value["numpad_code"]:
                                        print("numpad code recognized, initiating opening sequence")
                                        displayText(COMBIN)
                                        initiateOpeningSequence()
                                    else:
                                        print("not recognized, staying closed")
                                        readNumpadUnsuccessful()
                            COMBIN = ""
                            COUNT = 0
                        while(GPIO.input(ROW[i]) == 0):
                            pass
                            time.sleep(0.2)
                GPIO.output(COL[j], 1)
    finally:
        #GPIO.cleanup()
        print("end of numpad")
