import glob
import licenseplate
for pic in glob.glob("*.jpg"):
    print(pic)
    licenseplate.recPlate(pic)

