Del 1:

Fråga 1:
a) GET= opens a message or post gets data - Nästan helt rätt. GET används för att hämta något från servern
app.get("/reviews", (req,res) => {...}) //backend
const response = await axios.get(`${API_URL}/reviews`) //frontend

b) POST= creates a new message or post posts data - Rätt. Vi använder POST för att skicka något till en server
app.post ("/save-reviews", (req, res) => {...}); //backend
const response = await axios.post(`${API_URL}/save-reviews`, reviewData); //frontend

c) DELETE= deletes a message or post with the ID deletes data - Rätt. Vi använder Delete för att radera något på en server
app.delete("/reviews/:id", (req, res) => {...}); //backend
const response = await axios.delete(`${API_URL}/reviews/${reviewId}`); frontend

Fråga 2: - Rätt
Frontend (client) sckickar http-requests med axios och backend (server) svara med http-responses med res.json.

Format JSON
