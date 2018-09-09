import json
import os

fw = open('vicsuburbOut.json','w')
f = open('vicsuburb.json')
fw.write('{')
for line in f:
	i = 0
	while i <= len(line)-8:
		if line[i:i+6] == 'loc_pid':
			i+=13
			print(line[i:i+4])
			postcode = ''
			while line[i] in ['0','1','2','3','4','5','6','7','8','9']:
				postcode = postcode + str(line[i])
				i+=1
			print(postcode)

			if int(postcode)>=3000 and int(postcode)<=4000:
				while line[i:i+11]!='coordinates':
					i-=1
				i+=14
				while line[i] in '[{(':
					i+=1
				coordinates = []
				cords = []
				cord = ''
				while line[i:i+5]!=']]]]}':
					if line[i:i+2]!='],':
						if line[i]==',':
							cords.append(float(cord))
							cord = ''
						else:
							cord += line[i]
						i+=1
					else:
						coordinates.append(cords)
						cords = []
				i += 1
				fw.write(str(postcode))
				fw.write(":")
				fw.write(coordinates)
				fw.write(',')
				print(postcode,coordinates)
				coordinates = []	
				i+=1			
		i+=1
	f.seek(-1,os.SEEK_END)
	f.truncate()			