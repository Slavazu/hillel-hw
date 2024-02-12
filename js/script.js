function analyzeText(text) {
  const words = text.toLowerCase().match(/\b[\wа-яіїє']+\b/g) || [];
  const uniqueWords = new Set(words);
  return {
    uniqueWordsCount: uniqueWords.size,
    uniqueWords: Array.from(uniqueWords),
  };
}

const text = 'In the city of Odesa, located in the south of Ukraine, today is observed wonderful weather. The clear sky without a single cloud predicts a pleasant day. The air temperature is around 24 degrees Celsius, which is perfect for walks near the sea. A light breeze from the sea makes this day particularly pleasant, providing freshness and a sense of comfort. The forecast for the evening promises to maintain clear weather with a slight drop in temperature to 20 degrees Celsius. It\'s the ideal time for an evening stroll through the city streets or relaxing on the beach, enjoying the sunset. Residents and guests of Odesa can expect a beautiful day filled with sunlight and positive emotions.\n';

const analysisResult = analyzeText(text);

console.log(`Кількість унікальних слів: ${analysisResult.uniqueWordsCount}`);
console.log(`Унікальні слова: ${analysisResult.uniqueWords.join(', ')}`);
