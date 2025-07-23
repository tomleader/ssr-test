async function sleep(time) {
  time = time || 5000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

export async function onRequest(context) {
  await sleep();
  return new Response("Hello, world! in async function")
} 
