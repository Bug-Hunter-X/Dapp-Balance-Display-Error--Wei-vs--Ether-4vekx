function getBalance() {
  const balanceInWei = await web3.eth.getBalance(address);
  const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
  return balanceInEther;
}

// ... later in the code ...

const balance = await getBalance(userAddress);
console.log(balance); // This will log the balance in ether