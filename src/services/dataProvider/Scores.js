export const SCORES = {};

const loadScores = (scores) => {
    scores.keys().forEach(score_name => SCORES[score_name.replace("\./", "")] = scores(score_name));
};

export default loadScores;

