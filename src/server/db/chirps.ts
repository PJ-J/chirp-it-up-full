import { Query } from "./index";

const all = async () => Query('SELECT * FROM chirps');
const one = async (id: any) => Query('SELECT * FROM chirps WHERE id = ?', [id]);

export default {
  all,
  one
}