import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();
export default producer;
