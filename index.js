let express = require('express');
let app = express();

app.use(express.static('public'));

const data = {
"Vantiro-1": {
        "description": "INDUSTRIALISTS: Vantiro-1 prize loyalty above all other subspecies. While not overtly friendly towards low-boroq inlanders, Vantiro-1 are unlikely to initialize conflict; they are, however, particularly comfortable with self-defense, and very comfortable with verbal sparring when necessary. Far from being brittle, Vantiro-1 are blunt, generous, and feel most comfortable with a smaller and more familiar inner circle. They are also the most disciplined Vantiro subspecies, with a significant number of the population becoming masters of one or two crafts. Skills: Completion, commitment, listening, resilience.",
        "folder": "Vantiro-1",
        "image_count": 7,
        "shishiq": 5
    },
    "Vantiro-2": {
        "description": "GAMBLERS: Vantiro-2 are primarily known for their rowdy antics and constant travel. Unlike passive Vantiro-11 negotiators, Vantiro-2 are curious (sometimes nosey) novelty-seekers who are intereted in engaging with all other Vantiro on The Zenith. Vantiro-2 communities are often expansive and scattered, and Vantiro-2 boat-wanderers are not shy about knocking on doors to ask for a place to sleep. Common community activities include natural exploration, playing games, and sharing opinions. Skills: Conversation, competition, physical activities, confrontation.",
        "folder": "Vantiro-2",
        "image_count": 26,
        "shishiq": 3
    },
    "Vantiro-3": {
        "description": "SCHEMERS: Impish, talkative, and sly, Vantiro-3 are interested in local mischief (but not in any sort of legitimate conflict, confrontation, or politics of any kind). Vantiro-3 are generally laidback and often impartial on their preferences, with a propensity for running away from hard conversations and playing pranks. They are sought out for help with generating ideas, entertainment services, and occasionally theft. Skills: Mischief, avoidance, hospitality, participation.",
        "folder": "Vantiro-3",
        "image_count": 37,
        "shishiq": 3
    },
    "Vantiro-4": {
        "description": "STRATEGISTS: Vantiro-4 are among the most balance-oriented inhabitants of The Zenith. Communities are generally mid-sized and fairly cohesive, with minimal infighting and minimal interest in Zenith politics at large. Vantiro-4 are renowned for their steady, grounded, and consistent demeanors, and are often sought out as caretakers, architects, and medics. Skills: Planning, observation, mediation, stability.",
        "folder": "Vantiro-4",
        "image_count": 8,
        "shishiq": 4
    },
    "Vantiro-5": {
        "description": "INDIVIDUALISTS: Vantiro-5 are completely uninterested in being involved in external affairs on The Zenith, and generally prioritize personal growth over relational growth. Communities are typically very tight-knit and on the smaller side; Vantiro-5 strongly prefer the presence of familiarity over novelty, and often experience distress when there are changes within the shishiq. They are the most highly-sought after philosophers, archivists, and engineers of the five shishiqs. Skills: Optimization, preservation, intrigue, peacefulness.",
        "folder": "Vantiro-5",
        "image_count": 21,
        "shishiq": 3
    },
    "Vantiro-6": {
        "description": "IDEALISTS: Vantiro-6 are strongly inclined towards familiar people, places, and experiences. While not generally interested in getting involved in the affairs of other shishiqs, Vantiro-6 are also very curious, and are very interested in artifacts, visitors, and other incoming goods from neighboring shishiqs. Many Vantiro-6 enjoy social activities that emphasize the shared experience of building, discovering, and learning, rather than direct interaction between individuals. They are renowned architects, collectors, and problem solvers, and Vantiro-6 communities are major travel destinations due to their libraries, city builds, and resources. Skills: Figuring-out, daydreaming, archiving, mapping.",
        "folder": "Vantiro-6",
        "image_count": 45,
        "shishiq": 3
    },
    "Vantiro-7": {
        "description": "INVESTIGATORS: Vantiro-7 are the most naturally inquisitive, extroverted, and sometimes naive of the population of The Zenith. Their close proximity to shishiq 1 affords an unusual opportunity to bridge outer- and inner-level shishiqs; Vantiro-7 are very invested in the development of individual relationships, often from a place of attempting to improve understanding between communities outside of a political lens. As part of this, Vantiro-7 enjoy challenging their deeply-held beliefs and trying new activities. They are revered as being excellent guests, reliable travel companions, and highly resourceful. Skills: Flexibility, friendship, optimism, persuasion.",
        "folder": "Vantiro-7",
        "image_count": 8,
        "shishiq": 2
    },
    "Vantiro-8": {
        "description": "EXCEPTIONALISTS: Vantiro-8 hold strong convictions about their beliefs, and do not tend to actively seek out contradictory information. Communities are generally mellow, slow-moving, and intellectually oriented. Vantiro-8 typically hold high standards for their relationships, and thrive in environments where shared ideas and beliefs create a social bond. Skills: Pensiveness, articulation, critique, consistency.",
        "folder": "Vantiro-8",
        "image_count": 14,
        "shishiq": 3
    },
    "Vantiro-9": {
        "description": "TECHNOLOGISTS: Vantiro-9 are strongly inclined towards similar community, finding comfort and solace in shared interests. Most Vantiro-9 remain in shishiq 1 for most of their lives and only rarely travel to outer rings. Communities tend to hold fairly consistent and traditional beliefs, and a strong emphasis is placed on ideological beliefs over individualism or even collectivism. Vantiro-9 are often involved in large-scale projects and tend to enjoy arguments, astronomy, and infrastructure expansion. Skills: Teamwork, routine, debate, assertiveness.",
        "folder": "Vantiro-9",
        "image_count": 14,
        "shishiq": 1
    },
    "Vantiro-10": {
        "description": "Elusive, and not yet defined...",
        "folder": "Vantiro-10",
        "image_count": 0,
        "shishiq": 5
    },
    "Vantiro-11": {
        "description": "NEGOTIATORS: Vantiro-11 are highly socially-oriented and loosely-organized, with a strong desire to learn and understand other cultures from an advocacy perspective. Comfortable discussing many topics related to The Zenith's political charge, Vantiro-11 are generally motivated to participate in and mediate conversation, bridge gaps, and expand horizons, but predominantly from a place of intrigue rather than emotion. The ecosystem of The Zenith is of great interest to Vantiro-11, as opposed to individuals. Vantiro-11 are ready and willing to change their beliefs and opinions, try new things, and take accountability. They are often in roles related to diplomacy, geography, and data collection. Skills: Active listening, adaptability, advocacy, self-regulation.",
        "folder": "Vantiro-11",
        "image_count": 22,
        "shishiq": 2
    },
    "Vantiro-12": {
        "description": "IMAGINEERS: Vantiro-12 strongly value positive adaptation to adversity. The Vantiro-12 culture is mainly geared towards making peace with discomfort and finding joy in dark places. Communities are typically shy, curious, and gentle, with a willingness to have new experiences when they visit home, but less of an inclination to leave and seek them out. Vantiro-12 are often sought out as good listeners, helpful tinkerers, and crafters with a specialization in repurposing or saving resources. Skills: Creativity, self-soothing, empathizing, inquiring.",
        "folder": "Vantiro-12",
        "image_count": 18,
        "shishiq": 5
    },
};

app.get('/', (request, response) => {
    console.log(request);
    response.send("Hello");
});

let port = 3000;
app.listen(port, () => {
  console.log('Server listening on localhost:', port);
});

app.get('/data', (request, response) => {
    response.json(data);
});

app.get('/data/:special-data', (request, response) => {
    const specialData = request.params['special-data']; // Get the special data from the URL
    const vantiroInfo = data[specialData]; // Look for the matching data in the data object

    if (vantiroInfo) {
        response.json(vantiroInfo); // Send the specific data as a JSON response
    } else {
        response.status(404).json({ message: "Vantiro data not found." }); // Send a 404 error if not found
    }
});
