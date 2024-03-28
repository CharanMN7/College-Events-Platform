import "./Profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <div>
        {/** This data should actually come from the [.json] file. For the time being i'm using static info */}
        <img src="" alt="Profile" />
        <article className="profile-info">
          <h3>Student Name</h3>
          <p>I am a Raghu engg student. I am happy to be here</p>
        </article>
      </div>
    </section>
  );
};

export default Profile;
