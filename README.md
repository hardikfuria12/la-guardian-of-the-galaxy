## LaGuardian of the Galaxy 

## Problem Statement

To set up a cloud environment on the Google Cloud Platform such that it scrapes the La Guardian Airport Parking Data every 30 seconds. This data should be then persisted on the Google BigQuery such that the retrieval of the data is efficient.


## Background Information

An Airport, generally has Terminals. Each Terminal, serves as an entry or exit point to one or group of Airlines. Each Terminal may or may not have associated Parking Spot.

## Question at hand

LGA has 3 Parking Spots near to the Terminals A, B, C/D. 

What can we possibly gain by scraping the occupancy data every 30 seconds from the website. 

Is there a correlation between the percentage of the occupany and the flights handled by those terminals at that point of time? By how much is there a delay in the actual timing of the eent and its effect on the occupancy. Why is this useful? 



## Basic Class Diagram

Attached Image.


## Useful Insights

	1.	What us 


## Import Queries.

1 Find the period time when there was a jump of occupancy was more than 5%

2. three days when the occupany reahced more than 60 percent for 8  consecutive days.





## Business Importance.



## Database Design
<br><p><b>
Table Termnal-Occupancy
</b></p><br>
parking-lot-id
<br>timestamp
occupancy 
<br>

Table parking-lot

parking-lot-id 
terinal-id  can be null
name


table parking-lot size
timestamp 
size
parking-lot-id



table 
