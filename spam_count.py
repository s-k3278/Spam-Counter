fname = input("enter file name:")
fh = open(fname)
count = 0
d = 0
for line in fh:
	line = line.rstrip()
	if not line.startswith("X-DSPAM-Confidence:"):
		continue
	else:
		print(line)
		f = line[19:]
		t = float(f)
		d = d + t
		count = count + 1

avg = d / count
print("Average spam confidence: ", avg)
