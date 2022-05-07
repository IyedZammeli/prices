import styled from "styled-components";
import Pricing from "./components/Pricing";

function App() {
  return (
    <MainContainer>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "Basic data settings are available", value: true },
            { text: "Stand Alone Charts are unvailable", value: false },
            { text: "Less than 8 settings on data tables", value: false },
          ]}
          price={0}
          duration="y"
          currency="$"
          buttonContent="Get Started"
          subTitle="Great for starters"
          priceText="Discover how to create your first AG Grid Table"
          headerText="free"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: " 8 data settings are available ", value: true },
            { text: "StandAlone Charts visualisation", value: true },
            { text: " More than 20 Settings on data are available", value: false },
          ]}
          price={7}
          duration="m"
          background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          shadow="#96e6a1"
          currency="₹"
          buttonContent="Get Started"
          subTitle="For Planned Projects"
          priceText="Bring your Data to the next level and export them."
          headerText="free"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "Unlimited data settings", value: true },
            { text: "Stand Alone Charts", value: true },
            { text: "Specific settings for big data projects", value: true },
          ]}
          price={12}
          duration="y"
          background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
          shadow="#ffb199"
          currency="€"
          buttonContent="Get Started"
          subTitle="For Professional Use"
          priceText="Enjoy limitless use with interactive export options."
          headerText="free"
        />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default App;
