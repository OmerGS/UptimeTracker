const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

const sites = [
    { name: 'SCP : Secret Laboratory', url: 'http://teamcroissant:7777' },
    { name: 'ChatGPT', url: 'https://chat.teamcroissant.fr/' },
    { name: 'TeamCroissant', url: 'https://teamcroissant.fr/' },
    { name: 'MathsALaMaison', url: 'http://omergs.com:50000/users' },
];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/check-sites', async (req, res) => {
    const results = [];

    for (const site of sites) {
        try {
            const response = await axios.get(site.url, { timeout: 5000 });

            results.push({
                name: site.name,
                url: site.url,
                reachable: true, 
            });
        } catch (error) {
            if (error.response && error.response.status === 403) {
                results.push({
                    name: site.name,
                    url: site.url,
                    reachable: true,  
                    status: "Accès refusé : clé API invalide", 
                });
            } else {
                results.push({
                    name: site.name,
                    url: site.url,
                    reachable: false,
                });
            }
        }
    }

    res.json(results);
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
