import cv2
import imutils
import numpy as np
import pytesseract
import re
from checkPlate import checkPlate
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("cannot open camera")
    exit()
while(True):
    ret, frame = cap.read()
    if not ret:
        print("Can't receive frame (stream end?). Exiting ...")
        break
    cv2.imshow("Frame", frame)
    key = cv2.waitKey(1) & 0xFF
    if key == ord("s"):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)  # convert to grey scale
        gray = cv2.bilateralFilter(gray, 11, 17, 17)  # Blur to reduce noise
        edged = cv2.Canny(gray, 30, 200)  # Perform Edge detection
        cnts = cv2.findContours(edged.copy(), cv2.RETR_TREE,
                                cv2.CHAIN_APPROX_SIMPLE)
        cnts = imutils.grab_contours(cnts)
        cnts = sorted(cnts, key=cv2.contourArea, reverse=True)[:10]
        screenCnt = None
        for c in cnts:
            peri = cv2.arcLength(c, True)
            approx = cv2.approxPolyDP(c, 0.018 * peri, True)
            if len(approx) == 4:
                screenCnt = approx
                break
        if screenCnt is None:
            detected = 0
            print("No contour detected")
            exit()
        else:
            detected = 1
        if detected == 1:
            cv2.drawContours(frame, [screenCnt], -1, (0, 255, 0), 3)
        mask = np.zeros(gray.shape, np.uint8)
        new_image = cv2.drawContours(mask, [screenCnt], 0, 255, -1,)
        new_image = cv2.bitwise_and(frame, frame, mask=mask)
        (x, y) = np.where(mask == 255)
        (topx, topy) = (np.min(x), np.min(y))
        (bottomx, bottomy) = (np.max(x), np.max(y))
        Cropped = gray[topx:bottomx+1, topy:bottomy+1]
        text = pytesseract.image_to_string(Cropped, config='--psm 11')
        print("text before replacing:", text)
        text_replaced = re.sub('[^a-zA-Z0-9 \n\.]', '', text)
        text_replaced = text_replaced.replace(" ", "")
        print("Detected Number is:", text_replaced)
        checkPlate(text_replaced)
        cv2.imshow("Frame", frame)
        cv2.imshow('Cropped', Cropped)
        cv2.waitKey(0)
        break
cv2.destroyAllWindows()
cap.release()
