import snakeize from "snakeize";
import camelize from "camelize";
import connection from "../connection";

const TABLE = "users";

export async function getByEmail(email) {
  const [result] = await connection.select("*").from(TABLE).where({ email });

  return result ? camelize(result) : null;
}

//j payload aauchha (payload) ma yeslai TABLE ma insert gardine ani return gardine
export async function create(payload) {
  const [result] = await connection
    .insert(snakeize(payload))
    .into(TABLE)
    .returning("*");

  return camelize(result);
}
