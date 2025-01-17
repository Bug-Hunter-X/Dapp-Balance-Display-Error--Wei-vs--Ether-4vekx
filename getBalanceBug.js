function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

const balance = await getBalance(userAddress);
console.log(balance); // This will log the balance in wei