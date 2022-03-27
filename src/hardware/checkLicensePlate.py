import requests
import json
import string


def checkPlate(text):
    print(type(text))
    r = requests.get('http://130.162.215.116/get-licenseplates')
    val = json.loads(r.text)
    table = str.maketrans('', '', string.ascii_lowercase)
    text = text.strip()
    for value in val:
        print("value: ", value["licenseplate"])
        print("value no whitespace:", value["licenseplate"].replace(" ", ""))
        print("text from anpr: ", text)
        if value["active"]:
            print(text.replace(" ", "").translate(table) ==
                  value["licenseplate"].translate(table).replace(" ", ""))
            if text.replace(" ", "").translate(table) == value["licenseplate"].translate(table).replace(" ", ""):
                print("licenseplate recognized, initiating opening sequence")
            else:
                print("not recognized, staying closed")
