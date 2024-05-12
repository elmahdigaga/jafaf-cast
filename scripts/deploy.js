const { ethers } = require('hardhat')

async function main() {
  const PredictionRegistry = await ethers.getContractFactory(
    'PredictionRegistry'
  )
  const predictionRegistry = await PredictionRegistry.deploy()
  console.log('PredictionRegistry deployed to:', predictionRegistry.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
