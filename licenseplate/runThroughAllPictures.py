import glob
import licenseplate
for pic in glob.glob("*.jpg"):
    licenseplate.recPlate(pic)

