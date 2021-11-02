import RPi.GPIO as GPIO
class keypad():
    def __init__(self, columnCount=3):
        GPIO.setmode(GPIO.BCM)
        GPIO.setwarnings(False)
        if columnCount is 3:
            self.KEYPAD = [
                [1, 2, 3, "A"],
                [4, 5, 6, "B"],
                [7, 8, 9, "C"],
                ["*", 0, "#", "D"]]
            self.ROW = [24, 25, 12, 16]
            self.COLUMN = [4, 17, 27]

        elif columnCount is 4:
            self.KEYPAD = [
                [1, 2, 3, "A"],
                [4, 5, 6, "B"],
                [7, 8, 9, "C"],
                ["*", 0, "#", "D"]]

            self.ROW = [24, 25, 12, 16]
            self.COLUMN = [4, 17, 27, 22]
        else:
            return

    def getKey(self):
        for j in range(len(self.COLUMN)):
            GPIO.setup(self.COLUMN[j], GPIO.OUT)
            GPIO.output(self.COLUMN[j], GPIO.LOW)

            for i in range(len(self.ROW)):
                GPIO.setup(self.ROW[i], GPIO.IN, pull_up_down=GPIO.PUD_UP)
                rowVal = -1
            for i in range(len(self.ROW)):
                tmpRead = GPIO.input(self.ROW[i])
                if tmpRead == 0:
                    rowVal = i
            if rowVal < 0 or rowVal > 3:
                self.exit()
                return

            for j in range(len(self.COLUMN)):
                GPIO.setup(self.COLUMN[j], GPIO.IN, pull_up_down=GPIO.PUD_UP)

        GPIO.setup(self.ROW[rowVal], GPIO.OUT)
        GPIO.output(self.ROW[rowVal], GPIO.HIGH)

        colVal = -1
        for j in range(len(self.COLUMN)):
            tmpRead = GPIO.input(self.COLUMN[j])
        if tmpRead == 1:
            colVal = j
        # if colVal is not 0 thru 2 or 3 then no button was pressed and we can exit
        if len(self.COLUMN) == 4:
            if colVal < 0 or colVal > 3:
                self.exit()
        return
        if len(self.COLUMN) == 3:
            if colVal < 0 or colVal > 2:
                self.exit()
        return
        # Return the value of the key pressed
        self.exit()
        return self.KEYPAD[rowVal][colVal]

    def exit(self):
        for i in range(len(self.ROW)):
            GPIO.setup(self.ROW[i], GPIO.IN, pull_up_down=GPIO.PUD_UP)
        for j in range(len(self.COLUMN)):
            GPIO.setup(self.COLUMN[j], GPIO.IN, pull_up_down=GPIO.PUD_UP)


if __name__ == '__main__':
    # Initialize the keypad class
    kp = keypad()
    # Loop while waiting for a keypress
    digit = None
    while digit == None:
        digit = kp.getKey()
    # Print the result
    print("{}".format(digit))
