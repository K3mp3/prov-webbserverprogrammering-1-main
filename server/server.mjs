import app from "./app.mjs";

const PORT = 3000;

app.listen(PORT, () => {
  // Ska vara `` och inte ""
  console.log("Server is running on port: ${PORT}");
});
