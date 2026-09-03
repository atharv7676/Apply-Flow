Problem
Job seekers who apply to many companies at once end up scattering information across Excel sheets, notes apps, browser bookmarks, emails, LinkedIn, WhatsApp, and screenshots. Over time they lose track of which companies they applied to, what position they applied for, when they applied, whether they were shortlisted or rejected, when to follow up, which resume version they used, and what stage each application is currently at.

Solution
ApplyFlow is a job application tracking platform that acts like a personal CRM for a job search. It brings all of the above into one dashboard so a user can add an application, track its status as it moves through stages, store the important details, manage interviews and follow-ups, and see an overview of how their job search is going. In plain words: apply to a job, save it in ApplyFlow, and let ApplyFlow track it from Applied through Online Assessment, Interview rounds, and finally Offer or Rejection.

Target Users
Job seekers actively applying to multiple companies at once, students, fresh graduates, and early career professionals. This is not a job board and not a networking platform, it's a tracking and management tool for applications the user is already making elsewhere.

MVP Features
Must have: authentication (register, login, logout, stay logged in), application management (create, view, edit, delete applications), application pipeline with status tracking, interview tracking, search and filtering, a dashboard with statistics, and profile management.
Nice to have: a Kanban-style board view for the pipeline, reminders, resume management, richer analytics like success rate and interview conversion rate.
Future: things like automatic job importing, browser extensions, or AI-based matching are explicitly out of scope for now.

Application Statuses
Saved, Applied, Assessment, Interview, Offer, Rejected, Withdrawn. A normal path looks like Saved to Applied to Assessment to Interview to Offer. But an application can also drop out at any point, for example Applied straight to Rejected, or Interview to Withdrawn if the user pulls out.

Pages
A public landing page, login and register pages, and then an authenticated app section containing a dashboard, an applications list, an individual application detail page, a new application form, an interviews page, and a profile page.

User Flow
First visit: land on the homepage, register, log in, arrive at the dashboard.
Adding a job: from the dashboard, click add application, fill in the form, save it, and it shows up on the dashboard and applications list.
Tracking it: the application moves through the pipeline stages, and interviews can be logged against it once it reaches the interview stage.

Data Requirements
An application needs company, position, location, job type, job URL, salary, applied date, status, resume used, and notes.
An interview needs a link to the application it belongs to, the round name, date, time, interview type (like phone, video call, onsite), and notes.
A user needs name, email, password, and role.
The core relationship is: a user has many applications, and each application can have many interviews.

Architecture
The stack is MERN. Frontend is React with Vite, Tailwind CSS, React Router, and either Context API or Redux Toolkit for state, using Axios or fetch to talk to the backend. Backend is Node.js with Express, exposing a REST API, using Mongoose to talk to MongoDB, with middleware for things like authentication and validation. Authentication uses JWT stored in an HTTP-only cookie, so the token isn't exposed to client-side JavaScript, which reduces the risk of it being stolen through something like an XSS attack.

Security Requirements
Every application and every interview must belong to a specific authenticated user, and one user should never be able to see or modify another user's data. Protected API routes must check the logged-in user's identity before returning or modifying any application or interview data.

Future Features
AI resume analysis, AI-based job matching, automatic job importing, email integration, a browser extension, job recommendations, and application auto-fill. None of these are touched until after the MVP is fully working.