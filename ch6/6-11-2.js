import fs from 'fs';

run(process.argv);

export function run(args) {
  const command = parseCommand(args);
  console.log(countOrders(command));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName,
    countReadyOnly: args.includes('-r'),
  };
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  if (countReadyOnly) return orders.filter((order) => order.status === 'ready').length;
  return orders.length;
}
