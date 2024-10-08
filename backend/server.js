import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, testConnection } from "./db/connection.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

// // Model imports
import provider from "./db/models/provider/provider.js";
import referral from "./db/models/provider/referral.js";

// // Auth imports

// Public route imports

// User route imports

// // Organiser route imports
// import organiserProfileRoutes from "./routes/organiser/organiserProfile.js";
// import eventCreateRoutes from "./routes/organiser/createEvent.js";
// import eventUpdateRoutes from "./routes/organiser/updateEvent.js";
// import changeOrganiserPasswordRoutes from "./routes/user/changePassword.js";

// // Auth routes
// app.use("/user/auth", userRoutes);
// app.use("/organiser/auth", organiserRoutes);

// // Public routes
// app.use("/event", eventListRoutes);
// app.use("/event", getEventRoutes);
// app.use(sendOtp);
// app.use(verifyOtp);

// // User routes
// app.use("/user", userBookmarkRoutes);
// app.use("/user", userRegisteredRoutes);
// app.use("/user", userProfileRoutes);
// app.use("/user", changeUserPasswordRoutes);

// // organiser routes
// app.use("/organiser", organiserProfileRoutes);
// app.use("/organiser", changeOrganiserPasswordRoutes);
// app.use("/event", eventCreateRoutes);
// app.use("/event", eventUpdateRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello World from Jobbridge!!");
});

app.listen(3000, () => {
  testConnection();
  (async () => {
    bookmarkEvent.belongsTo(Event, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
    });
    await sequelize.sync({ alter: true });
  })();
  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
