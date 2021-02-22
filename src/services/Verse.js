import verses from "@/data/verses.json";

export default class Verse {
  constructor(bible) {
    this.data = verses;
    this.bible = bible;
    this.generateRandomNumber = Math.ceil(
      Math.random() * Math.ceil(this.data.length)
    );
  }
  /**
   * Get verse from helper json
   * Return formatted verse from bible.
   * @return <Promise>
   */
  getBibleText() {
    const verse = this._filter(this.data[0]);
    return this._getBibleChapters(verse);
  }
  /**
   * Lookup the verse from bible
   * @param {object} {text,chapter, verse, to}
   * @return <Promise>
   */
  async _getBibleChapters({ text, chapter, verse, to }) {
    let defaultVerse = to === 0 ? verse : to,
      verseFrom = verse - 1,
      verseTo = defaultVerse - 1;
    const data = await this.bible.fetchBook(text);
    let result = { book: data.name, chapter: chapter, contents: [] };
    for (let text = verseTo; text >= verseFrom; text--) {
      result.contents.push({
        verse: text + 1,
        text: data.chapters[chapter - 1][text]
      });
    }
    return result;
  }
  /**
   * Return Random helper verse
   * @param {object} payload
   */
  _filter(payload) {
    return payload.verses[0];
  }
}
