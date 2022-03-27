import requests
import json
from relais import initiateOpeningSequence

def checkNFC(rfid_id):
    print(type(rfid_id))
    r = requests.get('http://130.162.215.116/get-rfid-codes')
    val = json.loads(r.text)
    for value in val:
        print("value: ", value["rfid_code"])
        print("text from reader: ", rfid_id)
        if value["active"]:
            if rfid_id == value["rfid_code"]:
                print("rfid code recognized, initiating opening sequence")
                initiateOpeningSequence()
            else:
                print("not recognized, staying closed")
