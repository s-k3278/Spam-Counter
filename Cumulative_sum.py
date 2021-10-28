def Cumulative(l):
   new = []
   sum = 0
   for element in l:
      sum+=element
      new.append(sum)
   return new

arr = list(map(int,input('Enter your List : ').split()))
print("Cumulative Sum list:",Cumulative(arr))

