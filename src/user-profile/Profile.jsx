import "./Profile.scss";
import bgImg from "../carousel/background.jpg";
import data from "../carousel/carouselData.json";

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
      <article className="events-attended">
        <h1>Events Attended</h1>
        <div className="grid-container">
          {data.data.map((e, index) => {
            return (
              <div key={index} className="grid-item">
                <img
                  src={bgImg}
                  width={"100px"}
                  height={"100px"}
                  alt="Profile"
                />
                <p>{e.oneLiner}</p>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default Profile;
