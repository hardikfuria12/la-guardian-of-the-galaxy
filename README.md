## LaGuardian of the Galaxy 

## Problem Statement

To set up a cloud environment on the Google Cloud Platform such that it scrapes the La Guardian Airport Parking Data every 30 seconds. This data should be then persisted on the Google BigQuery such that the retrieval of the data is efficient.


## Background Information

An Airport, generally has Terminals. Each Terminal, serves as an entry or exit point to one or group of Airlines. Each Terminal may or may not have associated Parking Spot.

## Question at hand

LGA has 3 Parking Spots near to the Terminals A, B, C/D. 

What can we possibly gain by scraping the occupancy data every 30 seconds from the website. 

Is there a correlation between the percentage of the occupany and the flights handled by those terminals at that point of time? By how much is there a delay in the actual timing of the eent and its effect on the occupancy. Why is this useful? 

## Scalabale Solution

For a Parking Management Company, there are a various upstream data sources. All these sources act independently to a certain extent. Every Source has a particular schema of data that they wish to produce data in. Our scalable soultion - "Groot", must be able handle all these events where data is produced. Groot wishes to delagate or order in this instance a particular way of handling the event (mind you in this case event is thought of as the event of data being produced). Groot on a higher level of abstraction doesnt really care what the data looks like, he only cares that its an upstream data source which has to be dealth in a certain way. So in order to do this, I think Groot requires the Avro Package. Using Avro, Groot can define the most important fields of data that he really care about at that instant (since in future Groot may be asked to consider a new data point).
<br>
Data which arrives in small quantities over a bounded or unbounded period of time can be thought of as messages. In this sense, when Groot gets all the new messages from the data sources, It posts those messages on a distributed forum - Kafka. It writes those messages in the order that it came in such that this forum can be now seen by various different MicroServices. MicroService consume the message from their respective “Topic” of interest. Groot doesnt really care about how the MicroServices (which is built by other guardians) consume the data. Other guardians will design those MicroServices based on the team discussion around questions like - To store it in the warehouse or not? Should it be transformed to another format? and all that jazz which Groot is not intersted in.


## Next Steps

1. Implement Nodejs script which produces messages using Avro-like serializer to a Kafka-like distributed messaging queue.


2. Find serverless in GCP based solutions.


3. Managed service or system built on bare bone resources. 


4. Clarity on async - await functions.



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
