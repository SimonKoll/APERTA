from multiprocessing import Process
from new_anpr import npr
from numpad import numpad
from read import read
if __name__ == '__main__':
  p1 = Process(target=npr)
  p1.start()
  p2 = Process(target=numpad)
  p2.start()
  p3 = Process(target=read)
  p3.start()
  p1.join()
  p2.join()
  p3.join()
