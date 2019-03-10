function checkCashRegister(price, cash, cid) {
  var valueMap = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };

  var change = {
    PENNY: 0,
    NICKEL: 0,
    DIME: 0,
    QUARTER: 0,
    ONE: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    "ONE HUNDRED": 0
  };

  var status = "CLOSED";
  var index = cid.length - 1;
  var diff = cash - price;

  while (diff > 0) {
    if (index < 0 && diff !== 0) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    }

    var coin = cid[index][0];

    if (diff - valueMap[coin] >= 0 && cid[index][1] > 0) {
      diff -= valueMap[coin];
      diff = diff.toFixed(2);
      cid[index][1] -= valueMap[coin];

      change[coin] += valueMap[coin];
    } else {
      if (cid[index][1] > 0) {
        status = "OPEN";
      }
      index--;
    }
  }

  if (status === "CLOSED") {
    const output = Object.entries(change).map(pair => [
      pair[0],
      pair[1].toFixed(2) / 1
    ]);
    return {
      status: status,
      change: output
    };
  } else {
    const output = Object.entries(change)
      .map(pair => [pair[0], pair[1].toFixed(2) / 1])
      .filter(a => a[1] !== 0);
    return {
      status: status,
      change: output.reverse()
    };
  }
}

var result = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
console.log(result);
