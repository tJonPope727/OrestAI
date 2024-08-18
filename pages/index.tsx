import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import appwriteSDK from "../utils";
import MainNavbar from "../components/Navbar";
import MainContainer from "../components/Container";

const Home: React.FC = () => {
  const authRedirect = async () => {
    try {
      await appwriteSDK.account.createOAuth2Session(
        "github",
        "http://localhost:3000/welcome",
        "http://localhost:3000"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <Head>
          <title>Appwrite Authentication with Github</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <MainContainer />
    </div>
  );
}

export default Home;