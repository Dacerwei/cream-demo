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
    `,
  },
  {
    title: 'C.R.E.A.M. is bringing Flash Loans to our money markets.',
    content: `
      Flash Loans allow developers access to under-collateralized loans,.
    `,
  },
  {
    title: '12',
    content:  `
      C.R.E.A.M. Finance is a decentralized lending protocol for individuals and protocols to access financial services. The protocol is permissionless, transparent, and non-custodial.
    `,
  },
  {
    title: 'Crypto Rules Everything Around Me',
    content:  `
      C.R.E.A.M. Finance is a decentralized lending protocol for individuals, institutions and protocols to access fi
      to minimize complexity, even at the cost of some losses in efficiency
    `,
  },
]

function App() {
  return (
    <div className="App">
      <h1>Cool Testing Page</h1>
      <section className="container-lg bg-dark p-4">
        <div className="row g-2">
          <div className="col-xs-12 col-md-8 d-flex">
            <Card
              title={cards[0].title}
              content={cards[0].content}
            />
          </div>
          <div className="col-xs-12 col-md-4 d-flex">
            <div className="row flex-column g-2">
              <div>
                <Card
                  title={cards[1].title}
                  content={cards[1].content}
                />
              </div>
              <div className="flex-grow-1 d-flex">
                <div className="row g-2">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
