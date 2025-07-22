export async function onRequest(context) {
  console.log('check context', context);
  return new Response("Hello, world 1!" + JSON.stringify(context.params) + JSON.stringify(test))
} 