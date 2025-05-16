# Holly Engineering Take-Home Assignment

## Results
In a little under 3 hours (2 hours 58 minutes) I was able to get a chat working as seen here: [Loom vide] (https://www.loom.com/share/fa1fa5e1095148b1ac6b07f9f2a80813?sid=4397de66-9f0a-431c-b371-ea594409686f).  I ran out of time to make functions that could A. return the k most relevant rows from the `job-descriptions.json` and `salaries.json` and B. contribute that data to the request sent to the Cohere LLM.

In the first hour I played around with trying to use Tailwind, however, I have not spent a lot of time with inline CSS and the Tailwind syntax so I reverted to a formatting that I am more familiar with.  For the next 30 minutes or so, I worked through the kinks of making the chat handle inputs correctly in React.  The last 90 or so minutes were spent finding an approrpriate LLM to use, getting a response from that model, and setting that to the client page.  I used a Cohere model because of the generous free tier.

If I were to pull this code down to run locally, I would have to:
1. install locally - open a target folder, initialize it as a git repo using the terminal command "git init" then run the command "git clone https://github.com/StevenSpeck/holly-eng-take-home.git"
2. ensure all dependencies are installed on your machine - I specifically had to install next using "npm install next"
3. get a Cohere API key to use - go to [Cohere] (https://cohere.com/) and click on "Try the playground" which after selecting a way to log in should present you with your own private key.  Set up a .env folder and set the variable with NEXT_PUBLIC_CO_API_KEY=YOUR_KEY where YOUR_KEY is the key without any quotation marks or offsets
4. run locally - in terminal type 'npm run dev' and hit enter!

Problem description is down below

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

















## Overview

This take-home assignment is designed to evaluate your technical skills across several areas important to our engineering team. Please spend no more than 2-3 hours on this task. It's completely fine if you don't finish everything - we're more interested in understanding your approach and thought process.

## Goals

This assignment evaluates your skills in:

1. Data processing
2. Next.js development
3. LLM integration
4. TypeScript

## The Challenge

You'll build a simple chat interface that allows users to query job and salary information stored in JSON files. Think of it as a basic HR assistant that can answer questions about job descriptions and compensation. The interface doesn't have to be anything fancy.

## Requirements

### 1. Chat Interface (~30 mins)

- Create a dedicated chat page (`/chat`) with a message interface
- Style the interface so AI messages appear on the right and human messages on the left
- The UI doesn't need to be elaborate - focus on functionality over aesthetics

![Sample Application](public/sample.png)

### 2. LLM Integration (~1 hr 30 mins)

- Integrate with an LLM of your choice
- The LLM should be able to answer questions about the data in your matched dataset
- **Important**: Your implementation should parse the user's query to identify which specific job they're asking about, and only pass the relevant job information to the LLM - do not pass the entire dataset to the LLM with each request
- Example queries and responses:
  - "What are the knowledge, skills, and abilities for the Assistant Sheriff San Diego County position?"
    - "The Assistant Sheriff in San Diego County should have knowledge of: local law enforcement agencies in San Diego County, local/state/federal laws, law enforcement rules and regulations, community-based policing..."
  - "What is the salary for the Assistant Chief Probation Officer in San Bernardino?"
    - "The Assistant Chief Probation Officer in San Bernardino has a salary range from $70.38 to $101.00 per hour (salary grades 1 and 2)."

## Technical Requirements

- Use Next.js for the application framework
- Implement proper TypeScript typing throughout the application
- Implement server actions where appropriate
- Do not use a dedicated backend server or database - all data should be stored and retrieved from the JSON files
  - By dedicated backend server, we mean not setting up separate Node.js, Flask, or other backend services. You are permitted to use Next.js built-in server capabilities.
  - By dedicated database, we mean not setting up a MongoDB, PostgreSQL, MySQL or similar database system. All data should be stored and retrieved from JSON files.
- Clean, maintainable code with clear organization

## Submission

Please submit:

1. The complete codebase in a public GitHub repository
2. Instructions for running the application locally
3. A brief writeup explaining your approach, technologies used, and any challenges you faced

## Notes

- You're free to use any NLP approach (vector embeddings, regex, etc.) to enable querying the data
- Focus on demonstrating your understanding of Next.js patterns, TypeScript, and clean code organization
- Don't spend too much time on UI aesthetics - functionality is the priority
- Use JSON files as your database - no need for external data storage
- We'll be evaluating how efficiently you process and filter data before sending to the LLM
