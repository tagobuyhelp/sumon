import content from '../../kazi-mahasin-azim.content.json';

export const getContent = (section) => {
    if (content && content[section]) {
        return content[section];
    }
    return null;
};

export const getHeroContent = () => {
    return {
        name: "Kazi Mahasin Azim (Sumon)",
        tagline: "Rise Beyond Limits",
        roles: ["ENTREPRENEUR", "BUSINESS COACH", "MOTIVATIONAL SPEAKER", "SOCIAL REFORMER"]
    };
};

// Add more utility functions as needed to parse different sections of content