import flyingWords from '../data/flying-words';
import { samples } from '../data/samples';

const nbPadSets = samples.game2.pads.length;
const nbWordSets = samples.game2.words.length;

const padSampleSets = [];
for (let i = 0; i < nbPadSets; i++) {
  padSampleSets.push(i);
}

const wordSampleSets = []
for (let i = 0; i < nbWordSets; i++) {
  wordSampleSets.push(i);
}

export default {
  words: {
    type: 'any',
    default: flyingWords,
  },
  showSliders: {
    type: 'boolean',
    default: false,
  },
  padSampleSet: {
    type: 'enum',
    default: 0,
    list: padSampleSets,
  },
  negativeWordsPercentage: {
    type: 'float',
    min: 0,
    max: 100,
    default: 50,
  },  
  wordSampleSet: {
    type: 'enum',
    default: 0,
    list: wordSampleSets,
  },
};