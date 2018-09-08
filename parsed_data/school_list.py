import csv

# https://www.data.vic.gov.au/data/dataset/school-locations-2017/resource/7ced0ba4-04a8-466a-b817-3eb0b4e8bf80


def lowerCaseNoSpace(s):
    return s.replace(" ", "").lower().replace("/", "")


fileIn = open("all_schools_list.csv")

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

        postcode = oneObject["address_postcode"]


        if outDict.get(postcode) is None:
            outDict[postcode] = []

        if outDictCounter.get(postcode) is None:
            outDictCounter[postcode] = 0

        outDict[postcode].append(oneObject)
        outDictCounter[postcode] += 1

    x += 1

import json

# output the dictionary as json
fileOut = open("out_schools_postcode.json", "w")
json.dump(outDict, fileOut)

fileCounterOut = open("out_schools_postcode_counter.json", "w")
json.dump(outDictCounter, fileCounterOut)

fileOut.close()
fileCounterOut.close()


