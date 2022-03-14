import time
import cv2
import os
import requests
import json

prev_time = time.time()
count = 0
delay = 10 # in seconds
headers = {
    'Authorization': 'Token 7b273177a6eac94ddf336018615207b7dba95043',
}

files = {
    'upload': ('/home/pi/Desktop/anprtest/Image.jpg', open('/home/pi/Desktop/anprtest/Image.jpg', 'rb')),
    'regions': (None, 'at'),
}
cam = cv2.VideoCapture(0)
while True:
    if time.time()-prev_time > delay:
        if os.path.exists("Image.jpg"):
            os.remove("Image.jpg")
            print("image deleted")
        else:
            print("The file does not exist")
        count += 1
        print(count)
        ret, image = cam.read()
        cv2.imwrite('/home/pi/Desktop/anprtest/Image.jpg', image)
        response = requests.post('https://api.platerecognizer.com/v1/plate-reader', headers=headers, files=files)
        x = str(response)
        y = json.loads(x)
        print(y)
        prev_time = time.time()
