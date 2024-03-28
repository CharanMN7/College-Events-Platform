import "./Profile.scss";
import bgImg from "../carousel/background.jpg";

const Profile = () => {
  return (
    <main>
      <div className="profile">
        <div>
          {/** This data should actually come from the [.json] file. For the time being i'm using static info */}
          <img src={bgImg} width={"130px"} height={"130px"} alt="Profile" />
          <article className="profile-info">
            <h1>Student Name</h1>
            <p>I am a Raghu engg student. I am happy to be here</p>
          </article>
        </div>
      </div>
      <article>
        <h1>Events Attended</h1>
      </article>
    </main>
  );
};

export default Profile;
