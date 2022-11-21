import requests
import psycopg2

objs = requests.get("https://collectionapi.metmuseum.org/public/collection/v1/objects").json()

with psycopg2.connect("dbname=davinci user=postgres") as conn:
    with conn.cursor() as cur:

        #objects has two keys: 'total', which shows number of items, and 'objectIDs', which gives the list of id's.
        ids = objs['objectIDs']
        

        count = 0
        totalCount = 0
        
        start = 200000
        stop = 250000
        total = stop - start

        for i in range(start,stop):
            totalCount = totalCount+1
            if i not in ids:
                #print(str(i)+" not found")
                continue
            obj = requests.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}".format(id=i)).json()
            if obj['isPublicDomain'] and obj['isHighlight']:
                title = obj['title']
                artist = obj['artistDisplayName']
                primaryImage = obj['primaryImage']
                additionalImages = obj['additionalImages']
                objectName = obj['objectName']
                culture = obj['culture']
                period = obj['period']
                department = obj['department']
                portfolio = obj['portfolio']
                artistDisplayBio = obj['artistDisplayBio']
                objectDate = obj['objectDate']
                medium = obj['medium']
                
                cur.execute(
                "INSERT INTO artwork (title, artist, primaryImage, additionalImages, objectName, culture, period, department, portfolio, artistDisplayBio, objectDate, medium) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                (title, artist, primaryImage, additionalImages, objectName, culture, period, department, portfolio, artistDisplayBio, objectDate, medium))
                count = count+1
            

            if totalCount%100 == 0:
                percent = (totalCount/total)*100
                print("{p}% done, added {n} items so far.".format(p=percent,n=count))
        print("Done! Checked {n1} and added {n2} items.".format(n1=total, n2=count))
        cur.close()
    conn.commit()   
    conn.close()



