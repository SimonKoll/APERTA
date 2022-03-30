import time
in1 = 7

GPIO.setup(in1, GPIO.OUT)

GPIO.output(in1, False)

def initiateOpeningSequence():
    GPIO.output(in1,True)
    time.sleep(0.1)
    GPIO.output(in1,False)
    GPIO.cleanup()