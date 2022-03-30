from multiprocessing import Process
import RPi.GPIO as GPIO
from new_anpr import npr
from numpad import numpad
from read import read

if __name__ == '__main__':
    print("test")
    numpad()
    print("end")

