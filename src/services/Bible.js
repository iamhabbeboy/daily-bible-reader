import Request from "./Request";
import books from "@/data/books.json";
export default class Bible extends Request {
  constructor() {
    super();
  }
  /**
   * Retrieve bible verses from api
   * Look up book from bible
   * @param {string} text
   * @returns Object
   */
  async fetchBook(text) {
    const verses = await this.get();
    return verses.data.find(verse => verse.abbrev === text);
  }
  /**
   * Retrieve json books
   * @returns object
   */
  async getChapters() {
    return await books;
  }
}
