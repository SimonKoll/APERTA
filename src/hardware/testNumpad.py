import RPi.GPIO as GPIO
import os
import sys
import time
from checkNumpad import checkNumpad


MATRIX = [[1, 2, 3, 'A'],
          [4, 5, 6, 'B'],
          [7, 8, 9, 'C'],
          ['*', 0, '#', 'D']]
running = True

COUNT = 0
COMBIN = ""
ROW = [18, 23, 24, 26]
COL = [12, 16, 20, 21]
GPIO.setmode(GPIO.BCM)
for j in range(4):
    GPIO.setup(COL[j], GPIO.OUT)
    GPIO.output(COL[j], 1)

    for i in range(4):
        GPIO.setup(ROW[i], GPIO.IN, pull_up_down=GPIO.PUD_UP)

    try:
        while running:
            for j in range(4):
                GPIO.output(COL[j], 0)
                for i in range(4):
                    if GPIO.input(ROW[i]) == 0:
                        print(MATRIX[i][j])
                        COUNT = COUNT+1
                        COMBIN = COMBIN + str(MATRIX[i][j])
                        if(COUNT > 5):
                            checkNumpad(COMBIN)
                            COMBIN = ""
                            COUNT = 0
                            running = False
                            sys.exit(1)
                        while(GPIO.input(ROW[i]) == 0):
                            pass
                            time.sleep(0.2)
                GPIO.output(COL[j], 1)
    except KeyboardInterrupt:
        print("exit")
        GPIO.cleanup()
