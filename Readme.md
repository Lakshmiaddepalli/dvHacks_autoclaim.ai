## FendBend.ai

### Objective:

To build a disruptive cloud based fintech business idea as a part of BCG digital ventures hackathon : www.dvhacks.com in the insurance space that uses Artificial Intelligence to augment and automate the current autoclaims process that looks to transform the process and experience for both customers as well as insurance companies.

-> Reduce time and operation costs for both consumers involved in insurance claim and companies who seek to lessen their costs.

-> Provide a scoring like system for drivers similar to the concept of credit score so as to keep both roads safe for people as well as make it easier for insurance companies to identify customers for retention.

#### Languages/Libraries/Tools used:

- IBM Watson visual recognition API (Image recognition)

- Node.js(Backend Rendering)

- Twilio (Chatbot and Messaging service)

- AWS Lambda, API Gateway (Cloud)

- DynamoDB (Databases)

- Markdown (Documentation)

- Git (Version Control)

- SageMaker (Cloud ML) - Machine Learning - Linear regression, Logistic Regression (Currently for now, subjective to change). (Could not use this, as we couldnt finish on time).


#### Project Structure and how to run this project:

- As, this is a cloud based solution, you would need to setup an twilio account for getting the workflow which we used for building our chatbout service, Stephie, who guides us through.
- For running the ibm watson damage detection and fault detection module, download the repository, go to the server web app, run npm install and npm start in the directory where the index.html lies.

- As per the workflow attached, 
![alt text](https://github.com/Lakshmiaddepalli/dvHacks_autoclaim.ai/blob/master/WorkFlow.png)

#### Project features:

1. Intelligent Vehicle Damage Estimation.
    
    #### Vehicle Damage Estimation = a*CarModel+ (b1 * Area_of_damage1 * severity + b2 * Area_of_damage2 * severity ... bn  Area_of_damageN * severity)
    
    #### The image classification model built here gives us the areas of damages (like windshield, front bumper etc) along with severity(High, medium , low).
    
2. Intelligent Fault detection system.
 
 This is the differentiator, which many companies in this space havent stepped in.
 
 #### Fault(A,B) = Features_from_Driver_history + chatbot_judgement_score + CarModel + Imapact_area + Severity.
 
 Impact Areas (Front/ Rear) are used by insurance companies and policies for fault prediction.
 
 Chatbot judgement score helps put the narrative score difference between the stories claimed by two people involved in the accident.

3. Stephie, the Chatbot that guides the user for the autoclaim proccess as well as used in detecting the fault when an accident occurs.
    
4. Driver Score for accountability that is an output of the fault model in numbers as opposed to classification.

#### Assumptions:

1. We are targeting majorly cases for rear ended accidents which make up to 40% the major accidents.
2. We have ideated the solution of fault prediction to be scalable as in data comes in from intelligent sources(future cars) which helps the model to be learning and improving with experience.
3. Chatbot currently built now, is text based, but was aimed to be voice based, for claims, as no one would want to spend that much time.
4. Driver history plays an imortant role in fault prediction, but is in scope for being gelled along with technology grows like OBD sensors, intelligent cars that give us these features and ensure scalability.
4. From technical perspective, we have independently built the fault detection/damage estimation module and the chatbot and lacked time and faced issues integrating them completely.

#### Observations and Issues faced:

1. Due to the limited account (free account on IBM Watson) and limited computation power in free account, it took time.
2. Connecting to the the IBM Watson API endpoint and getting results within a time period and faced authentication issues.

#### References:
https://venturebeat.com/2017/02/04/how-ai-is-changing-the-way-we-assess-vehicle-repair/
https://www.thezebra.com/insurance-news/3387/defining-fault-in-insurance-scenario/ 
https://www.justia.com/injury/motor-vehicle-accidents/car-accidents/chain-reaction-multi-vehicle-accidents/
https://www.insurancehotline.com/at-fault-rules/
https://www.insurancehotline.com/fault-determination-in-a-parking-lot-accident/
http://www.minkinsurance.com/Mink/media/Documents/FAULT-CHART.PDF
https://www.wikihow.com/Determine-Who-Is-at-Fault-in-a-Car-Accident
https://github.com/IBM/watson-vehicle-damage-analyzer
https://medium.com/ibm-watson/visual-recognition-378dd49ee272



#### Team members:

1. Venkat Chandra - venkat.r.chandra@gmail.com 
2. Sree Lakshmi Addepalli - sla410@nyu.edu
3. Suyash Chopra - sc6185@nyu.edu
4. Sree Gowri Addepalli - sga297@nyu.edu
