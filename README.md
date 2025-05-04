<div align="center">
  <h1>Event Website</h1>
  <img src="./Screenshots/Banner.png" alt="Banner" width="1080">
</div>

<br />

<p>This is a Event Website with user registration section. 
<br />
built using:</p>

<ul>
  <li>Frontend → React.js<br />
  - Tailwind CSS | Framer Motion
  </li>
  <li>Backend → Node.js</li>
  <li>Database → MySQL</li>
</ul>

<hr>

<h2>1. Website Functionalities</h2>

<ul>
  <li><strong>Scroll Animations</strong> - Uses Framer Motion for scroll animations.</li>
  <li><strong>Registration Form</strong> - When a user enters registration details, they are saved to the database.</li>
</ul>

<hr>

<h2>2. How to Start the website</h2>

<h3>Prerequisites</h3>
<ul>
  <li>React.js</li>
  <li>Node.js</li>
  <li>MySQL</li>
</ul>

<hr>

<h3>2.1 Start Frontend (React.js)</h3>
<pre>
cd Client
cd events-website
npm install
npm run dev
</pre>

<hr>

<h3>2.2 Start Backend (Node.js)</h3>
<pre>
cd Server
npm install
npx nodemon index.js
</pre>

<hr>

<h3>2.3 Setup Database (MySQL)</h3>

<ol>
  <li>Create a new database in MySQL</li>
</ol>

<pre>
CREATE DATABASE event-app;
USE event-app;
</pre>

<ol start="2">
  <li>Create registrations table</li>
</ol>

<pre>
CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  job_title VARCHAR(100),
  company VARCHAR(150),
  phone VARCHAR(20),
  email VARCHAR(150),
  website VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
</pre>

<hr>

<h2>3. Website Demonstration</h2>

<h3>→ Register Form</h3>
<p>The registeration section of the website</p>
<img src="./Screenshots/Enter-user-data.png" alt="register section" width="600">

<hr>

<h3>→ Database</h3>
<p>Enter user details <br>Click <code>Register</code> button</p>
<img src="./Screenshots/database-save.jpg" alt="save to the database" width="600">

<hr>

<h2>4. Full website</h2>

<img src="./Screenshots/img1.png" alt="image 1" width="600">
<hr>
<img src="./Screenshots/img2.png" alt="image 2" width="600">
<hr>
<img src="./Screenshots/img3.png" alt="image 3" width="600">
<hr>
<img src="./Screenshots/img4.png" alt="image 4" width="600">
<hr>
<img src="./Screenshots/img5.png" alt="image 5" width="600">
<hr>
<img src="./Screenshots/img6.png" alt="image 6" width="600">
<hr>
<img src="./Screenshots/img7.png" alt="image 7" width="600">
<hr>
<img src="./Screenshots/img8.png" alt="image 8" width="600">



