def countNumber(arr,l,r):
    list = []
    for x in range(l, r+1):
        count=0
        for i in arr:
            if x%i==0:
                count+=1
        if count==len(arr):
            list.append(x)
    return len(list)

rs = countNumber([3,2],5,15)

print(rs)