import './App.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const cards = [
  {
    title: 'What is Ethereum 2.0',
    content: `
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      The following are the broad design goals for ETH2:
      to minimize complexity, even at the cost of some losses in efficiency
      to remain live through major network partitions and when very large portions of nodes go offline
      to select all components such that they are either quantum secure or can be easily swapped out for quantum secure counterparts when available
      to utilize crypto and design techniques that allow for a large participation of validators in total and per unit time
      to allow for a typical consumer laptop with O(C) resources to process/validate O(1) shards (including any system level validation such as the beacon chain)
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      The following are the broad design goals for ETH2:
      to minimize complexity, even at the cost of some losses in efficiency
      to remain live through major network partitions and when very large portions of nodes go offline
      to select all components such that they are either quantum secure or can be easily swapped out for quantum secure counterparts when available
      to utilize crypto and design techniques that allow for a large participation of validators in total and per unit time
      to allow for a typical consumer laptop with O(C) resources to process/validate O(1) shards (including any system level validation such as the beacon chain)
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      The following are the broad design goals for ETH2:
      to minimize complexity, even at the cost of some losses in efficiency
      to remain live through major network partitions and when very large portions of nodes go offline
      to select all components such that they are either quantum secure or can be easily swapped out for quantum secure counterparts when available
      to utilize crypto and design techniques that allow for a large participation of validators in total and per unit time
      to allow for a typical consumer laptop with O(C) resources to process/validate O(1) shards (including any system level validation such as the beacon chain)
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
      The following are the broad design goals for ETH2:
      to minimize complexity, even at the cost of some losses in efficiency
      to remain live through major network partitions and when very large portions of nodes go offline
      to select all components such that they are either quantum secure or can be easily swapped out for quantum secure counterparts when available
      to utilize crypto and design techniques that allow for a large participation of validators in total and per unit time
      to allow for a typical consumer laptop with O(C) resources to process/validate O(1) shards (including any system level validation such as the beacon chain)
      Ethereum 2.0 (hereinafter referred to as ETH2) is the upcoming major upgrade to Ethereum Mainnet. It refers to a set of interconnected upgrades that will make Ethereum more scalable, more secure, and more sustainable. These upgrades are being built by multiple teams from across the Ethereum ecosystem.
    `,
  },
  {
    title: 'C.R.E.A.M. is bringing Flash Loans to our money markets.',
    content: `
      Flash Loans allow developers access to undercollateralized loans, provided that the borrowed amount (and fee) is returned within one transaction block.
      Flash Loans offer a wide range of use cases, including democratized liquidations, arbitrage, collateral swapping and interest rate swapping.
      Our Flash Loans feature is very similar to AAVE Flash Loans V1, except C.R.E.A.M. Flash Loans are implemented on crToken.
      There are 3 major differences between C.R.E.A.M. Flash Loans and AAVE v1 Flash Loans:
      Using C.R.E.A.M. Flash Loans devs interact with flashLoanLender contract , instead of the lending pool.
      C.R.E.A.M has deployed two flashLoanLenders that conform to EIP-3156; one for Lending and one for IronBank.
      Fee is cheaper. C.R.E.A.M. fee is 0.03%
    `,
  },
  {
    title: 'What is C.R.E.A.M. Finance?',
    content:  `
      C.R.E.A.M. Finance is a decentralized lending protocol for individuals and protocols to access financial services. The protocol is permissionless, transparent, and non-custodial.
      Currently, C.R.E.A.M. is live on Ethereum, Binance Smart Chain, and Fantom.
      C.R.E.A.M. Finance’s smart contract money markets are focused on longtail assets -- with the goal of increasing capital efficiency for all assets in crypto markets.
      Users are able to lend any supported assets on our markets, and use the provided capital as collateral to borrow another supported asset.
      C.R.E.A.M. offers a wide range of tokens on our money markets, including: stablecoins (USDT, USDC, BUSD); interest-bearing stablecoins (yCRV, yyCRV); defi tokens (YFI, SUSHI, CREAM, CREAM); LP-tokens (USDC-ETH SLP, WBTC-ETH SLP); and other cryptocurrencies (ETH, LINK). This list is not exhaustive.
      Please check the link below for the latest list of supported tokens:
    `,
  },
  {
    title: 'Crypto Rules Everything Around Me',
    content:  `
      C.R.E.A.M. Finance is a decentralized lending protocol for individuals, institutions and protocols to access financial services. Part of the yearn finance ecosystem, it is a permissionless, open source and blockchain agnostic protocol serving users on Ethereum, Binance Smart Chain, Polygon and Fantom. Users who are passively holding ETH or wBTC can deposit their assets on C.R.E.A.M. to earn yield, similar to a traditional savings account
    `,
  },
]

function App() {
  return (
    <div className="App">
      <h1>Cool Testing Page</h1>
      <section className="container-lg bg-dark">
        <div className="row g-2">
          <div className="col-xs-12 col-md-8 d-flex">
            <Card
              title={cards[0].title}
              content={cards[0].content}
            />
          </div>
          <div className="col-xs-12 col-md-4 d-flex">
            <div className="row flex-wrap g-2">
              <div className="col-12 d-flex">
                <Card
                  title={cards[1].title}
                  content={cards[1].content}
                />
              </div>
              <div className="col-6 d-flex">
                <Card
                  title={cards[2].title}
                  content={cards[2].content}
                />
              </div>
              <div className="col-6 d-flex">
                <Card
                  title={cards[3].title}
                  content={cards[3].content}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
