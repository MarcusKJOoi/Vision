#https://data.gov.au/dataset/vic-suburb-locality-boundaries-psma-administrative-boundaries

import json

with open('geoserver-GetFeature.application.json') as f:
    boundariesData = json.load(f)

print(boundariesData.keys())

print(len(boundariesData['features']))

print((boundariesData['features'][0].keys()))
print((boundariesData['features'][0]['geometry']['coordinates'][1]))

# filteredData = {}
# for entry in boundariesData['features']:
#     postcode = entry['properties']['loc_pid']
#     if postcode[:4] == 'VIC3' and len(postcode) == 7:
#         coordinates = entry['geometry']['coordinates'][0][0]
#         coordinatesDict = list(map(lambda x: {'lat':x[0], 'lng': x[1]}, coordinates))
#         # print(coordinatesDict)
#         filteredData[postcode[3:]] = coordinatesDict
#
# print(len(filteredData))



# with open('filteredData.json', 'w') as f:
#     json.dump(filteredData, f, sort_keys=True)




# print(len([1 for entry in boundariesData['features'] if entry['properties']['loc_pid'][:4] == 'VIC3' and len(entry['properties']['loc_pid']) == 7]))
# print(([entry['properties']['loc_pid'] for entry in boundariesData['features'] if len(entry['properties']['loc_pid']) == 4]))


# print(boundariesData.keys())
