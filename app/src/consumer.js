import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

await consumer.connect();
await consumer.subscribe({ topic: 'test', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log('Nuevo mensaje ', {
      value: message.value.toString(),
    });
  },
});

await consumer.disconnect();
