import requests
import json


def checkNFC(numpad_code):
    r = requests.get('http://130.162.215.116/get-numpad-codes')
    val = json.loads(r.text)
    for value in val:
        print("value: ", value["numpad_code"])
        print("text from reader: ", numpad_code)
        if value["active"]:
            if numpad_code == value["numpad_code"]:
                print("numpad code recognized, initiating opening sequence")
            else:
                print("not recognized, staying closed")
