import producer from './producer';

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });

  console.log('respuesta', response);

  await producer.disconnect();
};

run();
