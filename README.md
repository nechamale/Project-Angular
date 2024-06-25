# volunteersPlacement - Volunteer Management and Scheduling System

volunteersPlacement is a web application for managing and scheduling volunteers and their transport. The system allows for the management of volunteers and their weekly transport schedules. The application uses Angular for the client-side and .NET Core for the server-side.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Introduction

volunteersPlacement is designed to help organizations manage volunteers efficiently and schedule them for transport on a weekly basis.

## Features
- View a list of volunteers
- Update volunteer details
- Add new volunteers
- Delete volunteers
- 
- For each day, the available volunteers for that day are displayed
- An indication of each day that is inserted.

## Getting Started

### Prerequisites

To run this project, you need to have the following software installed:

- Node.js (with npm)
- Angular CLI
- .NET Core SDK

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nechamale/volunteersPlacement.git
   cd volunteersPlacement
   ```

2. **Install client dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**:
   ```bash
   cd ../server
   dotnet restore
   ```

### Running the Application

1. **Start the .NET Core API**:
   ```bash
   cd server
   dotnet run
   ```

   The API will typically run on `http://localhost:5183`.

2. **Start the Angular application**:
   ```bash
   cd ../client
   ng serve
   ```

   The Angular app will typically run on `http://localhost:4200`.

3. **Access the application**:
   Open your browser and navigate to `http://localhost:4200`.

## Project Structure

```
volunteersPlacement/
│
├── client/                            # Angular client application
│   ├── src/                           # Source files
│   │   ├── app/                       # Angular moduls and services
|   |   |   ├── scheduling/            # modul scheduling
|   |   |   ├── volunteers/            # modul volunteers          
|   |   |   ├── app-routing.module.ts  # page of routing    
|   |   |   ├── app-routing.module.ts  # main file    
│   │   ├── assets/                    # Static assets
│   │   ├── environments/              # Environment configuration
│   │   ├── proxy.conf.json            # proxy file
│   │   ├── index.html                 # Main HTML file
│   │   ├── main.ts                    # Main entry point
│   │   └── styles.css                 # Global styles
│   ├── angular.json                   # Angular configuration
│   ├── package.json                   # npm dependencies and scripts
│   └── README.md                      # Client README
│        
├── server/                            # .NET Core API
│   ├── Controllers/                   # API Controllers
│   ├── Services/                      # Service for API
│   ├── Models/                        # Data models
│   ├── Program.cs                     # Main program entry point
│   ├── Startup.cs                     # Application startup configuration
│   └── appsettings.json               # Application settings
│
├── .gitignore                         # Git ignore file
├── README.md                          # Project README
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
## User Interface
### Volunteers Page:
![image](https://github.com/nechamale/angular-project/assets/150395714/ef80a74d-e925-4b8b-83f0-03c196900b21)

### Edit page:
![image](https://github.com/nechamale/angular-project/assets/150395714/0ffb8afa-e26d-49bd-8c37-445a9e192fd7)

### Scheduling Page:
![image](https://github.com/nechamale/angular-project/assets/150395714/662b602d-f87c-4aca-974b-5cb2f8f4a8d4)

