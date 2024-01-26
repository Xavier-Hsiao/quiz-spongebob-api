import questions from "../../questions.json";

export default async ({ req, context }) => {
  const json = JSON.stringify(questions);
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return new Response(json, options);
};

// export default async (req, context) => {
//   return new Response("Hello, world!");
// };
