import Request from "./Request";
export default class Bible extends Request {
  constructor() {
    super();
  }
  /**
   * Retrieve bible verses from api
   * Look up book from bible
   * @param {string} text
   * @return Object
   */
  async fetchBook(text) {
    const verses = await this.get();
    // const verses = { payload: [] };
    return verses.data.find(verse => verse.abbrev === text);
  }
}
