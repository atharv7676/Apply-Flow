# ApplyFlow

## Problem
<!-- What's broken today? Where does info get scattered? What do job seekers forget? -->



## Solution
<!-- One-line pitch, then the core flow: Find -> Save -> Apply -> Track -> Interview -> Offer/Rejection -->



## Target Users
<!-- Who is V1 for? Who is it explicitly NOT for? -->



## MVP Features

### 🔴 Must Have
<!-- Required for ApplyFlow to work at all -->
-

### 🟡 Nice to Have
<!-- Post-MVP, but planned -->
-

### 🟢 Future
<!-- V2/V3 ideas, not touched now -->
-


## Application Statuses
<!-- The pipeline stages, in order, plus branch points (e.g. Applied -> Rejected) -->

```text
SAVED
APPLIED
ASSESSMENT
INTERVIEW
OFFER
REJECTED
WITHDRAWN
```

### Status Transition Rules
<!-- Which statuses can move to which? Any that are dead-ends? -->



## Pages / Routes
<!-- Public vs protected routes -->

```text
/
├── Landing Page
├── /login
├── /register
└── /app
    ├── /dashboard
    ├── /applications
    ├── /applications/:id
    ├── /applications/new
    ├── /interviews
    └── /profile
```


## User Flow

### First Visit
<!-- Landing -> Register -> Login -> Dashboard -->

### Adding a Job
<!-- Dashboard -> Add Application -> Fill Form -> Save -->

### Tracking It
<!-- Applied -> Assessment -> Interview -> Offer, or -> Rejected -->

### Interview Flow
<!-- How does a user log an interview against an application? -->


## Data Requirements

### Application Fields
<!-- Required vs optional. Data types. Example instance. -->

| Field | Type | Required? | Notes |
|---|---|---|---|
| Company | | | |
| Position | | | |
| Location | | | |
| Job Type | | | |
| Job URL | | | |
| Salary | | | |
| Applied Date | | | |
| Status | | | |
| Resume Used | | | |
| Notes | | | |

### Interview Fields
<!-- e.g. date, round, type (phone/onsite/technical), interviewer, notes, outcome -->

| Field | Type | Required? | Notes |
|---|---|---|---|
| | | | |

### User / Profile Fields
<!-- e.g. name, email, password hash, created date -->

| Field | Type | Required? | Notes |
|---|---|---|---|
| | | | |


## Dashboard Requirements
<!-- What stats/widgets does the dashboard need to show? -->

### Summary Stats
-

### Recent Applications
<!-- How many shown? What columns? -->

### Upcoming Interviews


## Search, Filter & Sort Requirements
<!-- What can the user search by? Filter by (status, company, date range)? Sort by? -->



## Security Requirements
<!-- Auth strategy, data isolation between users, protected route rules -->

- Every application and interview must belong to the authenticated user
-


## Architecture Overview
<!-- High-level stack + auth flow, filled in once decided -->

```text
React Frontend
     │ HTTP
     ▼
Express REST API
     │
Controllers / Middleware
     │
Mongoose
     │
MongoDB
```

### Auth Flow

```text
React -> Login API -> Backend verifies -> JWT -> HTTP-only Cookie -> Protected APIs
```


## Non-Functional Requirements
<!-- Performance, validation, error handling expectations, responsiveness, etc. -->



## Open Questions
<!-- Anything undecided that needs a call before/during build -->
-


## Future Features
<!-- Explicitly deferred to V2/V3 -->
-