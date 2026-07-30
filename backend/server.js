require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api', projectsRouter);
app.use('/api', contactRouter);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
