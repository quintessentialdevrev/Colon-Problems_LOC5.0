# import cv2

# original = cv2.imread("https://firebasestorage.googleapis.com/v0/b/colon-problems.appspot.com/o/Capturing%20Moments.png?alt=media&token=85a17a29-6c5f-4930-acb9-c73502c077e5")
# print(original)
# cv2.imshow("window_name", original)
# cv2.waitKey(0)

import cv2
import urllib.request
import numpy as np

req = urllib.request.urlopen('https://firebasestorage.googleapis.com/v0/b/colon-problems.appspot.com/o/Capturing%20Moments.png?alt=media&token=85a17a29-6c5f-4930-acb9-c73502c077e5')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr, -1) # 'Load it as it is'

cv2.imshow('lalala', img)
if cv2.waitKey() & 0xff == 27: quit()