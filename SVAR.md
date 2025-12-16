Del 1:

Fråga 1: 
a) GET= opens a message or post  
app.get("/reviews", (req,res) => {...}) //backend
const response = await axios.get(`${API_URL}/reviews`) //frontend

b) POST= creates a new message or post 
app.post ("/save-reviews", (req, res) => {...}); //backend
const response = await axios.post(`${API_URL}/save-reviews`, reviewData); //frontend

c) DELETE= deletes a message or post with the ID
app.delete("/reviews/:id", (req, res) => {...}); //backend
const response = await axios.delete(`${API_URL}/reviews/${reviewId}`); frontend



Fråga 2: 
Frontend (client) sckickar http-requests med axios och backend (server) svara med http-responses med res.json.

Format JSON


