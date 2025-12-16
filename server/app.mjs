import cors from "cors";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { get } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const filePath = `${__dirname}/träning.json`;


const saveTraining = (trainingData) {
      let training = []

  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, "utf-8"); 
      training = JSON.parse(data)    

   
      if(!Array.isArray(training)) training = []; 
    } catch (error) {

      console.error("Error during read of träning.json:", error)
      training = [];
    }
    
  }

  training.push(trainingData);

  try {
    console.log({training: training});

    
    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));
    } catch (error) {
    console.error("Error writing to reviews.json:")
  }
    
}

const getTraining = () => {

  const data = fs.readFileSync(filePath, "utf-8"); //Läser filens innehåll som text 

  try {
    if (fs.existsSync(filePath)) return JSON.parse(data);

    return [];
  } catch (error) {
    console.error("Error reading training:", error);
    
    return [];
  }
}

const deleteTraining= (trainingId) => {
    try {
        if(!fs.existsSync(filepath)) {
            return false;
        }

        const data = fs.readFileSync(filePath, "utf-8");

        let training = JSON.parse(data);

        const filteredTraining = training.filter((training) => training.id !== trainingId);

        if (training.lenght === filteredTraining.length) {
            return false;
        }

        fs.writeFileSync(filePath, JSON.stringify(filteredTraining, null, 2))

        return true;
    } catch (error) {
        console.error("Fehler beim Löschen:", error);
        return false;
    }
};

app.post ("/save-training", (req, res) => {
  const { exercise, duration, date, notes } = req.body;
  console.log("Training mottagen:", req.body);

  const id = uuidv4();

  try {
    const newTraining = {
        exercise,
        duration,
        date,
        notes,
        id,
        timestamp: new Date().toISOString(),
    };


    saveReview(newTraining);

    res.status(201).json({ message: "Training saved", training: newTraining });
  } catch (error) {
    
    console.log("Fel vid spara trainig:", error);

    res.status(500).json({ success: false });
  }
});

app.get("/training", (req,res) => {

  try {
    const trainig = getTraining();

    res.status(200).json({success: true, data: reviews})
  } catch (error) {
    console.error("Error reading file:", error)

    res.status(500).json({success: false})
  }
})
app.delete("/trainig/:id", (req, res) => {
    console.log("DELETE Request empfangen");

    const trainingId = req.params.id;

    console.log("Training ID zum Löschen", trainingId);

    try {
        const deleted = deleteTraining(trainingId);

        if(deleted) {
            res.status(200).json({
                success: true,
                message: "Training gelöscht"
            });
        } else {
            res.status(404).json({
                success: false, 
                message: "Note nicht gefunden"
            });
        }
    } catch (error) {
        console.error("Fehler im DELETE Endpoint:", error);

        res.status(500).json({
            success: false,
            message: "Serverfel beim Löschen"
        });
    }
});
export default app;