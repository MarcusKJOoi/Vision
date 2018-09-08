import csv

def lowerCaseNoSpace(s):
    return s.replace(" ", "").lower().replace("/", "")


fileIn = open("crime_postcode.csv")

headerFound = False
x = 0
header = []
outDict = {}
outDictCounter = {}

fileReader = csv.reader(fileIn, quotechar='"', delimiter=',',
                     quoting=csv.QUOTE_ALL, skipinitialspace=True)

# Data format definition
"""
main dict
{
    postcode: [
        {
            ...header properties
            'yearendingseptember', 'postcode', 'suburbtownname', 'offencedivision', 'offencesubdivision', 'offencesubgroup', 'incidentsrecorded'
        }
    ]
}


counter dict
{
    postcode: counts,
    ...
}
"""


for line in fileReader:

    if not headerFound:
        header = line
        header = map(lowerCaseNoSpace, header)
        print("Header found"  + str(header))
        headerFound = True


    else:
        oneObject = {}
        for index, item in enumerate(line):
            oneObject[header[index]] = item

        postcode = line[1]
        incidents = int(line[-1].replace(",", ""))

        if outDict.get(postcode) is None:
            outDict[postcode] = []

        if outDictCounter.get(postcode) is None:
            outDictCounter[postcode] = 0

        outDict[postcode].append(oneObject)
        outDictCounter[postcode] += incidents

    x+=1

import json

# output the dictionary as json
fileOut = open("out_crime_postcode.json", "w")
fileOut.write(str(outDict))

fileCounterOut = open("out_crime_postcode_counter.json", "w")
json.dump(outDictCounter, fileCounterOut)

fileOut.close()
fileCounterOut.close()


