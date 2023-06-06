// FEEDBACK SPEECH RECOGNITION NAVIGATION
const getVoice = (voiceName) => {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.name === voiceName);
};

const speechFeedback = (text) => {
  const synth = window.speechSynthesis;
  const answerVoice = getVoice("Microsoft Zira - English (United States)");

  const u = new SpeechSynthesisUtterance(text);
  u.voice = answerVoice;
  u.rate = 0.8;

  synth.speak(u);
};

export default speechFeedback;
