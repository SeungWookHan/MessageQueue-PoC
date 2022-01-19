const rabbit = require('amqplib');
const QUEUE_NAME = 'square';
const EXCHANGE_TYPE = 'direct';
const EXCHANGE_NAME = 'main';
const KEY = 'myKey';
// const number = '5'
connection = rabbit.connect('amqp://rabbitmq');
connection.then(async (conn)=>{
   const channel = await conn.createChannel();
   await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE);
   await channel.assertQueue(QUEUE_NAME);
   channel.bindQueue(QUEUE_NAME, EXCHANGE_NAME, KEY);
})