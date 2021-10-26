import cv2
import time, threading
import os
# Opens the inbuilt camera of laptop to capture video.
cap = cv2.VideoCapture(1)
i = 0
frame = None
frame_available = threading.Event()
os.chdir("licenseplate")
while (cap.isOpened()) and (i<10):
    ret, frame = cap.read()

    # This condition prevents from infinite looping
    # incase video ends.
    if ret == False:
        break

    # Save Frame by Frame into disk using imwrite method
    cv2.imwrite('Frame' + str(i) + '.jpg', frame)
    i += 1
    time.sleep(1)
    print(i)

cap.release()
cv2.destroyAllWindows()
